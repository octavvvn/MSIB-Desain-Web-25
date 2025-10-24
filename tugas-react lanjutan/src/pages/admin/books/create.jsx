import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../../../_services/books";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        console.error("Failed to fetch books:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Book List
          </h2>
          <button
            onClick={() => navigate("/admin/books/create")}
            className="flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add Book
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Genre</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book) => (
                  <tr key={book.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 text-gray-900 dark:text-white">
                      {book.title}
                    </td>
                    <td className="px-4 py-3">{book.genre?.name || "-"}</td>
                    <td className="px-4 py-3">{book.author?.name || "-"}</td>
                    <td className="px-4 py-3">{book.description || "-"}</td>
                    <td className="px-4 py-3">{book.price || "-"}</td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-400 dark:text-gray-500"
                  >
                    No books found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

