import { Outlet, useNavigate } from "react-router-dom";
import { logoutUser } from "../_services/auth";

export default function UserLayout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white shadow dark:bg-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            BookStore
          </h1>
          <nav className="flex gap-6 text-gray-700 dark:text-gray-200">
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
            <a href="/user/books" className="hover:text-indigo-600">
              Books
            </a>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
