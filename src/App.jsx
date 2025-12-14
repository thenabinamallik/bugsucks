/** @format */

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./Pages/Home/Index";
import { Header } from "./components/Navbar/Index";
import About from "./Pages/About/Index";
import Skills from "./Pages/skills";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]); // 👈 runs on EVERY route change

  return null;
}

/* Home page */
function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

/* App */
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </Router>
  );
}
