import React, { useState } from 'react';
import { Header } from './components/Header';
import { Order } from './pages/Order';
import { IShoppingCart } from './interfaces/shoppingCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

const ShoppingCartContext = React.createContext<IShoppingCart>([]);

function App() {
  const [cart, setCart] = useState<IShoppingCart[]>([]);
  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartContext.Provider>
  );
}

export default App;
