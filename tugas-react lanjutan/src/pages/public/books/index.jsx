export default function Books() {
  return (
    <section className="bg-gray-50 py-10 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
          Koleksi Buku Terbaru
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Buku 1 */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg dark:bg-gray-800 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="The Great Adventure"
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                The Great Adventure
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                John Smith
              </p>
              <p className="mt-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                Rp120.000
              </p>
              <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition">
                Tambah ke Keranjang
              </button>
            </div>
          </div>

          {/* Buku 2 */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg dark:bg-gray-800 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Secrets of the Mind"
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Secrets of the Mind
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sarah Lee
              </p>
              <p className="mt-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                Rp95.000
              </p>
              <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition">
                Tambah ke Keranjang
              </button>
            </div>
          </div>

          {/* Buku 3 - The Hobbit */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg dark:bg-gray-800 transition duration-300">
            <img
              src="https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg"
              alt="The Hobbit"
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                The Hobbit
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                J.R.R. Tolkien
              </p>
              <p className="mt-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                Rp150.000
              </p>
              <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition">
                Tambah ke Keranjang
              </button>
            </div>
          </div>

          {/* Buku 4 - Harry Potter */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg dark:bg-gray-800 transition duration-300">
            <img
              src="https://m.media-amazon.com/images/I/71e0pu+YQ-L._AC_UF1000,1000_QL80_.jpg"
              alt="Harry Potter and the Sorcerer's Stone"
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Harry Potter and the Sorcerer’s Stone
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                J.K. Rowling
              </p>
              <p className="mt-3 text-xl font-bold text-indigo-700 dark:text-indigo-400">
                Rp135.000
              </p>
              <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-10">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 transition"
          >
            Tampilkan Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}
