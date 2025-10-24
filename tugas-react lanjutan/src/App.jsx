import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";

// Auth
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// Admin
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";

// ✳️ Authors & Genres
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import EditAuthor from "./pages/admin/authors/edit";

import AdminGenres from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";
import EditGenre from "./pages/admin/genres/edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
          </Route>

          {/* Auth */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Admin */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            {/* Books */}
            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BookCreate />} />
            </Route>

            {/* Authors */}
            <Route path="authors">
              <Route index element={<AdminAuthors />} />
              <Route path="create" element={<AuthorCreate />} />
              <Route path=":id/edit" element={<EditAuthor />} /> {/* NEW */}
            </Route>

            {/* Genres */}
            <Route path="genres">
              <Route index element={<AdminGenres />} />
              <Route path="create" element={<GenreCreate />} />
              <Route path=":id/edit" element={<EditGenre />} /> {/* NEW */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
