import React from "react";

function Home({ books }) {
  const bookCard = (book) => (
    <div className="col-6 col-md-3" key={book.id}>
      <div
        className="card h-100 border-0 rounded-3 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #6C63FF, #5A52D4)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
      >
        <div
          style={{
            height: "160px",
            background: "#E0D7FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#6C63FF",
          }}
        >
          📖
        </div>
        <div className="card-body py-3">
          <h6 className="card-title fw-semibold">{book.title}</h6>
          <p className="text-light mb-0">{book.author}</p>
          <p className="fw-bold text-warning">
            Rp {book.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "400px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(108, 99, 255, 0.55)",
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "2.8rem",
              textShadow: "2px 2px 6px rgba(0,0,0,0.4)",
            }}
          >
            Welcome to Our Bookstore 📚
          </h1>
          <p style={{ fontSize: "1.2rem", fontWeight: 400 }}>
            A cozy place to discover your next favorite read ✨
          </p>
        </div>
      </div>

      {/* Books Section */}
      <div className="container py-5">
        <h2 className="fw-semibold mb-3" style={{ color: "#6C63FF" }}>
          Our Books
        </h2>
        <div
          style={{
            height: "3px",
            width: "60px",
            backgroundColor: "#FFD700",
            marginBottom: "1.5rem",
          }}
        ></div>
        <div className="row g-4">{books.map(bookCard)}</div>
      </div>
    </div>
  );
}

export default Home;
