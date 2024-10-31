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
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/About" element={<AboutUsPage/>} />
        <Route path="/Support" element={<ComingsoonPages color="#991B1E"/>} />
        <Route path="/WWAHome" element={<WWAHomePage/>} />
        <Route path="/WWAHome/About" element={<ComingsoonPages color="#AF1E3C"/>} />
        <Route path="/WWAHome/Support" element={<ComingsoonPages color="#AF1E3C"/>} />
        <Route path="/WWCHome" element={<WWCHomepage/>}></Route>
        <Route path="/WWCHome/About" element={<ComingsoonPages color="#F08122"/>} />
        <Route path="/WWCHome/Support" element={<ComingsoonPages color="#F08122"/>} />
        <Route path="/WWFHome" element={<WWFHomepage/>}></Route>
        <Route path="/WWFHome/About" element={<ComingsoonPages color="#FAA627"/>} />
        <Route path="/WWFHome/Support" element={<ComingsoonPages color="#FAA627"/>} />
      </Routes>
    </Router>
  )
}

export default App
