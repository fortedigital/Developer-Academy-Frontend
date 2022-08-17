import React from "react";
import NewOrder from "./pages/NewOrder";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<NewOrder />} />
          <Route path="/mine-bestillinger" element={<MyOrders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
