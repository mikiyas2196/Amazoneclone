import React from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './ReturnsAndOrders.module.css';

// Example orders data (replace with real data/fetch from API)
const orders = [
  {
    id: 'ORD123',
    date: '2024-07-20',
    items: [
      { name: 'Wireless Mouse', price: 20, quantity: 1 },
      { name: 'Keyboard', price: 30, quantity: 1 }
    ],
    status: 'Delivered',
    canReturn: true
  },
  {
    id: 'ORD124',
    date: '2024-07-15',
    items: [
      { name: 'Laptop Stand', price: 25, quantity: 1 }
    ],
    status: 'Delivered',
    canReturn: false
  }
];

function ReturnsAndOrders() {
  const handleReturn = (orderId) => {
    alert(`Return process started for order ${orderId}`);
    // Here you would implement the real return logic
  };

  return (
    <Layout>
           <div className={classes.ordersContainer}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className={classes.ordersList}>
          {orders.map(order => (
            <li key={order.id} className={classes.orderItem}>
              <div>
                <strong>Order ID:</strong> {order.id} <br />
                <strong>Date:</strong> {order.date} <br />
                <strong>Status:</strong> {order.status}
                <ul>
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              {order.canReturn && (
                <button
                  className={classes.returnButton}
                  onClick={() => handleReturn(order.id)}
                >
                  Return
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
    </Layout>
   
  );
}

export default ReturnsAndOrders;
