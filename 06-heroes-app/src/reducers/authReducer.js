import { types } from "types/types";

export const authReducer = (state = {}, {type, payload}) => {

  switch (type) {
    case types.login:
     return {
       ...payload,
       logged: true,
     };
      break;

    case types.logout :
     return {
       ...payload,
       logged: true,
     };
      break;
  
    default:
      return state
      break;
  }   
}
