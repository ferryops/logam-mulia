"use client";

import useDocumentTitle from "@/components/indicators/useDocumentTitle";
import GoldPriceTableBuyBack from "./components/GoldPriceTableBuyBack";

export default function CekHargaBuybackEmasAntam() {
  useDocumentTitle("Cek Harga Buyback Emas Antam");
  return (
    <main>
      <GoldPriceTableBuyBack />
    </main>
  );
}
