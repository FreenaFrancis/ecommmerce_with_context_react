// Cart.js
import { useContext } from 'react';
import { CartContext } from '../context/cart';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={clearCart}>Clear cart</button>
        </div>
      )}
    </div>
  );
}