import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addGenre } from "../../../_services/genres";

export default function CreateGenre() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addGenre({ name });
      setMessage("✅ Genre added successfully!");
      setName("");
      setTimeout(() => navigate("/admin/genres"), 1200);
    } catch (err) {
      console.error("Error adding genre:", err);
      setMessage("❌ Failed to add genre. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg max-w-md mx-auto p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Add New Genre
        </h2>

        {/* Message */}
        {message && (
          <div
            className={`mb-4 text-sm font-medium ${message.startsWith("✅")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
              }`}
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Genre Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter genre name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-3">
            <button
              type="button"
              onClick={() => navigate("/admin/genres")}
              className="text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-4 focus:ring-indigo-300 ${loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-700 hover:bg-indigo-800"
                }`}
            >
              {loading ? "Adding..." : "Add Genre"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
