import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShhown, setCartIsShown] = useState(false);
  function showCartHandler() {
    setCartIsShown(true)
  }

  function hideCardHandler() {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShhown && <div>Cart...</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
