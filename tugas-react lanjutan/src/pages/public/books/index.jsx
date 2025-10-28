import React, { useState } from "react";

export default function Books() {
  const [search, setSearch] = useState("");

  const books = [
    {
      title: "The Great Adventure",
      author: "John Smith",
      price: "Rp120.000",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Secrets of the Mind",
      author: "Sarah Lee",
      price: "Rp95.000",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: "Rp150.000",
      image:
        "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Harry Potter and the Sorcerer’s Stone",
      author: "J.K. Rowling",
      price: "Rp135.000",
      image:
        "https://m.media-amazon.com/images/I/71e0pu+YQ-L._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  // filter berdasarkan search
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-10 pt-24">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            📚 Explore Our Book Collection
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Discover your next favorite read from our latest book collection.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white py-3 px-5 pl-12 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>
        </div>

        {/* Book grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    NEW
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {book.author}
                  </p>
                  <p className="text-xl font-bold text-indigo-700 dark:text-indigo-400">
                    {book.price}
                  </p>
                  <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
              ❌ No books found for “{search}”
            </div>
          )}
        </div>

        {/* Load more button */}
        <div className="w-full text-center mt-10">
          <button
            type="button"
            className="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-900 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-indigo-700 dark:hover:text-white transition"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
