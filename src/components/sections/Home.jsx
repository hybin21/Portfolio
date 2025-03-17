import React from 'react';
import RevealOnScroll from "./RevealOnScroll.jsx";

const Home = () => {
    return (
        <section id="home" className="h-screen flex flex-col justify-between items-center px-4 text-center">
            {/* Centered Text Content */}
            <div className="flex-grow flex flex-col justify-center items-center z-10 px-4">
                <RevealOnScroll>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#e6b1bd] to-[#9c737c] bg-clip-text text-transparent leading-tight">
                        Hi, I am Jessica!
                    </h1>
                    <p className="text-[#9c737c] text-lg max-w-lg mx-auto">
                        Welcome to <strong>Jessica's Portfolio</strong>!
                    </p>
                    <p className="text-[#9c737c] text-lg mb-8 max-w-lg mx-auto">
                        If you want to learn about Jessica, please scroll down
                    </p>
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                        <a href="https://github.com/hybin21" className="bg-[#9c737c] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(156,115,124,1)]">
                            <img className="w-5" src={"github-mark-white.png"} alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jessicahahm"
                           className="border border-[#9c737c] text-[#9c737c] py-3 px-6 rounded font-medium transition-all duration-200 bg-[#9c737c]/10 hover:bg-[#9c737c]/30 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(156,115,124,1)]">
                            <img className="w-5 linkedin-icon" src={"linkedin.png"} alt="LinkedIn"/>
                        </a>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Arrow at the bottom */}
            <RevealOnScroll>
                <div className="pb-6">
                    <a href="#about">
                        <svg className="w-10 text-[#9c737c]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 16.5l-8-8 1.5-1.5L12 13.5l6.5-6.5 1.5 1.5z"/>
                        </svg>
                    </a>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Home;