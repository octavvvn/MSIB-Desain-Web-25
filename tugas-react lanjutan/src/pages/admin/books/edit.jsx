import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook }  from "../../../_services/books";

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Ambil data buku saat halaman dibuka
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await getBookById(id);
        setForm({
          title: res.title || "",
          author: res.author?.name || "",
          genre: res.genre?.name || "",
          price: res.price || "",
          description: res.description || "",
        });
      } catch (err) {
        console.error("Failed to fetch book:", err);
        alert("Gagal mengambil data buku");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  // Simpan perubahan buku
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateBook(id, form);
      navigate("/admin/books");
    } catch (err) {
      console.error("Failed to update book:", err);
      alert("Gagal update buku");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 text-center text-gray-500 dark:text-gray-400">
        Loading...
      </section>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-6 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Edit Book
          </h2>
          <button
            onClick={() => navigate("/admin/books")}
            className="text-sm text-indigo-700 dark:text-indigo-400 hover:underline"
          >
            ← Back to List
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter book title"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Author
            </label>
            <input
              id="author"
              type="text"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Genre */}
          <div>
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Genre
            </label>
            <input
              id="genre"
              type="text"
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter genre"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter book description"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 rounded-lg dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
