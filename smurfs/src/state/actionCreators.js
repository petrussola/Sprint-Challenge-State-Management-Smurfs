import * as types from "./actionTypes";
import axios from "axios";

const smurfsApi = "http://localhost:3333/smurfs";

export function increment() {
  return {
    type: types.INCREMENT
  };
}

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
      debugger;
      dispatch(addVillage(res.data));
    })
    .catch(error => {
      console.log("api error");
    });
};
