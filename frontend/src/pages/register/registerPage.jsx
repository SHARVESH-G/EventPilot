import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registerPageStyles.css";
import { CircleDot } from "lucide-react";
import { statusOptinos } from "../../datas/loginFormData";
import { PrimaryButton } from "../../components/uis/button/buttons";
import axios from "../../utils/axios";
import {saveItem } from "../../utils/localStorageMethods";

const RegisterPage = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    status: "Student",
    organisationName: "",
  });

  const password = formData.password;

  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const { data } = await axios.post("/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: Number(formData.age),
        status: formData.status,
        organisationName: formData.organisationName,
      });
      saveItem("Email",data.user.email)
      alert(data.message);
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <CircleDot size={18} strokeWidth={3} className="logo-icon" />
          <h2>Create account</h2>
          <p>Join {appName}</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label>Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
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

          <div className="form-row">
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Age</label>
              <input
                name="age"
                type="number"
                placeholder="18"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Status</label>
              <select name="status" onChange={handleChange}>
                {statusOptinos.map((option) => (
                  <option key={option._id} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>Organisation Name</label>
              <input
                name="organisationName"
                type="text"
                placeholder="School / Company / College"
                onChange={handleChange}
              />
            </div>
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
};

export default RegisterPage;
