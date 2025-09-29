function Footer() {
  return (
    <footer className="footer text-center mt-5">
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} Website Octaviani. All Rights Reserved.
        </p>
        <p className="mb-0">
          <a
            href="https://github.com/octavvvn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          | <a href="mailto:octa23080ti@student.nurulfikri.ac.id">Email</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
