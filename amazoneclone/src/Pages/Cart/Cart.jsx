import React,{useState} from 'react';
import { useCart } from '../../context/CartContext';
import classes from './Cart.module.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import tellebirrImg from '../../asset/payment/tellebirr.png';
import cbeImg from '../../asset/payment/cbe.png';


function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handlePaymentSelect = (method) => {
   
    alert(`You selected ${method} as your payment method. (Integrate payment here)`);
    setShowPayment(false);
  };

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
                    <div className={classes.quantityRow}>
                      <label>
                        Quantity:
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={e => handleQuantityChange(item.id, e.target.value)}
                          className={classes.quantityInput}
                        />
                      </label>
                      <button
                        className={classes.removeButton}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={classes.cartTotal}>
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <button className={classes.checkoutButton} onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPayment && (
          <div className={classes.paymentModal}>
            <div className={classes.paymentContent}>
              <h3>Select Payment Method</h3>
              <div className={classes.paymentOptions}>
                <div
                  className={classes.paymentOption}
                  onClick={() => handlePaymentSelect('Tellebirr')}
                >
                  <img src={tellebirrImg} alt="Tellebirr" className={classes.paymentImg} />
                  <span>Tellebirr</span>
                </div>
                <div
                  className={classes.paymentOption}
                  onClick={() => handlePaymentSelect('CBE')}
                >
                  <img src={cbeImg} alt="CBE" className={classes.paymentImg} />
                  <span>CBE</span>
                </div>
              </div>
              <button className={classes.closeButton} onClick={() => setShowPayment(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;