import "../styles/dashboard.css"; // Import your custom CSS

const Dashboard = () => {
  return (
    <>
      <div className="main-content">
        <div className="top-section">
          <div className="active-insurance">
            <h3>Active Insurance</h3>
            <p>Expires on 12/09/2025</p>
            <h4>1</h4>
            <a href="#">View Insurance</a>
          </div>
          <div className="claims">
            <h3>Claims</h3>
            <div className="claim-details">
              <div className="claim-box">
                <h4>Approved</h4>
                <p>1</p>
              </div>
              <div className="claim-box">
                <h4>In Review</h4>
                <p>1</p>
              </div>
              <div className="claim-box">
                <h4>Rejected</h4>
                <p>1</p>
              </div>
            </div>
            <a href="#">View Details</a>
          </div>
        </div>
        <div className="bottom-section">
          <div className="left">
            <div className="health-profile">
              <h3>Your Health Profile</h3>
              <p>Status: {/* <span style="color:green">Optimal</span> */}</p>
              <p>Risk Contributors: Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="hospital-visit">
              <p>Previous hospital visit on: 12/09/2025</p>
            </div>
          </div>
          <div className="right">
            <div className="tip">
              <h3>Tip</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
