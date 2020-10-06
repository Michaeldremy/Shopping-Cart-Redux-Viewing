import { DECREASE, INCREASE, CLEAR_CART } from "./actions";

// reducer - function that is used to update the store
// two arugements - state, action
// state - old state/state before update
// action - what happened/what update
// return updated or old state

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
};

export default reducer;
