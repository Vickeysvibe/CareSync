import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/Prescriptions.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Chat } from "./components/Chat";

export const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const funct = async () => {
      const response = await axios.get(
        "http://192.168.115.249:5000/user-details-status/" +
          localStorage.getItem("UserID")
      );
      if (!response.data.UserDetails) {
        navigate("/details/user-info");
      }
    };
    funct();
  }, [navigate]);

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
};
