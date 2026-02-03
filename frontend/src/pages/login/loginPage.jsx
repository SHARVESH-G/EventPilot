import { CircleDot } from "lucide-react";
import { PrimaryButton } from "../../components/uis/button/buttons";
import "./loginPageStyles.css";
import {Link} from 'react-router-dom';
export default function LoginPage() {
  const appName = import.meta.env.VITE_APP_NAME

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <CircleDot size={18} strokeWidth={3} style={{color:"var(--primary)"}} />
          <h2>Welcome back</h2>
          <p>Log in to your {appName} account</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <PrimaryButton text={"Login"}/>
        </form>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
