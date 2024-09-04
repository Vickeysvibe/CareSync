import "../styles/dashboard.css"; // Import your custom CSS

const Dashboard = () => {
  return (
    <div>
      <div className="header">
        <input type="text" placeholder="Search ..." className="search-bar" />
        <button className="download-button">Download</button>
      </div>
      <h2>Overview</h2>
      <p>Find all your updates here!</p>
      <div className="stats">
        <div className="stat-box">
          <p>Active Insurance</p>
          <p>May 24 - Jan 25</p>
          <h1>2</h1>
        </div>
        <div className="stat-box">
          <p>No of Claims</p>
          <p>May 24 - Jan 25</p>
          <h1>1</h1>
        </div>
        <div className="stat-box">
          <p>In Review</p>
          <p>May 24 - Jan 25</p>
          <h1>0</h1>
        </div>
        <div className="stat-box">
          <p>Policy renewal</p>
          <p>May 24 - Jan 25</p>
          <h1>3</h1>
        </div>
      </div>
      <div className="insurance-plans">
        <div className="insurance-plan-box">
          <h3>Basic</h3>
          <ul>
            <li>Affordable premium rates</li>
            <li>Inpatient hospitalization coverage</li>
            <li>Limited daycare treatments</li>
            <li>Basic ambulance cover</li>
            <li>Pre/post-hospitalization costs</li>
          </ul>
        </div>
        <div className="insurance-plan-box">
          <h3>Premium</h3>
          <ul>
            <li>Comprehensive coverage plan</li>
            <li>High sum insured</li>
            <li>No room rent limit</li>
            <li>Extensive daycare procedures</li>
            <li>Maternity and newborn cover</li>
            <li>Worldwide emergency coverage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
