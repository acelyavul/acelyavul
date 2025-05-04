import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Hero from "./screens/Hero";
import Projects from "./screens/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Blog />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
