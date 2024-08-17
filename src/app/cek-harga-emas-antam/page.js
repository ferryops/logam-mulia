"use client";

import useDocumentTitle from "@/components/indicators/useDocumentTitle";
import GoldPriceTable from "./components/GoldPriceTable";
import ButtonViewSourceCode from "@/components/UI/ButtonViewSourceCode";
import Link from "next/link";

export default function CekHargaEmasAntam() {
  const name = "⭐Cek Harga Emas Antam";
  useDocumentTitle(name);
  return (
    <main className="py-5 px-2 md:px-0">
      <h1 className="text-3xl font-bold text-gray-200 text-center">{name}</h1>
      <GoldPriceTable />
      <div className="w-full md:w-1/2 m-auto flex items-center gap-5">
        <Link href="/">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2"
          >
            Beranda
          </button>
        </Link>
        <ButtonViewSourceCode href={"https://github.com/ferryops/api-public"} />
      </div>
    </main>
  );
}
