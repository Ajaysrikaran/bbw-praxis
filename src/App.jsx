import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import PageNotFound from "./PageNotFound";
import About from "./About";
import Komponente from "./Komponente";
import Home from "./Home";

export default function App() {
  return (
      <div id="root">
        <Header />
        <div className="content">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/komponente" element={<Komponente />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/:category" element={<Products />} />
              <Route path="/:category/:id" element={<Detail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
  );
}
