import { CircleDot } from "lucide-react";
import { PrimaryButton } from "../../components/uis/button/buttons";
import "./loginPageStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from '../../utils/axios'
import { saveItem } from "../../utils/localStorageMethods";

const LoginPage = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/auth/login", formData);
      saveItem("Email", data.user.email);
      alert(data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <CircleDot size={18} strokeWidth={3} style={{ color: "var(--primary)" }} />
          <h2>Welcome back</h2>
          <p>Log in to your {appName} account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <PrimaryButton text="Login" type="submit" />
        </form>

        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;