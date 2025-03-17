import React from 'react'
import RevealOnScroll from "./RevealOnScroll.jsx";
import ProjectCarousel from "../ProjectCarousel.jsx";

const CreativeProjects = () => {
    const vestImages = ['blue-vest.png'];
    const scarfImages = ["pink-scarf.png"];
    return (
        <section id = "creativeprojects" className = "min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className = "max-w-5xl mx-auto px-4">
                    <h2 className=" mt-8 text-3xl font-bold mb-8 bg-gradient-to-r from-[#e6b1bd] to-[#9c737c] bg-clip-text text-transparent text-center">
                        Creative Projects
                    </h2>
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 text-[#9c737c]">
                        <div className="p-6 rounded-xl border-[#705158]/30 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
                            <h3 className="text-xl text-[#705158] font-bold mb-2">Blue Knitted Vest</h3>
                            <p>
                                Handmade blue checked knitted vest with cotton 100% yarn
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                <span className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-4 rounded-full text-sm hover:bg-[#9c737c]/10 hover:shadow-[0_2px_8px_rgba(99,72,78,0.1)] transition-all">
                                    Knitting
                                </span>
                            </div>
                            <div className="w-full h-[400px] flex justify-center items-center">
                                <ProjectCarousel imageList={vestImages}/>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-[#705158]/30 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
                            <h3 className="text-xl text-[#705158] font-bold mb-2">Pink Berlin Scarf</h3>
                            <p>
                                Handmade baby pink BERLIN Scarf inspired by Acne Studio Scarf
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                <span className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-4 rounded-full text-sm hover:bg-[#9c737c]/10 hover:shadow-[0_2px_8px_rgba(99,72,78,0.1)] transition-all">
                                    Knitting
                                </span>
                            </div>
                            <div className="w-full h-[400px] flex justify-center items-center">
                                <ProjectCarousel imageList={scarfImages}/>
                            </div>
                        </div>
                    </div>
                </div>
                <RevealOnScroll>
                    <div className="flex justify-center relative mt-40">
                        <a href="#contact">
                            <svg className="w-10 text-[#9c737c]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 16.5l-8-8 1.5-1.5L12 13.5l6.5-6.5 1.5 1.5z"/>
                            </svg>
                        </a>
                    </div>
                </RevealOnScroll>

            </RevealOnScroll>
        </section>
    )
}
export default CreativeProjects
