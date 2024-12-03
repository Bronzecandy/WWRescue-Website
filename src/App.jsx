import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollToTop from "./utils/ScrollToTop";

// Lazy load các page
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ComingsoonPages = React.lazy(() => import("./pages/ComingsoonPages"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const WWAHomePage = React.lazy(() => import("./pages/WWAHomePage"));
const WWCHomepage = React.lazy(() => import("./pages/WWCHomepage"));
const WWFHomepage = React.lazy(() => import("./pages/WWFHomepage"));

// Component hiệu ứng loading
const Loading = () => (
  <div className="flex justify-center items-center min-h-screen bg-[#F9EDD2]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    <p className="ml-4 text-xl font-semibold">Đang tải...</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Suspense bao bọc Routes để hỗ trợ lazy loading */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/support" element={<ComingsoonPages color="#991B1E" />} />
          <Route path="/adoption" element={<WWAHomePage />} />
          <Route path="/adoption/ourrescue" element={<ComingsoonPages color="#AF1E3C" />} />
          <Route path="/adoption/ourpartnershelters" element={<ComingsoonPages color="#AF1E3C" />} />
          <Route path="/canine" element={<WWCHomepage />} />
          <Route path="/canine/aboutus" element={<ComingsoonPages color="#F08122" />} />
          <Route path="/canine/ourrescue" element={<ComingsoonPages color="#F08122" />} />
          <Route path="/feline" element={<WWFHomepage />} />
          <Route path="/feline/aboutus" element={<ComingsoonPages color="#FAA627" />} />
          <Route path="/feline/ourrescue" element={<ComingsoonPages color="#FAA627" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
