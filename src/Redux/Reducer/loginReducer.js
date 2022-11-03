import {  TOKEN , LOGOUT } from "../actions/loginaction";
const init = {token:"",

}
export const loginreducer = (store=init, { type, payload }) => {
  switch (type) {
    case TOKEN:
      return { ...store, token: payload };
      case LOGOUT:
        return{
            ...store,
            token:""
           
        }
        default:
      return store;
  }

  
};