"use client";
import React, { useState, useEffect } from "react";
import "./GoldPriceTable.css";
import Image from "next/image";
import Link from "next/link";

function GoldPriceTable() {
  const [priceGold, setPriceGold] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const itemsPerPageOptions = [10, 25, 50, 100, 200, 300, 500];

  useEffect(() => {
    fetchPriceGold();
  }, []);

  const fetchPriceGold = async () => {
    try {
      const response = await fetch("/api/price-gold-antam-sell");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPriceGold(data.reverse());
      setLoading(false);
    } catch (error) {
      setError("Error fetching data: " + error.message);
      setLoading(false);
    }
  };

  const paginatedData = priceGold.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(priceGold.length / itemsPerPage);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  };

  const formatPrice = (price) => {
    return price.toLocaleString("id-ID");
  };

  const calculatePercentage = (currentPrice, previousPrice) => {
    if (!previousPrice) return "0%";
    const percentage = ((currentPrice - previousPrice) / previousPrice) * 100;
    return percentage.toFixed(2) + "%";
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="table-controls">
        <label htmlFor="itemsPerPage">Items per page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            resetPage();
          }}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Tanggal</th>
            <th>Harga</th>
            <th>Persentase</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={item[0]}>
              <td>Emas Antam</td>
              <td>{formatDate(item[0])}</td>
              <td>Rp {formatPrice(item[1])}</td>
              <td>{calculatePercentage(item[1], index > 0 ? paginatedData[index - 1][1] : null)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Sebelumnya
        </button>
        <span>
          Halaman {currentPage} dari {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Selanjutnya
        </button>
      </div>

      <div className="data-source">
        Sumber data:{" "}
        <a href="https://www.logammulia.com/" target="_blank" rel="noopener noreferrer">
          www.logammulia.com
        </a>
      </div>

      <div className="app-info">
        <h3>Tentang Web</h3>
        <p>
          Web ini menampilkan harga emas harian dari Logam Mulia ANTAM. Persentase perubahan dihitung berdasarkan perubahan harga
          dari hari sebelumnya.
        </p>
        <h4>Perhitungan Persentase:</h4>
        <p>Persentase perubahan = ((Harga Hari Ini - Harga Kemarin) / Harga Kemarin) * 100%</p>
        <p>
          Contoh: Jika harga kemarin Rp 1.000.000 dan hari ini Rp 1.050.000, maka persentase perubahannya adalah ((1.050.000 -
          1.000.000) / 1.000.000) * 100% = 5%
        </p>
      </div>

      <div className="github-link">
        <Link href="https://github.com/ferryops/api-public" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GitHub_Mark.png/923px-GitHub_Mark.png"
            alt="GitHub Logo"
            className="github-logo"
            width={24}
            height={24}
          />
          Lihat kode sumber di GitHub
        </Link>
      </div>
    </div>
  );
}

export default GoldPriceTable;
