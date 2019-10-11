import React from "react";

// STATE

import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function AddSmurfForm({ newSmurf, onChange, onSubmit}) {
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newSmurf.name}
          onChange={onChange}
        />
      </label>

      <label>
        Age:
        <input
          type="text"
          name="age"
          value={newSmurf.age}
          onChange={onChange}
        />
      </label>

      <label>
        Height:
        <input
          type="text"
          name="height"
          value={newSmurf.height}
          onChange={onChange}
        />
      </label>

      <button onClick={event => onSubmit(event, newSmurf)}>
        Add Smurf to the Village
      </button>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(AddSmurfForm);
