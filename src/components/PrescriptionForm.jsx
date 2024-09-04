import axios from "axios";
import { useState } from "react";

const PrescriptionForm = ({ setPf, prescriptionList, setPrescriptionList }) => {
  const [data, setData] = useState({
    user_id: localStorage.getItem("UserID"),
    clinic_name: "",
    description: "",
    date: undefined,
    file: undefined,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle the file upload
    const formData = new FormData();
    formData.append("user_id", parseInt(localStorage.getItem("UserID")));
    formData.append("clinic_name", data.clinic_name);
    formData.append("description", data.description);
    formData.append("date", new Date().toISOString().slice(0, 10));
    formData.append("file", data.file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/upload_prescription`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      // Reset the form data after submission
      setData({
        user_id: parseInt(localStorage.getItem("UserID")),
        clinic_name: "",
        description: "",
        date: new Date().toISOString().slice(0, 10),
        file: undefined,
      });
      setPf(false);
    } catch (error) {
      console.error("Error uploading prescription:", error);
    }
  };

  return (
    <form id="prescription-form" onSubmit={handleSubmit}>
      <div className="file-upload-container">
        <label className="file-upload-label">
          <i className="bx bx-upload"></i> Drag and drop or upload files
          <input
            type="file"
            id="file-upload"
            name="file"
            className="file-upload"
            onChange={(e) => {
              setData({ ...data, file: e.target.files[0] });
              console.log(data);
            }}
            required
          />
        </label>
      </div>
      <label htmlFor="clinic-name">Clinic Name</label>
      <input
        type="text"
        id="clinic-name"
        value={data.clinic_name}
        name="clinic-name"
        onChange={(e) => {
          console.log(data);
          setData({ ...data, clinic_name: e.target.value });
        }}
        placeholder="Your clinic name here"
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={data.description}
        placeholder="Message text goes here"
        rows="5"
        onChange={(e) => setData({ ...data, description: e.target.value })}
        required
      ></textarea>
      <button type="submit" className="upload-btn">
        Upload
      </button>
    </form>
  );
};

export default PrescriptionForm;
