import { useState } from "react";
import { CircleDot, Menu, X, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../utils/userProvider";
import "./navbar.css";
import { MutedButton, PrimaryButton } from "../uis/button/buttons";
import { NavBarLinks } from "../../datas/uiData";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const appName = import.meta.env.VITE_APP_NAME;

  const { user, logout, loading } = useUser();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <CircleDot style={{ color: "var(--primary)", strokeWidth: 3 }} />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo-text">{appName}</span>
        </Link>
      </div>

      <div className={`nav-center ${open ? "open" : ""}`}>
        {NavBarLinks.map((ele) => (
          <Link key={ele._id} to={`/${ele.to}`} className="nav-link">
            {ele.name}
          </Link>
        ))}
      </div>

      <div className="nav-right flex items-center gap-2">
        {loading ? (
          <span>Loading...</span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <span className="font-medium">{user.name}</span>
            <span className="text-green-600">
              ₹{user.balance?.toLocaleString("en-IN") || 0}
            </span>

            <button
              onClick={logout}
              title="Logout"
              className="p-2 rounded hover:bg-gray-200"
            >
              <LogOut size={20} />
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <MutedButton text="Login" />
            </Link>
            <Link to="/signup">
              <PrimaryButton text="Sign Up" />
            </Link>
          </>
        )}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;