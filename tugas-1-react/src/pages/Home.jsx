function Home() {
  return (
    <div className="container-fluid p-0">
      {/* hero section */}
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
            background: "rgba(108, 99, 255, 0.5)",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 className="fw-bold mb-2" style={{ fontSize: "2.5rem" }}>
            Welcome to Our Bookstore 📚
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            A cozy place to discover your next favorite read ✨
          </p>
        </div>
      </div>

      {/* books section */}
      <div className="container py-5">
        <h2 className="fw-semibold mb-4" style={{ color: "#6C63FF" }}>
          Popular Books
        </h2>
        <div className="row g-3 mb-5">
          {[
            {
              title: "The Great Gatsby",
              img: "https://covers.openlibrary.org/b/id/11153206-L.jpg",
            },
            {
              title: "To Kill a Mockingbird",
              img: "https://covers.openlibrary.org/b/id/12648634-L.jpg",
            },
            {
              title: "1984",
              img: "https://covers.openlibrary.org/b/id/10521202-L.jpg",
            },
            {
              title: "Pride and Prejudice",
              img: "https://covers.openlibrary.org/b/id/10958398-L.jpg",
            },
          ].map((book, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div className="card h-100 border-0 shadow-sm rounded-3 text-center">
                <img
                  src={book.img}
                  className="card-img-top"
                  alt={book.title}
                  style={{
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div className="card-body py-2">
                  <h6 className="card-title">{book.title}</h6>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#6C63FF",
                      color: "#FFF",
                      fontSize: "0.8rem",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "1rem",
                    }}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="fw-semibold mb-4" style={{ color: "#6C63FF" }}>
          Best Sellers
        </h2>
        <div className="row g-3">
          {[
            {
              title: "Harry Potter",
              img: "https://covers.openlibrary.org/b/id/10272708-L.jpg",
            },
            {
              title: "The Hobbit",
              img: "https://covers.openlibrary.org/b/id/12616364-L.jpg",
            },
            {
              title: "The Alchemist",
              img: "https://covers.openlibrary.org/b/id/10594760-L.jpg",
            },
            {
              title: "Dune",
              img: "https://covers.openlibrary.org/b/id/10840025-L.jpg",
            },
          ].map((book, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <div className="card h-100 border-0 shadow-sm rounded-3 text-center">
                <img
                  src={book.img}
                  className="card-img-top"
                  alt={book.title}
                  style={{
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                  }}
                />
                <div className="card-body py-2">
                  <h6 className="card-title">{book.title}</h6>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#6C63FF",
                      color: "#FFF",
                      fontSize: "0.8rem",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "1rem",
                    }}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
