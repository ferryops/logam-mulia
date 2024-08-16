import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <h1 className="text-4xl font-bold">API Public</h1>
      <Image src="https://i.imgflip.com/8zo5y5.jpg" alt="One Does Not Simply" width={500} height={0} />
      <div className="flex gap-12 justify-center">
        <Link href="/cek-harga-emas-antam">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cek Harga Emas Antam</button>
        </Link>
        <Link href="/cek-harga-buyback-emas-antam">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cek Harga Buyback Emas Antam
          </button>
        </Link>
      </div>
    </main>
  );
}
