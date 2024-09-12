import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/cart';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  

  return (
    <div>
      <h1>Shop</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description.slice(0, 40)}...</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}