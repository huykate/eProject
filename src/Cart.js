import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

// Create CartContext
export const CartContext = createContext();

// Create CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const resetQuantity = (id) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => 
      prevItems.filter(item => item.id !== id)
    );
  };

  const parsePrice = (price) => parseFloat(price.replace("$", ""));
  
  const total = cartItems.reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, resetQuantity, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

// Create Cart component
function Cart() {
  const { cartItems, updateQuantity, resetQuantity, removeItem, total } = useContext(CartContext);
  const navigate = useNavigate();

  const parsePrice = (price) => parseFloat(price.replace("$", ""));

  const handleContinueShopping = () => {
    navigate('/Product');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="product-details">
                <img src={process.env.PUBLIC_URL + "/proImg/" + item.img_url.split(',')[0].trim() + ".jpg"} alt={item.name} />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </td>
              <td>${parsePrice(item.price).toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  min="1"
                />
              </td>
              <td>${(parsePrice(item.price) * item.quantity).toFixed(2)}</td>
              <td>
                <div className="button-row">
                  <button onClick={() => resetQuantity(item.id)}>
                    <FontAwesomeIcon icon={faSync} />
                  </button>
                  <button onClick={() => removeItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <button className="continue-shopping" onClick={handleContinueShopping}>‹ Continue Shopping</button>
        <div className="total-checkout">
          <span>Total ${total.toFixed(2)}</span>
          <button className="checkout">Checkout ›</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
