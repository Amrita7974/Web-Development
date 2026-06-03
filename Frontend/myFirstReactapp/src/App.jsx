//import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Register from "./pages/Courses";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Courses from "./pages/Courses";


function App() {
  return (
    <>

    <BrowserRouter>

    <Header />
    <Routes>
      <Route  path="/" element={<Home />} />
       <Route  path="/about" element={<About />} />
        <Route  path="/product" element={<Product />} />
         <Route  path="/contact-us" element={<ContactUs/>} />
          <Route  path="/login" element={<Login />} />
           <Route  path="/register" element={<Register />} />

            <Route  path="/courses" element={<Courses />} />
    </Routes>
    </BrowserRouter>
      {/* <Header />
      <Home />
      <About />
      <ContactUs />
      <Login />
      <Register /> */}
    </>
  );
}

export default App;
