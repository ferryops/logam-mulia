"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/components/indicators/Loading";
import Error from "@/components/indicators/Error";
import Pagination from "@/components/UI/Pagination";

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

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="w-full flex flex-col gap-5 py-5">
      <div className="w-full md:w-1/2 m-auto flex justify-end">
        <label>Items per page:</label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
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

      <table className="w-full md:w-1/2 m-auto text-xs md:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Harga
            </th>
            <th scope="col" className="px-6 py-3">
              Persentase
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={item[0]} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{formatDate(item[0])}</td>
              <td className="px-6 py-4">Rp {formatPrice(item[1])}</td>
              <td className="px-6 py-4">{calculatePercentage(item[1], index > 0 ? paginatedData[index - 1][1] : null)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />

      <div className="block w-full md:w-1/2 m-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-auto">
        <h5 className="mb-2 text-sm md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tentang Web</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-xs md:text-sm">
          Web ini menampilkan harga emas harian dari Logam Mulia ANTAM. Persentase perubahan dihitung berdasarkan perubahan harga
          dari hari sebelumnya.
          <br /> <br /> Perhitungan Persentase: <br /> Persentase perubahan = ((Harga Hari Ini - Harga Kemarin) / Harga Kemarin) *
          100% <br /> Contoh: Jika harga kemarin Rp 1.000.000 dan hari ini Rp 1.050.000, maka persentase perubahannya adalah
          ((1.050.000 - 1.000.000) / 1.000.000) * 100% = 5%
        </p>
        <Link href="https://www.logammulia.com/" target="_blank" rel="noopener noreferrer">
          www.logammulia.com
        </Link>
      </div>
    </div>
  );
}

export default GoldPriceTable;
