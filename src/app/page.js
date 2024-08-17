import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 gap-12">
      <h1 className="text-4xl font-bold">API Public</h1>
      <Image src="https://i.imgflip.com/8zo5y5.jpg" alt="One Does Not Simply" width={500} height={0} />
      <div className="w-full justify-center flex flex-col md:flex-row gap-5">
        <Link href="/cek-harga-emas-antam">
          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2">
            Cek Harga Emas Antam
          </button>
        </Link>
        <Link href="/cek-harga-buyback-emas-antam">
          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2">
            Cek Harga Buyback Emas Antam
          </button>
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex gap-5 text-gray-400 flex-col">
        <p>
          Gabut Only 🤪🥇, Berawal dari keresahan pribadi saat memantau harga emas Antam berupa chart, dimana aku harus geser
          chartnya untuk melihat harga di tanggal yang berbeda, disini aku coba sajikan dalam bentuk tabel yang gampang dibaca,
          jadi kalian bisa langsung ngerti harga emas hari ini tanpa pusing. Buat kalian yang pengen investasi emas atau mau jual
          emas, ini tuh kayak cheat sheet buat maximal profit! uhuyy.
        </p>
        <p>
          Data dari mana bang? data tetap sama dengan sumber web nya, aku pakai scraping buat dapetin datanya. Source code
          terlampir{" "}
          <Link className="underline" href="https://github.com/ferryops/api-public">
            Github
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
