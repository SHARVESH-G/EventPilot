
import { useState } from "react";
import { CircleDot, Menu , X } from 'lucide-react';
import {Link} from 'react-router-dom'
import "./navbar.css";
import { MutedButton, PrimaryButton } from "../uis/button/buttons";
import { NavBarLinks } from "../../datas/uiData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const appName = import.meta.env.VITE_APP_NAME

  return (
    <nav className="navbar">
      <div className="nav-left">
        <CircleDot style={{ color: "var(--primary)" , strokeWidth: 3}}/>
        <Link to="/" style={{textDecoration:"none"}}><span className="logo-text">{appName}</span></Link>
      </div>

      <div className={`nav-center ${open ? "open" : ""}`}>
        {NavBarLinks.map((ele) => (
          <Link key={ele._id} to={`/${ele.to}`} className="nav-link">{ele.name}</Link>
        ))}
      </div>

      <div className="nav-right">
        <Link to="/login"><MutedButton text="Login"/></Link>
        <Link to="/signup"><PrimaryButton text="Sign Up"/></Link>

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
