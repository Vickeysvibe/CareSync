/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "../styles/health.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HealthInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("UserID")) {
      navigate("/login");
    }
  });
  const [formData, setFormData] = useState({
    user_id: localStorage.getItem("UserID"),
    medical_history: "",
    current_medications: "",
    allergies: "",
    family_medical_history: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = async () => {
    const dataToSubmit = {
      ...formData,
      user_id: parseInt(formData.user_id), // Converting weight to a float with 2 decimal places
    };
    console.log(dataToSubmit);

    const response = await axios.post(
      `${process.env.BACKEND_URL}/health-information`,
      dataToSubmit
    );
    if (response.data.message) {
      console.log("Form Data Submitted:", formData);
      navigate("/details/life-info");
    } else {
      alert("issue");
    }
  };

  return (
    <div className="container1">
      <div className="progress-container">
        <div className="circle active">1</div>
        <div className="line active"></div>
        <div className="circle active">2</div>
        <div className="line "></div>
        <div className="circle">3</div>
      </div>
      <h2>Health Information</h2>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="medicalHistory">Medical History:</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            placeholder="Do you have any existing medical conditions or past surgeries?"
            rows="5"
            value={formData.medical_history}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentMedications">Current Medications:</label>
          <textarea
            id="currentMedications"
            name="currentMedications"
            placeholder="Are you currently taking any medications?"
            rows="5"
            value={formData.current_medications}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="allergies">Allergies:</label>
          <textarea
            id="allergies"
            name="allergies"
            placeholder="Do you have any known allergies?"
            rows="5"
            value={formData.allergies}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="familyMedicalHistory">Family Medical History:</label>
          <textarea
            id="familyMedicalHistory"
            name="familyMedicalHistory"
            placeholder="Does your family have a history of any medical conditions?"
            rows="5"
            value={formData.family_medical_history}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="upload-button-wrapper">
        <label className="upload-label">Full body checkup report:</label>
        <input type="file" id="checkupReport" accept=".jpg,.pdf" />
        <button
          className="upload-button"
          onclick="document.getElementById('checkupReport').click()"
        >
          Upload
        </button>
      </div>

      <div className="next-button-wrapper">
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HealthInfo;
