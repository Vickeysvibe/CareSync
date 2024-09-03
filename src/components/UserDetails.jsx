import { useEffect, useState } from "react";
import "../styles/useDetails.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("UserID")) {
      navigate("/login");
    }
  }, [navigate]);

  // State to store form data
  const [formData, setFormData] = useState({
    user_id: localStorage.getItem("UserID"),
    full_name: "",
    dob: "",
    age: "",
    gender: "",
    phone_number: "",
    district: "",
    state: "",
    occupation: "",
    annual_income: "",
    height: "",
    weight: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async () => {
    const dataToSubmit = {
      ...formData,
      age: parseInt(formData.age), // Converting age to an integer
      annual_income: parseInt(formData.annual_income), // Converting annual income to a float with 2 decimal places
      height: parseInt(formData.height), // Converting height to a float with 2 decimal places
      weight: parseInt(formData.weight), // Converting weight to a float with 2 decimal places
      user_id: parseInt(formData.user_id), // Converting weight to a float with 2 decimal places
    };
    console.log(dataToSubmit);

    const response = await axios.post(
      `${process.env.BACKEND_URL}/user-profile`,
      dataToSubmit
    );
    if (response.data.message) {
      console.log("Form Data Submitted:", dataToSubmit);
      navigate("/details/health-info");
    } else {
      alert("Issue submitting form data");
    }
  };

  return (
    <div className="container1">
      <div className="progress-container">
        <div className="circle active">1</div>
        <div className="line"></div>
        <div className="circle">2</div>
        <div className="line"></div>
        <div className="circle">3</div>
      </div>
      <h2>Profile setup</h2>
      <form id="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label>Your Full Name:</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth (DOB):</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <div className="phone-input">
              <input type="text" value="+91" disabled />
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>District:</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Height (in cm):</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Weight (in kg):</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Occupation:</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Annual Income:</label>
            <input
              type="text"
              name="annual_income"
              value={formData.annual_income}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row next-button-row">
          <button onClick={handleSubmit} type="button" id="next-button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
