import React from "react";

export default function SubmitButtonForm({
  editMode,
  newSmurf,
  addSmurf,
  editSmurfApi
}) {
  if (editMode === false) {
    return (
      <button onClick={event => addSmurf(event, newSmurf)}>Add Smurf</button>
    );
  } else {
    return <button onClick={() => editSmurfApi(newSmurf)}>Edit Smurf</button>;
  }
}
