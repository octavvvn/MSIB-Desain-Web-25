import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGenres, deleteGenre } from "../../../_services/genres";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (err) {
        console.error("Error loading genres:", err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Yakin mau hapus genre ini?")) return;
    try {
      await deleteGenre(id);
      setGenres((prev) => prev.filter((g) => g.id !== id)); // hapus dari list tanpa reload
    } catch (err) {
      console.error("Failed to delete genre:", err);
      alert("Gagal hapus genre");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Genre List
          </h2>
          <button
            onClick={() => navigate("/admin/genres/create")}
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
            Add Genre
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3 w-16 text-center">#</th>
                <th className="px-4 py-3">Genre Name</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {genres.length > 0 ? (
                genres.map((genre, i) => (
                  <tr
                    key={genre.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 text-center text-gray-900 dark:text-white">
                      {i + 1}
                    </td>
                    <td className="px-4 py-3 text-gray-900 dark:text-white">
                      {genre.name}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            navigate(`/admin/genres/${genre.id}/edit`)
                          }
                          className="text-sm px-3 py-1 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(genre.id)}
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
                    No genres found
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
