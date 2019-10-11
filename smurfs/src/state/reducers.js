import * as types from "./actionTypes";

const initialVillage = [];

export function villageReducer(village = initialVillage, action) {
  switch (action.type) {
    case types.ON_ADD_VILLAGE:
      return action.payload;
    default:
      return village;
  }
}

const initialNewSmurf = {
  name: '',
  age: '',
  height: '',
};

export function newSmurfReducer(newSmurf = initialNewSmurf, action) {
    
  switch (action.type) {
    case types.ON_WRITE_NEW_SMURF:
      return {
          ...newSmurf,
          [action.payload.name]: action.payload.value,
      }
      case types.ON_ADD_VILLAGE:
        return {
          name: '',
          age: '',
          height: '',
        }
    default:
      return newSmurf;
  }
}
