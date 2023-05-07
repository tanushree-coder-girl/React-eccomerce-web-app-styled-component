import { useEffect, useState } from "react";
import "./App.css";
import { getCategories } from "./fetcher";
import Category from "./components/Category";

import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Basket from "./components/Basket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import OrderConfirmation from "./components/OrderConfirmation";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [categories, setCategories] = useState({ data: [], error: "" });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="/orderConfirmation" element={<OrderConfirmation />} />
            <Route path="/search" element={<SearchResults />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
