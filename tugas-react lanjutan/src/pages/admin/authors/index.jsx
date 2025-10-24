import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthors, deleteAuthor } from "../../../_services/authors";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  // ambil data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAuthors();
        setAuthors(res);
      } catch (err) {
        console.error("Failed to fetch authors:", err);
      }
    };
    fetchData();
  }, []);

  // hapus data
  const handleDelete = async (id) => {
    if (!confirm("Yakin mau hapus author ini?")) return;
    try {
      await deleteAuthor(id);
      setAuthors((prev) => prev.filter((a) => a.id !== id)); // update tampilan tanpa reload
    } catch (err) {
      console.error("Failed to delete author:", err);
      alert("Gagal hapus author");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Author List
          </h2>
          <button
            onClick={() => navigate("/admin/authors/create")}
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
            Add Author
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 w-16 text-center">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? (
                authors.map((author, i) => (
                  <tr
                    key={author.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 text-center text-gray-900 dark:text-white">
                      {i + 1}
                    </td>
                    <td className="px-4 py-3 text-gray-900 dark:text-white">
                      {author.name}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            navigate(`/admin/authors/${author.id}/edit`)
                          }
                          className="text-sm px-3 py-1 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(author.id)}
                          className="text-sm px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center py-6 text-gray-400 dark:text-gray-500"
                  >
                    No authors found
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
