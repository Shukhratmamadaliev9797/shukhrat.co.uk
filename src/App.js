import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import About from "./pages/About";
import Credentials from "./pages/Credentials";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PageLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
