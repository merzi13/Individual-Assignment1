import { useState } from "react";

// This component displays student profile information using props
export default function Profile({ name, project, status }) {

  // State to control showing or hiding details
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="card">
      <h2>Student Profile</h2>

      {/* Display student name */}
      <div className="infoRow">
        <span className="label">Name:</span> {name}
      </div>

      {/* Event handler to toggle details visibility */}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {/* Conditional rendering: show details only if enabled */}
      {showDetails && (
        <div style={{ marginTop: "16px" }}>
          
          <div className="infoRow">
            <span className="label">Project:</span> {project}
          </div>

          {/* Conditional styling based on status */}
          <div
            className={`status ${
              status === "Completed" ? "completed" : "progress"
            }`}
          >
            Status: {status}
          </div>

        </div>
      )}
    </div>
  );
}