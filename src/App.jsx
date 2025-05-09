import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import AOS styles
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Pages/Navbar";
import Hero from "./Components/Pages/Hero";
import Servicess from "./Components/Servicess";
import Product from "./Components/Product";
import Footer from "./Components/Pages/Footer";
import About from "./Components/Pages/About";
import Contact from "./Components/Contact";
import Laptop from "./Components/Laptop";
import Laptop1 from "./Components/Laptop1";
import Laptop2 from "./Components/Laptop2";
import Laptop3 from "./Components/Laptop3";
import Laptop4 from "./Components/Laptop4";
import It from "./Components/Services/It";
import NetworkingMarketing from "./Components/Services/NetworkingMarketing";
import Internet from "./Components/Services/Internet";
import DataRecovery from "./Components/Services/DataRecovery";
import SystemIntegration from "./Components/Services/SystemIntegration";
import WebDev from "./Components/Services/WebDev";
import Support from "./Components/Pages/Support";
import Task from "./Components/Pages/Task";
import Enquire from "./Components/Pages/Enquiry";
import Abouts from "./Components/Pages/Abouts";
import System from "./Components/Services/System";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Servicess />
              <About />
              <Product />  
               <Task/>

              
            </>
              
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Laptop" element={<Laptop />} />
        <Route path="/Laptop/1" element={<Laptop1 />} />
        <Route path="/Laptop/2" element={<Laptop2 />} />
        <Route path="/Laptop/3" element={<Laptop3 />} />
        <Route path="/Laptop/4" element={<Laptop4 />} />
        <Route path="/It" element={<It />} />
        <Route path="/NetworkingMarketing" element={<NetworkingMarketing />} />
        <Route path="/Internet" element={<Internet/>} />
        <Route path="/DataRecovery" element={<DataRecovery />} />
        <Route path="/SystemIntegration" element={<SystemIntegration/>} />
        <Route path="/WebDev" element={<WebDev/>} />
        <Route path="/Support" element={<Support/>} />
        <Route path="/enquiry" element={<Enquire />} />
        <Route path="/Abouts" element={<Abouts />} />
        <Route path="/System" element={<System />} />
        <Route path="/Servicess" element={< Servicess/>} />

      
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
