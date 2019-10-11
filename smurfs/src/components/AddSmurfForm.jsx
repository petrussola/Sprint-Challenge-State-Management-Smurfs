import React from "react";

export default function AddSmurfForm() {
  return (
    <div>
      <label>
          Name: 
        <input type="text" />
      </label>

      <label>
          Age:
        <input type="text" />
      </label>

      <label>
          Height:
        <input type="text" />
      </label>

      <button>Add Smurf to the Village</button>
    </div>
  );
}
