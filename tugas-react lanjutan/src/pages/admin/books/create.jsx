import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../../_services/books";

export default function CreateBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addBook(formData);
      setMessage("✅ Book added successfully!");
      setFormData({
        title: "",
        author: "",
        genre: "",
        price: "",
        description: "",
      });
      setTimeout(() => navigate("/admin/books"), 1200);
    } catch (err) {
      console.error("Error adding book:", err);
      setMessage("❌ Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg max-w-2xl mx-auto p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Add New Book
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
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Author */}
          <div>
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Author
            </label>
            <input
              id="author"
              type="text"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Genre */}
          <div>
            <label
              htmlFor="genre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Genre
            </label>
            <input
              id="genre"
              type="text"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Enter genre"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="0"
              step="0.01"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short description..."
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-3">
            <button
              type="button"
              onClick={() => navigate("/admin/books")}
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
              {loading ? "Adding..." : "Add Book"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

