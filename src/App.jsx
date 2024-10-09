import React from "react"
import HomePage from "./pages/HomePage";
import ComingsoonPages from "./pages/ComingsoonPages";
import AboutUsPage from "./pages/AboutUsPage";
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
        <Route path="/Support" element={<ComingsoonPages/>} />
      </Routes>
    </Router>
  )
}

export default App
