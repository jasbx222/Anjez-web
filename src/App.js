import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // استيراد BrowserRouter
import Home from "./Component/Home.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {
  return (
    <BrowserRouter>  {/* إضافة BrowserRouter هنا */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
