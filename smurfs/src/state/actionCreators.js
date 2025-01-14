import * as types from "./actionTypes";
import axios from "axios";

const smurfsApi = "http://localhost:3333/smurfs";

export function addVillage(village) {
  return {
    type: types.ON_ADD_VILLAGE,
    payload: village
  };
}

export const fetchDataApi = () => dispatch => {
  axios
    .get(smurfsApi)
    .then(res => {
      dispatch(addVillage(res.data));
    })
    .catch(error => {
      console.log("api error");
    });
};

export const typeSmurfForm = event => {
  return {
    type: types.ON_WRITE_NEW_SMURF,
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  };
};

export const addSmurf = (event, smurf) => dispatch => {
  axios
    .post(smurfsApi, smurf)
    .then(res => {
      dispatch(addVillage(res.data));
    })
    .catch(error => {
      console.log("error posting to api");
    });
};

export const onDeleteSmurf = smurfId => dispatch => {
  axios
    .delete(`${smurfsApi}/${smurfId}`)
    .then(res => {
      dispatch(addVillage(res.data));
    })
    .catch(error => {
      console.log("error deleting from api");
    });
};

export const editSmurf = smurf => {
  return {
    type: types.ON_EDIT_SMURF,
    payload: smurf
  };
};

export const editSmurfApi = smurf => dispatch => {
  axios
    .put(`${smurfsApi}/${smurf.id}`, smurf)
    .then(res => {
      dispatch(addVillage(res.data));
    })
    .catch(error => {
      console.log("error deleting from api");
    });
};
