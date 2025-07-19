import React from 'react';
import { useCart } from '../../context/CartContext';
import classes from './Cart.module.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

function Cart() {
  const { cartItems } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
   <Layout>
    <div className={classes.cartContainer}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className={classes.emptyCart}>
          <p>Your cart is empty.</p>
          <Link to="/">Go Shopping</Link>
        </div>
      ) : (
        <div>
          <ul className={classes.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={classes.cartItem}>
                <img src={item.image} alt={item.title} className={classes.cartImage} />
                <div className={classes.cartDetails}>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.cartTotal}>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className={classes.checkoutButton}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
   </Layout>   
  );
}

export default Cart;