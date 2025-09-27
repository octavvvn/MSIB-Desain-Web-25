function Contact() {
  return (
    <div className="container mt-5">
      <div
        className="text-center py-4 mb-4"
        style={{ background: "linear-gradient(90deg, #E0D7FF, #F0F0FF)" }}
      >
        <h2
          className="fw-bold mb-2"
          style={{ color: "#6C63FF", fontSize: "2rem" }}
        >
          Contact Us 
        </h2>
        <p style={{ color: "#555", fontSize: "1rem" }}>
          We'd love to hear from you!
        </p>
      </div>

      <form className="col-md-6 mx-auto">
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
      </form>
    </div>
  );
}

export default Contact;
