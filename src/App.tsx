import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Order } from './pages/Order';
import { IShoppingCart } from './interfaces/shoppingCart';

const ShoppingCartContext = React.createContext<IShoppingCart>([]);

function App() {
  const [cart, setCart] = useState<IShoppingCart[]>([]);
  return (
    <>
      {/*Add Router */}
      <ShoppingCartContext.Provider value={[cart, setCart]}>
        <Header />
        <Order />
        <Footer />
      </ShoppingCartContext.Provider>
    </>
  );
}

export default App;
