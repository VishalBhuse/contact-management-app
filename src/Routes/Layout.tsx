import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import ChartAndMap from "../Pages/ChartAndMap";
import Contact from "../Pages/Contact";

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-2">
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/charts-and-maps" element={<ChartAndMap />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
