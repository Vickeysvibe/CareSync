import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const enhancedCSS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --primary-color: #4287f5;
  --background-color: #87b7ff;
  --text-color: #333;
  --border-color: #e0e0e0;
  --google-red: #DB4437;
}
  
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  color: var(--text-color);
  background-color: var(--background-color);
}

.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.auth-form {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.auth-title {
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.input-group {
  margin-bottom: 1.25rem;
}

.input-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-field {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(66, 135, 245, 0.1);
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  color: #888;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}

.remember-me {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.remember-me input {
  margin-right: 0.5rem;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #3272d9;
}

.toggle-auth {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
}

.toggle-auth-button {
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  font-weight: 600;
}

.toggle-auth-button:hover {
  text-decoration: underline;
}
`;

const CareSyncAuth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleAuthMode = () => setIsSignUp(!isSignUp);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserID"));
    if (user) {
      navigate("/home");
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = isSignUp
      ? "https://caresync-auth.onrender.com/register"
      : "https://caresync-auth.onrender.com/login";

    const response = await axios.post(apiUrl, { email, password });
    if (response.data.UserID) {
      if (response.data.user_details) {
        localStorage.setItem("UserID", response.data.UserID);
        navigate("/home");
      } else {
        localStorage.setItem("UserID", response.data.UserID);
        navigate("/details/user-info");
      }
    } else {
      // Handle error response
      console.error("Error:", response);
      alert("email or password error");
    }
  };

  return (
    <>
      <style>{enhancedCSS}</style>
      <div className="auth-container">
        <div className="auth-form">
          <h2 className="auth-title">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email address
              </label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="submit-button">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <div className="toggle-auth">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button onClick={toggleAuthMode} className="toggle-auth-button">
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareSyncAuth;
