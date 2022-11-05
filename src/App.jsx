import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./screens/Hero";
import Footer from "./components/Footer";
import Container from "./components/Container";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Blog from "./screens/Blog";
import "./index.css";

export default function App() {
	return (
		<BrowserRouter>
			<Container>
				<Navbar />
				<Routes>
					<Route path='/' element={<Navigate replace to='/home' />} />
					<Route path='home' element={<Hero />} />
					<Route path='about' element={<About />} />
					<Route path='projects' element={<Projects />} />
					<Route path='blog' element={<Blog />} />
				</Routes>
				<Footer />
			</Container>
		</BrowserRouter>
	);
}
