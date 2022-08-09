import React, { useState } from "react";
import NewOrder from "./pages/NewOrder";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { IShoppingCart } from "./interfaces/shoppingCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ShoppingCartContext = React.createContext<IShoppingCart>([]);

function App() {
  const [cart, setCart] = useState<IShoppingCart>({} as IShoppingCart);
  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<NewOrder />} />
            <Route path="/mine-bestillinger" element={<MyOrders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ShoppingCartContext.Provider>
  );
}

export default App;
