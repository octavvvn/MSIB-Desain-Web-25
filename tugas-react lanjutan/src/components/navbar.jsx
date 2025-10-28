import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../_services/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = async () => {
    await logoutUser();

    toast.success("Logout berhasil 👋 Sampai jumpa lagi!", {
      duration: 2000,
      position: "top-right",
      style: {
        background: "#dc2626",
        color: "#fff",
        borderRadius: "10px",
        padding: "10px 15px",
        fontWeight: "500",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#dc2626",
      },
    });

    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1500);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-indigo-700 dark:text-indigo-400 font-extrabold text-xl hover:opacity-90"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span>Readify</span>
          </Link>

          {/* Menu Links */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Home
            </Link>
            <Link
              to="/books"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Books
            </Link>
            <a
              href="#blog"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Blog
            </a>
            <a
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              Services
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className="hidden sm:inline text-gray-700 dark:text-gray-300 font-medium">
                  Hi, {user.name || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-full text-sm px-4 py-2 transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white font-medium rounded-full text-sm px-4 py-2 transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-full text-sm px-4 py-2 transition-all"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
