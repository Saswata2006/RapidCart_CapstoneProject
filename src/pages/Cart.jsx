import React from 'react';
import './Cart.css';

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 1499, quantity: 1 },
    { id: 2, name: "Smart Watch", price: 1999, quantity: 2 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <span>Qty: {item.quantity}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
