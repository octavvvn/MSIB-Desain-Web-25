import React from "react";

function Book({ books, setBooks }) {
  const handleAddBook = () => {
    const newBook = {
      id: Date.now(),
      title: "Belajar React JS",
      author: "Octaviani Nursalsabila",
      price: 50000,
      cover: "",
    };

    setBooks([...books, newBook]);

    alert(`Buku "${newBook.title}" by ${newBook.author} berhasil ditambahkan!`);
  };

  return (
    <div className="container mt-5">
      {/* Header */}
      <div
        className="text-center py-5 text-white rounded-3 mb-5"
        style={{
          background: "linear-gradient(135deg, #6C63FF, #5A52D4)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="fw-bold mb-2 fs-1">All Books 📖</h2>
        <p className="fs-6 opacity-75">
          Browse our full collection of amazing books
        </p>
        <button
          className="btn fw-bold mt-3"
          style={{
            backgroundColor: "#FFD966",
            color: "#333",
            borderRadius: "1rem",
            padding: "8px 16px",
          }}
          onClick={handleAddBook}
        >
          + Tambah Buku
        </button>
      </div>

      {/* Book Cards */}
      <div className="row g-4">
        {books.map((b) => (
          <div className="col-6 col-md-4 col-lg-3" key={b.id}>
            <div
              className="card h-100 shadow-sm border-0 rounded-4 text-center book-card"
              style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
            >
              {/* Cover */}
              {b.cover ? (
                <img
                  src={b.cover}
                  alt={b.title}
                  className="card-img-top"
                  style={{
                    height: "150px",
                    objectFit: "cover",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
              ) : (
                <div
                  style={{
                    background: "#E0D7FF",
                    height: "150px",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#6C63FF",
                    fontWeight: "bold",
                  }}
                >
                  📚
                </div>
              )}

              {/* Card Body */}
              <div className="card-body">
                <h6 className="card-title fw-bold">{b.title}</h6>
                <p className="text-muted mb-1">by {b.author}</p>
                <p className="fw-semibold text-success mb-3">
                  Rp {b.price.toLocaleString("id-ID")}
                </p>
                <button
                  className="btn btn-sm fw-bold"
                  style={{
                    backgroundColor: "#6C63FF",
                    color: "#fff",
                    borderRadius: "1rem",
                    padding: "6px 14px",
                  }}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .book-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
        }
      `}</style>
    </div>
  );
}

export default Book;
