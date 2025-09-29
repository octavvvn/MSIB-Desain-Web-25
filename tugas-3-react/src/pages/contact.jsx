function Contact() {
  return (
    <div className="container mt-5">
      {/* Header */}
      <div
        className="text-center py-5 rounded-3 mb-4 text-white"
        style={{
          background: "linear-gradient(135deg, #6C63FF, #5A52D4)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="fw-bold mb-2" style={{ fontSize: "2rem" }}>
          Contact Us
        </h2>
        <p style={{ fontSize: "1rem", opacity: 0.9 }}>
          We'd love to hear from you! ✨
        </p>
      </div>

      {/* Form */}
      <div
        className="col-md-6 mx-auto p-4 rounded-3 shadow"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            className="form-control rounded-pill shadow-sm"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control rounded-pill shadow-sm"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            className="form-control rounded-3 shadow-sm"
            rows="4"
            placeholder="Write your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn w-100 fw-bold"
          style={{
            backgroundColor: "#6C63FF",
            color: "#FFF",
            transition: "0.3s",
            borderRadius: "50px",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#5A52D4")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#6C63FF")
          }
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
