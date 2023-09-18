import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
