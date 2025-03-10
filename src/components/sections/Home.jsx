import React from 'react'
import RevealOnScroll from "./RevealOnScroll.jsx";

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#e6b1bd] to-[#9c737c] bg-clip-text text-transparent leading-tight">
                        Hi, I am Jessica!
                    </h1>
                    <p className="text-[#9c737c] text-lg mb-8 max-w-lg mx-auto">
                        Welcome to <strong>Jessica's Portfolio</strong>! As you scroll down, you will be know everything about me
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-[#9c737c] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(156,115,124,1)]">
                            View Projects
                        </a>
                        <a href="#contact"
                           className="border border-[#9c737c] text-[#9c737c] py-3 px-6 rounded font-medium transition-all duration-200 bg-[#9c737c]/10 hover:bg-[#9c737c]/30 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(156,115,124,1)]">
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    );
}

export default Home;