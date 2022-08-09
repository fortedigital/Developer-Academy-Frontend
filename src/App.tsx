import React, { useState } from "react";
import { Header } from "./components/Header";
import { Order } from "./pages/Order";
import { IShoppingCart } from "./interfaces/shoppingCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

export const ShoppingCartContext = React.createContext<IShoppingCart>([]);

function App() {
  const [cart, setCart] = useState<IShoppingCart>({} as IShoppingCart);
  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <div className="h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShoppingCartContext.Provider>
  );
}

export default App;
