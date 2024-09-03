import { useState } from "react";
import PrescriptionForm from "./PrescriptionForm.jsx";
import PrescriptionTable from "./PrescriptionTable.jsx";

const MainContent = () => {
  const [pf, setPf] = useState(false);
  const [prescriptionList, setPrescriptionList] = useState([]);
  console.log(pf);
  return (
    <div className="main-content">
      <div className="header">
        <h1>PRESCRIPTION</h1>
      </div>
      <div className="dynamic">
        {prescriptionList.length < 1 && (
          <div
            onClick={() => {
              setPf(!pf);
            }}
            className="first"
          >
            <button id="add-button" className="add-btn">
              <i className="bx bx-plus"></i>
              <p>Upload Your First Prescription</p>
            </button>
          </div>
        )}
        <div
          id="popup-form"
          className="popup-form"
          style={pf ? { display: "block" } : { display: "none" }}
        >
          <PrescriptionForm
            prescriptionList={prescriptionList}
            setPrescriptionList={setPrescriptionList}
            setPf={setPf}
          />
        </div>
        <div
          className="second"
          style={
            prescriptionList.length > 0
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <PrescriptionTable setPf={setPf} data={prescriptionList} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
