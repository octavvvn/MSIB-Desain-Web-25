function Team() {
  return (
    <div className="container mt-5">
      {/* Header */}
      {/* Header */}
      <div
        className="text-center py-5 text-white rounded-3 mb-5" // <-- tambahin mb-5
        style={{
          background: "linear-gradient(135deg, #6C63FF, #5A52D4)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="fw-bold mb-2" style={{ fontSize: "2rem" }}>
          Our Team
        </h2>
        <p style={{ fontSize: "1rem", opacity: 0.9 }}>
          Meet the talented minds behind our bookstore! ✨
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4 mt-4">{/* ...cards */}</div>

      {/* Cards */}
      <div className="row g-4 mt-4">
        {[
          {
            name: "Lucas",
            role: "Manager",
            img: "https://i.pinimg.com/736x/2f/9d/95/2f9d95f57b6a408e14c6297f5bb5739b.jpg",
          },
          {
            name: "Octaviani",
            role: "Developer",
            img: "https://i.pinimg.com/736x/ba/91/28/ba9128447d8755e9bb7c09cc3b8e8206.jpg",
          },
          {
            name: "Carmen",
            role: "Designer",
            img: "https://i.pinimg.com/736x/da/fc/cf/dafccf0df1e3ac1f55193280c47d12b0.jpg",
          },
        ].map((member, idx) => (
          <div className="col-md-4" key={idx}>
            <div
              className="card border-0 rounded-4 h-100 text-center team-card"
              style={{
                background: "linear-gradient(135deg, #F8F7FF, #EDEBFF)",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={member.img}
                className="card-img-top w-50 mx-auto mt-3 rounded-circle shadow"
                alt={member.name}
                style={{
                  border: "4px solid #6C63FF",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title fw-semibold"
                  style={{ color: "#3F3D56" }}
                >
                  {member.name}
                </h5>
                <span
                  className="badge px-3 py-2"
                  style={{
                    backgroundColor: "#6C63FF",
                    color: "#fff",
                    borderRadius: "1rem",
                    fontSize: "0.8rem",
                  }}
                >
                  {member.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover effect */}
      <style>{`
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default Team;
