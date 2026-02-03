// RegisterPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./registerPageStyles.css";
import { statusOptinos } from "../../datas/loginFormData";
import { PrimaryButton } from "../../components/uis/button/buttons";

export default function RegisterPage() {
  const appName = import.meta.env.VITE_APP_NAME;
  const [password, setPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <span className="logo-dot"></span>
          <h2>Create account</h2>
          <p>Join {appName}</p>
        </div>

        <form className="register-form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-hints">
              <span className={rules.length ? "valid" : ""}>8+ characters</span>
              <span className={rules.upper ? "valid" : ""}>Uppercase</span>
              <span className={rules.lower ? "valid" : ""}>Lowercase</span>
              <span className={rules.number ? "valid" : ""}>Number</span>
              <span className={rules.special ? "valid" : ""}>
                Special character
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className="input-group">
            <label>Age</label>
            <input type="number" placeholder="18" />
          </div>

          <div className="input-group">
            <label>Status</label>
            <select>
              {statusOptinos.map((option) => (
                <option key={option._id} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Organisation Name</label>
            <input type="text" placeholder="School / Company / College" />
          </div>

          <PrimaryButton text="Sign up" type="submit" />

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
