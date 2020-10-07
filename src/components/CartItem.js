import React from "react";
import { connect } from "react-redux";
import { removeItem, toggleAmount } from "../actions";
const CartItem = ({ img, title, price, amount, remove, toggle }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggle("inc")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              return remove();
            } else {
              toggle("dec");
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// function below has two arguments dispatch and ownProps
// dispatch is what is called to run your reducer
// ownProps is all the props of your objects
// we are desctructuring ownProps to get the id from cart-items.js
// then we are passing id as the value for payload
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    remove: () => dispatch(removeItem(id)), // This is an action creator coming from actions.js
    toggle: (toggle) => dispatch(toggleAmount(id, toggle)), // This is can action creator coming from actions.js
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
