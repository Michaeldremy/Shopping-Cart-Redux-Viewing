import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

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
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    // Mapping through our state.cart and checking if id is the same and if it is
    // we will copy the cartItem props and then overwrite the amount prop and add + 1
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    // if the cartItem.id is not equal to action.payload.id which is coming from CartItem.js
    // then we will return a new array leaving out the action.payload.id
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce( // .reduce is used to count the total of an array
      (cartTotal, cartItem) => { // cartTotal = previous value and cartItem = current value
        const { price, amount } = cartItem; // price and amount are being destructured ouf ot the cartItem which holds our state
        const itemTotal = price * amount; // here we are taking the price and multiplying by the amount
        cartTotal.total += itemTotal; // // increasing total cart amount by the itemTotal variable
        cartTotal.amount += amount; // everytime a new item is added it will update the amount example would be if you had 10 total items an then you added 6 it would end up at 16
        return cartTotal;
      },
      {
        // since we are using .reduce we have to set initial values
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2)) // overwriting total to not allow decimals larger than 2 (.toFixed(2)) then this returns a string and then we use parseFloat which turns the string into a int
    return {...state, total, amount}
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
