function Home() {
  const bookCard = (book) => (
    <div className="col-6 col-md-3" key={book.title}>
      <div
        className="card h-100 border-0 rounded-3 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #6C63FF, #5A52D4)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        <img
          src={book.img}
          className="card-img-top"
          alt={book.title}
          style={{
            height: "160px",
            objectFit: "cover",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        />
        <div className="card-body py-3">
          <h6 className="card-title fw-semibold">{book.title}</h6>
          <button
            className="btn px-3 py-1 mt-2"
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              fontSize: "0.85rem",
              borderRadius: "1rem",
              transition: "0.3s",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e6c200")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
          >
            Detail
          </button>
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
          Popular Books
        </h2>
        <div
          style={{
            height: "3px",
            width: "60px",
            backgroundColor: "#FFD700",
            marginBottom: "1.5rem",
          }}
        ></div>
        <div className="row g-4 mb-5">
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
          ].map(bookCard)}
        </div>

        <h2 className="fw-semibold mb-3" style={{ color: "#6C63FF" }}>
          Best Sellers
        </h2>
        <div
          style={{
            height: "3px",
            width: "60px",
            backgroundColor: "#FFD700",
            marginBottom: "1.5rem",
          }}
        ></div>
        <div className="row g-4">
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
          ].map(bookCard)}
        </div>
      </div>
    </div>
  );
}

export default Home;
