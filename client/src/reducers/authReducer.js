import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  //variables que se utilizan en el estado.
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  //funcion reductora: llama a un state y a un action, previamente creados con el fin de actualizar el estado.
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
