import React, { useState } from "react";
import { loginUser } from "../../_services/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await loginUser(form);

      // Simpan token & user ke localStorage
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      const isAdmin =
        res.user.is_admin === true ||
        res.user.role === "admin" ||
        res.user.role_id === 1;

      // tampilkan notifikasi login sukses
      toast.success(
        `Selamat datang kembali, ${res.user.name || "User"}! 👋`,
        {
          duration: 2500,
          position: "top-right",
          style: {
            background: "#16a34a",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 15px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#16a34a",
          },
        }
      );

      setTimeout(() => {
        if (isAdmin) {
          navigate("/admin", { replace: true });
        } else {
          navigate("/books", { replace: true });
        }
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Email atau password salah!");
      toast.error("Gagal login! Coba periksa email & password.", {
        duration: 2500,
        position: "top-right",
        style: {
          background: "#dc2626",
          color: "#fff",
          borderRadius: "10px",
          padding: "10px 15px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <Toaster />

      <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white ${loading
                  ? "bg-gray-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
                } focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                href="/register"
                className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
