import { useState } from 'react';
import { CartProvider } from './context/cart';
import Products from './components/Products';
import Cart from './components/Cart';
import NavBars from './components/NavBars';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <NavBars/>
      {/* <Products />
      <Cart /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;