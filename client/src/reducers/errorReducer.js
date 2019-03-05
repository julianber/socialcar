import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
const initialState = {
  //variables que se utilizan en el estado.
};

export default function(state = initialState, action) {
  //funcion reductora: llama a un state y a un action, previamente creados con el fin de actualizar el estado.
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; // actualiza el objeto user con la información de action.payload
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
