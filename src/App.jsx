import './App.css'
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import {useState} from "react";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Home from "./components/sections/Home.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import CreativeProjects from "./components/sections/CreativeProjects.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
        {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}{" "}
        <div className = {`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-100": "opacity-0"} bg-white text-gray-100`}>
            <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
            <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
            <Home/>
            <About/>
            <Projects/>
            <CreativeProjects/>
            <Contact/>

        </div>
    </>
  )
}

export default App
