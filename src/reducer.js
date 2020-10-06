import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

// reducer - function that is used to update the store
// two arugements - state, action
// state - old state/state before update
// action - what happened/what update
// return updated or old state

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log("you decreased amount");
  }
  if (action.type === INCREASE) {
    console.log("you increased amount");
  }
  if (action.type === REMOVE) {
    // if the cartItem.id is not equal to action.payload.id which is coming from CartItem.js
    // then we will return a new array leaving out the action.payload.id
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  return state;
};

export default reducer;

// Below is the switch case way of creating reducers

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
