import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import NewOrder from "@/pages/NewOrder";
import NotFound from "@/pages/NotFound";
import MyOrders from "@/pages/MyOrders";

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
