import React from "react";

export default function Inhabitant({ inhabitant, onDeleteSmurf, editSmurf }) {
  return (
    <div>
      {inhabitant.name} is {inhabitant.age} years old and {inhabitant.height}{" "}
      tall.
      <button onClick={() => onDeleteSmurf(inhabitant.id)}>Delete</button>
      <button onClick={() => editSmurf(inhabitant)}>Edit</button>
    </div>
  );
}
