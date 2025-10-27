export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.06),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.06),transparent_50%)]"
      />
      {/* gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-500/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl dark:bg-fuchsia-500/20" />

      <div className="relative mx-auto max-w-screen-xl px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-10 lg:py-24">
        {/* Left: text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:ring-indigo-800">
            New collection
            <span className="inline-block h-1 w-1 rounded-full bg-indigo-400" />
            Fall Reads 2025
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Discover Your <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">Next Favorite Book</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            Jelajahi ribuan judul lintas genre & penulis. Kelola koleksi bacaanmu dengan mudah—semuanya dalam satu tempat.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/books"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-500/20 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
            >
              Browse Books
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* tombol sekunder, bukan create account */}
            <a
              href="/books?sort=bestseller"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Lihat Bestseller
            </a>
          </div>

          {/* quick genres */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Popular genres:{' '}
            <a href="/books?genre=fantasy" className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-200">
              Fantasy
            </a>{' '}•{' '}
            <a href="/books?genre=romance" className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-200">
              Romance
            </a>{' '}•{' '}
            <a href="/books?genre=thriller" className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-200">
              Thriller
            </a>
          </div>

          {/* small stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800/60">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">10k+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Judul aktif</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800/60">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">4.8/5</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Rata-rata ulasan</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800/60">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">Cepat</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Pengiriman</p>
            </div>
          </div>
        </div>

        {/* Right: book cover mosaic */}
        <div className="mt-12 lg:mt-0">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop"
              alt="Hardcover books on a table"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop"
              alt="Open book with glasses"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-md translate-y-6"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
              alt="Books stacked vertically"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1528208079124-22fbe634e8cf?q=80&w=1200&auto=format&fit=crop"
              alt="Bookstore shelf"
              className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1455885666463-9c907a1eb734?q=80&w=1200&auto=format&fit=crop"
              alt="Cozy reading corner"
              className="aspect-[16/10] w-full rounded-2xl object-cover shadow-md translate-y-3"
              loading="lazy"
            />
          </div>

          {/* floating testimonial card */}
          <div className="pointer-events-none relative -mt-6 sm:-mt-8">
            <div className="mx-auto w-fit rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-700 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-gray-800/70 dark:text-gray-200">
              “Koleksinya lengkap, tampilannya cakep, belanja buku jadi makin asik.” — <span className="font-semibold">Pembaca puas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
