import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/book";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import booksData from "./utils/books";
import "./App.css";

function App() {
  const [books, setBooks] = useState(booksData);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg px-3">
        <Link className="navbar-brand" to="/">
          Book$tore
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={<Home books={books} setBooks={setBooks} />}
          />
          <Route
            path="/book"
            element={<Book books={books} setBooks={setBooks} />}
          />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
