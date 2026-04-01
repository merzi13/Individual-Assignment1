import { useState } from "react";

// This component manages and displays a counter using state
export default function Counter() {

  // State to store and update the counter value
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter Component</h2>

      {/* Display current count */}
      <p className="counterNumber">{count}</p>

      {/* Event handler to increase the counter */}
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* Event handler to decrease the counter */}
      <button onClick={() => setCount(count - 1)}>Decrease</button>

    </div>
  );
}