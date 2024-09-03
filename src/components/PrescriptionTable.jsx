/* eslint-disable react/prop-types */
const PrescriptionTable = ({ setPf, data }) => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search ..." className="search-bar" />
      </div>
      <button
        onClick={() => {
          setPf(true);
        }}
        id="new-btn"
        className="new-btn"
      >
        New
      </button>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Clinic name</th>
            <th>Description</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="prescription-data">
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.fileName}</td>
              <td>{data.clinicName}</td>
              <td>{data.description}</td>
              <td>{data.date}</td>
              <td>
                <a href={data.fileURL} download={true}>
                  <i
                    style={{ cursor: "pointer" }}
                    className="bx bxs-download"
                  ></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PrescriptionTable;
