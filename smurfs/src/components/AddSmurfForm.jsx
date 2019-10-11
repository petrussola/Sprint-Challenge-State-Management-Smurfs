import React from "react";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function AddSmurfForm({ newSmurf, typeSmurfForm, addSmurf, editSmurfApi }) {
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

      <button onClick={event => addSmurf(event, newSmurf)}>Add Smurf</button>
      <button onClick={() => editSmurfApi(newSmurf)}>Edit Smurf</button>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(AddSmurfForm);
