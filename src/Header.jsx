import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#fff",
    borderBottom: "1px solid #ddd",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const navStyle = {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
  };

  const buttonStyle = {
    border: "none",
    background: "#e74c3c",
    color: "white",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      {/* Logo / Brand */}
      <Link
        to={isLoggedIn ? "/dashboard" : "/"}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        {/* Profile Image */}
        {user && user.profilePicture ? (
          <img
            src={`https://social-media-backend-t8wk.onrender.com/profiles/${user.profilePicture}`} // e.g. "/profiles/filename.png"
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #ddd",
            }}
          />
        ) : (
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Instagram
          </span>
        )}
      </Link>

      {/* Navigation */}
      <nav style={navStyle}>
        {isLoggedIn ? (
          <>
            <Link to="/addProfile" style={linkStyle}>
              Add Profile
            </Link>
            <Link to={"/uploadPost"} style={linkStyle}>Upload Post</Link>
            <button
              style={buttonStyle}
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
            <Link to="/" style={linkStyle}>
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
