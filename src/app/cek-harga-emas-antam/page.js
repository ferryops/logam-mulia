"use client";

import useDocumentTitle from "@/components/indicators/useDocumentTitle";
import GoldPriceTable from "./components/GoldPriceTable";

export default function CekHargaEmasAntam() {
  useDocumentTitle("Cek Harga Emas Antam");
  return (
    <main>
      <GoldPriceTable />
    </main>
  );
}
