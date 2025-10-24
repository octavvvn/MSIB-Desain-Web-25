import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGenreById, updateGenre } from "../../../_services/genres";

export default function EditGenre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const res = await getGenreById(id);
        setForm({ name: res.name });
      } catch (err) {
        console.error("Failed to fetch genre:", err);
        alert("Gagal mengambil data genre");
      } finally {
        setLoading(false);
      }
    };
    fetchGenre();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateGenre(id, form);
      navigate("/admin/genres");
    } catch (err) {
      console.error("Failed to update genre:", err);
      alert("Gagal update genre");
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
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-6 max-w-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Edit Genre
          </h2>
          <button
            onClick={() => navigate("/admin/genres")}
            className="text-sm text-indigo-700 dark:text-indigo-400 hover:underline"
          >
            ← Back to List
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Genre Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter genre name"
              required
            />
          </div>

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
