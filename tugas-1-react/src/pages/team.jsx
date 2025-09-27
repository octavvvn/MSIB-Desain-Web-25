function Team() {
  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="text-center py-4" style={{ background: "linear-gradient(90deg, #E0D7FF, #F0F0FF)" }}>
        <h2 className="fw-bold mb-2" style={{ color: "#6C63FF", fontSize: "2rem" }}>Our Team</h2>
        <p style={{ color: "#555", fontSize: "1rem" }}>Meet the talented minds behind our bookstore!</p>
      </div>

      <div className="row g-3 mt-3">
        {/* Alice */}
        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 h-100 text-center team-card" style={{ backgroundColor: "#F0F0FF", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <img
              src="https://i.pinimg.com/736x/2f/9d/95/2f9d95f57b6a408e14c6297f5bb5739b.jpg"
              className="card-img-top w-25 mx-auto mt-3 rounded-circle shadow-sm"
              alt="Alice"
            />
            <div className="card-body py-2">
              <h5 className="card-title fw-semibold" style={{ color: "#3F3D56", fontSize: "1.1rem" }}>Lucas</h5>
              <p className="card-text" style={{ color: "#6C63FF", fontSize: "0.9rem" }}>Manager</p>
            </div>
          </div>
        </div>

        {/* Bob */}
        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 h-100 text-center team-card" style={{ backgroundColor: "#F0F0FF", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <img
              src="https://i.pinimg.com/736x/ba/91/28/ba9128447d8755e9bb7c09cc3b8e8206.jpg"
              className="card-img-top w-25 mx-auto mt-3 rounded-circle shadow-sm"
              alt="Bob"
            />
            <div className="card-body py-2">
              <h5 className="card-title fw-semibold" style={{ color: "#3F3D56", fontSize: "1.1rem" }}>Octaviani</h5>
              <p className="card-text" style={{ color: "#6C63FF", fontSize: "0.9rem" }}>Developer</p>
            </div>
          </div>
        </div>

        {/* Charlie */}
        <div className="col-md-4">
          <div className="card border-0 shadow rounded-4 h-100 text-center team-card" style={{ backgroundColor: "#F0F0FF", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <img
              src="https://i.pinimg.com/736x/da/fc/cf/dafccf0df1e3ac1f55193280c47d12b0.jpg"
              className="card-img-top w-25 mx-auto mt-3 rounded-circle shadow-sm"
              alt="Charlie"
            />
            <div className="card-body py-2">
              <h5 className="card-title fw-semibold" style={{ color: "#3F3D56", fontSize: "1.1rem" }}>Carmen</h5>
              <p className="card-text" style={{ color: "#6C63FF", fontSize: "0.9rem" }}>Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <style>{`
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default Team;
