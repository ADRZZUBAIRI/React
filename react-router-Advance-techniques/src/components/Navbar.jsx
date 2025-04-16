import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/dashboard">Dashboard</NavLink> |{" "}
      <button onClick={() => navigate("/dashboard/user/42")}>
        Go to User 42
      </button>
    </nav>
  );
}
