import React from "react";

export default function Inhabitant({ inhabitant }) {
  return (
    <div>
      {inhabitant.name} is {inhabitant.age} years old and {inhabitant.height}{" "}
      tall.
    </div>
  );
}
