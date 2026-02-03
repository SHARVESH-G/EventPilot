
import { useState } from "react";
import { Menu , X } from 'lucide-react';

import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const appName = import.meta.env.VITE_APP_NAME

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo-dot"></span>
        <span className="logo-text">{appName}</span>
      </div>

      <div className={`nav-center ${open ? "open" : ""}`}>
        <a href="#">Discover</a>
        <a href="#">Categories</a>
        <a href="#">Organizers</a>
      </div>

      <div className="nav-right">
        <a href="#" className="login">Log in</a>
        <button className="signup">Sign Up</button>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ?< X/>:<Menu />}
        </button>
      </div>
    </nav>
  );
}
