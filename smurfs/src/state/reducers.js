import * as types from "./actionTypes";

const initialCout = 0;

export function countReducer(count = initialCout, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    default:
      return count;
  }
}

const initialVillage = [];

export function villageReducer(village = initialVillage, action) {
  switch (action.type) {
    case types.ON_ADD_VILLAGE:
      return action.payload.apiData;
    case types.ON_ADD_NEW_SMURF:
      return [...village, action.payload.newSmurf];
    default:
      return village;
  }
}

const initialNewSmurf = {};

export function newSmurfReducer(newSmurf = initialNewSmurf, action) {
  switch (action.type) {
    case types.ON_WRITE_NEW_SMURF:
      return newSmurf;
    default:
      return newSmurf;
  }
}

co;
