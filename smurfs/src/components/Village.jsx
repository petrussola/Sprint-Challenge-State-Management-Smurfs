import React, { useEffect } from "react";

// STATE
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

// COMPONENTS

import Inhabitant from "./Inhabitant";

export function Village({ village, fetchDataApi, onDeleteSmurf }) {
  useEffect(() => {
    fetchDataApi();
  }, []);
  return village.map(inhabitant => {
    return (
      <Inhabitant
        key={inhabitant.id}
        inhabitant={inhabitant}
        onDeleteSmurf={onDeleteSmurf}
      />
    );
  });
}

export default connect(
  state => state,
  actionCreators
)(Village);
