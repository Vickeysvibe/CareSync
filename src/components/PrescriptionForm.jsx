import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PrescriptionForm = ({ setPf, prescriptionList, setPrescriptionList }) => {
  const [data, setData] = useState({
    fileName: "",
    fileURL: "",
    clinicName: "",
    description: "",
  });
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString().slice(0, 10);
    const data1 = { ...data, date: date };
    setPrescriptionList([...prescriptionList, data1]);
    setData({
      fileName: "",
      fileURL: "",
      clinicName: "",
      description: "",
    });
    setPf(false);
  };
  return (
    <form id="prescription-form" onSubmit={handleSubmit}>
      <div className="file-upload-container">
        <label className="file-upload-label">
          <i className="bx bx-upload"></i> Drag and drop or upload files
          <input
            type="file"
            id="file-upload"
            name="file-upload"
            className="file-upload"
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              const fileUrl = URL.createObjectURL(selectedFile);
              setData({
                ...data,
                fileName: selectedFile.name,
                fileURL: fileUrl,
              });
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
        value={data.clinicName}
        name="clinic-name"
        onChange={(e) => setData({ ...data, clinicName: e.target.value })}
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
