import { useState } from "react";

// This component handles user input and form submission with validation
export default function Form() {

  // State to store user input
  const [name, setName] = useState("");

  // State to store feedback message
  const [message, setMessage] = useState("");

  // State to track success or error status
  const [isSuccess, setIsSuccess] = useState(false);

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (name.trim() === "") {
      setMessage("Please enter your name.");
      setIsSuccess(false);
    } else {
      setMessage(`Thank you, ${name}! Your form has been submitted successfully.`);
      setIsSuccess(true);
    }
  };

  return (
    <div className="card">
      <h2>Form Component</h2>

      {/* Form element */}
      <form onSubmit={handleSubmit} className="formGroup">

        {/* Input field */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* Conditional rendering: show message only if exists */}
      {message && (
        <p className={`message ${isSuccess ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
}