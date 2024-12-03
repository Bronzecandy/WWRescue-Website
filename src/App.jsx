import React from "react"
import HomePage from "./pages/HomePage";
import ComingsoonPages from "./pages/ComingsoonPages";
import AboutUsPage from "./pages/AboutUsPage";
import WWAHomePage from "./pages/WWAHomePage";
import WWCHomepage from "./pages/WWCHomepage";
import WWFHomepage from "./pages/WWFHomepage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";
function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/aboutus" element={<AboutUsPage/>} />
        <Route path="/support" element={<ComingsoonPages color="#991B1E"/>} />
        <Route path="/adoption" element={<WWAHomePage/>} />
        <Route path="/adoption/ourrescue" element={<ComingsoonPages color="#AF1E3C"/>} />
        <Route path="/adoption/ourpartnershelters" element={<ComingsoonPages color="#AF1E3C"/>} />
        <Route path="/canine" element={<WWCHomepage/>}></Route>
        <Route path="/canine/aboutus" element={<ComingsoonPages color="#F08122"/>} />
        <Route path="/canine/ourrescue" element={<ComingsoonPages color="#F08122"/>} />
        <Route path="/feline" element={<WWFHomepage/>}></Route>
        <Route path="/feline/aboutus" element={<ComingsoonPages color="#FAA627"/>} />
        <Route path="/feline/ourrescue" element={<ComingsoonPages color="#FAA627"/>} />
      </Routes>
    </Router>
  )
}

export default App
