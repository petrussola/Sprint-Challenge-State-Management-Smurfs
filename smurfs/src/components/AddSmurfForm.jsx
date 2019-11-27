import React from "react";
import SubmitButtonForm from "./SubmitButtonForm";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function AddSmurfForm({
  newSmurf,
  typeSmurfForm,
  addSmurf,
  editSmurfApi,
  editMode
}) {
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newSmurf.name}
          onChange={typeSmurfForm}
        />
      </label>

      <label>
        Age:
        <input
          type="text"
          name="age"
          value={newSmurf.age}
          onChange={typeSmurfForm}
        />
      </label>

      <label>
        Height:
        <input
          type="text"
          name="height"
          value={newSmurf.height}
          onChange={typeSmurfForm}
        />
      </label>
      <SubmitButtonForm
        newSmurf={newSmurf}
        addSmurf={addSmurf}
        editSmurfApi={editSmurfApi}
        editMode={editMode}
      />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(AddSmurfForm);
