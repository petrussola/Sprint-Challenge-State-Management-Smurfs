import React from "react";

export default function Inhabitant({ inhabitant, onDeleteSmurf }) {
  return (
    <div>
      {inhabitant.name} is {inhabitant.age} years old and {inhabitant.height}{" "}
      tall.
      <button onClick={() => onDeleteSmurf(inhabitant.id)}>Delete</button>
    </div>
  );
}
