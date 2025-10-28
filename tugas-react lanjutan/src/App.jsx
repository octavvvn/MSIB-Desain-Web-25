import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./layouts/ProtectedRoute";

// ================= PUBLIC =================
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";

// ================= AUTH =================
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// ================= ADMIN =================
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";
import EditBook from "./pages/admin/books/edit";

// Authors & Genres
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import EditAuthor from "./pages/admin/authors/edit";

import AdminGenres from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";
import EditGenre from "./pages/admin/genres/edit";

// ================= USER =================
import UserLayout from "./layouts/user"; // 🆕 user layout

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
          </Route>

          {/* ================= AUTH ROUTES ================= */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* ================= ADMIN ROUTES (PROTECTED) ================= */}
          <Route
            path="admin"
            element={
              <ProtectedRoute role="admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />

            {/* Books */}
            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BookCreate />} />
              <Route path=":id/edit" element={<EditBook />} />
            </Route>

            {/* Authors */}
            <Route path="authors">
              <Route index element={<AdminAuthors />} />
              <Route path="create" element={<AuthorCreate />} />
              <Route path=":id/edit" element={<EditAuthor />} />
            </Route>

            {/* Genres */}
            <Route path="genres">
              <Route index element={<AdminGenres />} />
              <Route path="create" element={<GenreCreate />} />
              <Route path=":id/edit" element={<EditGenre />} />
            </Route>
          </Route>

          {/* ================= USER ROUTES (PROTECTED) ================= */}
          <Route
            path="user"
            element={
              <ProtectedRoute role="user">
                <UserLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Books />} /> {/* default halaman user */}
            <Route path="books" element={<Books />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
