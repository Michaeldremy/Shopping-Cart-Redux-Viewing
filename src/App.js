import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that is used to update the store
// two arugements - state, action
// state - old state/state before update
// action - what happened/what update
// return updated or old state

import { createStore } from "redux";

// store.getState() - 

// initial store
const initialStore = {
  count: 0,
}
// reducer
const reducer = (state, action) => {
  console.log({ state, action });
  return state;
};
// store
const store = createStore(reducer, initialStore);
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
