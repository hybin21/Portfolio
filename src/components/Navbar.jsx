import React, {useEffect} from 'react'
import Home from "./sections/Home.jsx";

const Navbar = ({menuOpen,setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    return (
        <nav className = "fixed top-0 w-full z-40 bg-[rgba(250,227,234,1)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className = "max-w-5xl mx-auto px-4" >
                <div className = "flex justify-between items-center h-16">

                    <a href="#home" className = "font-mono text-l font-bold text-[#9c737c]">
                        Jessica's Portfolio
                    </a>
                    <div className = "w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#9c737c]" onClick = {() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className = "hidden md:flex items-center space-x-8">
                        <a href = "#home" className = "text-[#9c737c] hover:text-white transition-color"> Home</a>
                        <a href = "#about" className = "text-[#9c737c] hover:text-white transition-color"> About</a>
                        <a href = "#projects" className = "text-[#9c737c] hover:text-white transition-color"> Projects</a>
                        <a href = "#contact" className = "text-[#9c737c] hover:text-white transition-color"> Contact</a>
                    </div>
                </div>

            </div>
        </nav>
    )

}
export default Navbar
