/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "../styles/lifestyle.css";
import LoadingPage from "./LoadingPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LifestyleInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("UserID")) {
      navigate("/login");
    }
  }, [navigate]);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_id: localStorage.getItem("UserID"),
    smoking_status: "",
    alcohol_consumption: "",
    physical_activity: "",
    family_history_CVD: "",
    family_history_diabetes: "",
    family_history_cancer: "",
    stress_level: "",
    sleep_hours: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async () => {
    const dataToSubmit = {
      ...formData,
      user_id: parseInt(formData.user_id),
      sleep_hours: parseInt(formData.sleep_hours),
      family_history_CVD: formData.family_history_CVD === "yes",
      family_history_diabetes: formData.family_history_diabetes === "yes",
      family_history_cancer: formData.family_history_cancer === "yes",
    };
    console.log(dataToSubmit);
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/lifestyle-information`,
      dataToSubmit
    );
    if (response.data.message) {
      console.log("Form Data Submitted:", dataToSubmit);
      setLoading(true);
    } else {
      alert("issue");
    }
  };

  if (!loading) {
    return (
      <div className="container1">
        <div className="progress-container">
          <div className="circle active">1</div>
          <div className="line active"></div>
          <div className="circle active">2</div>
          <div className="line active"></div>
          <div className="circle active">3</div>
        </div>
        <h2>Lifestyle Information</h2>
        <div className="form-grid">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="physical_activity">Physical activity:</label>
              <select
                id="physical_activity"
                name="physical_activity"
                value={formData.physical_activity}
                onChange={handleInputChange}
              >
                <option value="">Select...</option>
                <option value="None">None</option>
                <option value="Light">Light</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="smoking_status">Smoking status:</label>
            <select
              id="smoking_status"
              name="smoking_status"
              value={formData.smoking_status}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="Never">Never</option>
              <option value="Former">Former</option>
              <option value="Current">Current</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sleep_hours">Sleep hours:</label>
            <input
              id="sleep_hours"
              name="sleep_hours"
              value={formData.sleep_hours}
              onChange={handleInputChange}
              type="number"
              placeholder="Sleep hours"
            />
          </div>
          <div className="form-group">
            <label htmlFor="stress_level">Stress level:</label>
            <select
              id="stress_level"
              name="stress_level"
              value={formData.stress_level}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="alcohol_consumption">Alcohol consumption:</label>
            <select
              id="alcohol_consumption"
              name="alcohol_consumption"
              value={formData.alcohol_consumption}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="None">None</option>
              <option value="Light">Light</option>
              <option value="Moderate">Moderate</option>
              <option value="Heavy">Heavy</option>
            </select>
          </div>
          <div className="form-group radio-group">
            <label>Family history CVD:</label>
            <div className="radio-options">
              <input
                type="radio"
                id="cvdYes"
                name="family_history_CVD"
                value="yes"
                checked={formData.family_history_CVD === "yes"}
                onChange={handleInputChange}
              />
              <label htmlFor="cvdYes">Yes</label>
              <input
                type="radio"
                id="cvdNo"
                name="family_history_CVD"
                value="no"
                checked={formData.family_history_CVD === "no"}
                onChange={handleInputChange}
              />
              <label htmlFor="cvdNo">No</label>
            </div>
          </div>
          <div className="form-group radio-group">
            <label>Family history diabetes:</label>
            <div>
              <input
                type="radio"
                id="diabetesYes"
                name="family_history_diabetes"
                value="yes"
                checked={formData.family_history_diabetes === "yes"}
                onChange={handleInputChange}
              />
              <label htmlFor="diabetesYes">Yes</label>
              <input
                type="radio"
                id="diabetesNo"
                name="family_history_diabetes"
                value="no"
                checked={formData.family_history_diabetes === "no"}
                onChange={handleInputChange}
              />
              <label htmlFor="diabetesNo">No</label>
            </div>
          </div>
          <div className="form-group radio-group">
            <label>Family history cancer:</label>
            <div>
              <input
                type="radio"
                id="cancerYes"
                name="family_history_cancer"
                value="yes"
                checked={formData.family_history_cancer === "yes"}
                onChange={handleInputChange}
              />
              <label htmlFor="cancerYes">Yes</label>
              <input
                type="radio"
                id="cancerNo"
                name="family_history_cancer"
                value="no"
                checked={formData.family_history_cancer === "no"}
                onChange={handleInputChange}
              />
              <label htmlFor="cancerNo">No</label>
            </div>
          </div>
        </div>
        <div className="next-button-wrapper">
          <button className="next-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    return <LoadingPage />;
  }
};

export default LifestyleInfo;
