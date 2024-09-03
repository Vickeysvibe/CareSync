import watch from "./assets/watch.png";
import group from "./assets/Group.png";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Adjust the path as needed
  };

  return (
    <div className="body">
      <nav className="navbar">
        <div className="logo">
          {/* <img src="logo.png" alt="Company Logo" /> */}
        </div>

        <div className="auth-buttons">
          <button className="login-btn" onClick={handleLoginClick}>
            Log In
          </button>
          {/* <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button> */}
        </div>
      </nav>
      <div className="watch">
        <h2>Explore our</h2>
        <img src={watch} alt="Smartwatch Image" />
      </div>
      <section className="hero">
        <div className="hero-left">
          <h1>
            Personalized <br /> Health Companion
          </h1>
          <p>
            Your personalized healthcare companion for managing and <br />
            improving your well-being effortlessly.
          </p>
          <button className="cta-btn">Explore 🔎</button>
        </div>
        <div className="hero-right">
          <img src={group} alt="Healthcare Companion" />
        </div>
      </section>
    </div>
  );
};

export default Home;
