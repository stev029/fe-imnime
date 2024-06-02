import Header from "../header";

export default function Page404() {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold">4<span className="text-blue-600">0</span>4</h1>
        <p className="text-xl mt-4">Halaman tidak ditemukan</p>
        <a href="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Kembali ke Beranda</a>
      </div>
    </>
  )
}

