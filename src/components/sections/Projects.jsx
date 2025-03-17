import React from 'react'
import RevealOnScroll from "./RevealOnScroll.jsx";
import ProjectCarousel from "../ProjectCarousel.jsx";

const Projects = () => {
    const anyMovieImages= ["anymovie-1.png","anymovie-2.png","anymovie-3.png","anymovie-4.png"];
    const scsImages = ['tree-hole-1.png',"tree-hole-2.png"];
    return (
        <section id = "projects" className = "min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className = "max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#e6b1bd] to-[#9c737c] bg-clip-text text-transparent text-center">
                        Professional Projects
                    </h2>
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-8 text-[#9c737c]">
                        <div className="p-6 rounded-xl border-[#705158]/30 border min-h-[520px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
                            <div>
                                <h3 className="text-xl text-[#705158] font-bold mb-4">Any Movie</h3>
                                <p>
                                    Web platform that provides information about every movie in the world.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                    {["React", "TMDB API", "App Write", "YouTube API", "Web Development", "GitHub Pages"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-4 rounded-full text-sm hover:bg-[#9c737c]/10 hover:shadow-[0_2px_8px_rgba(99,72,78,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4 my-4">
                                        <a href="https://github.com/hybin21/Move_Jess"
                                           className="text-[#9c737c] hover:text-[#332528] flex items-center">
                                            <img className="w-5" src={"github_logo.png"} alt="GitHub"/>
                                        </a>
                                        <a href="https://hybin21.github.io/Move_Jess/"
                                           className="text-[#9c737c] hover:text-[#332528] flex items-center">
                                            <img className="w-5" src={"web.png"} alt="Link"/>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full h-[400px] flex justify-center items-center">
                                <ProjectCarousel imageList={anyMovieImages}/>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-[#705158]/30 border min-h-[520px] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
                            <div>
                                <h3 className="text-xl text-[#705158] font-bold mb-3">SCS_Community</h3>
                                <p>
                                    Mobile application for USC Computer Science Students where they can share their experiences from their classes, clubs, and more.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                    {["Android Studio", "Java", "O-Auth"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-4 rounded-full text-sm hover:bg-[#9c737c]/10 hover:shadow-[0_2px_8px_rgba(99,72,78,0.1)] transition-all"
                                        >
                                        {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://github.com/hybin21/SCS_Community"
                                       className="text-[#9c737c] hover:text-[#332528] my-4 flex items-center space-x-2">
                                        <img className="w-5" src={"github_logo.png"} alt="GitHub"/>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full h-[400px] flex justify-center items-center">
                                <ProjectCarousel imageList={scsImages}/>
                            </div>
                        </div>
                        <div
                            className="p-6 rounded-xl border-[#705158]/30 border hover:-translate-y-1  hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
                            <h3 className="text-xl text-[#705158] font-bold mb-2">AutoCart Buyer</h3>
                            <p >
                                Automated e-commerce checkout program in Python using Selenium, analysis of HTML code to streamline the purchasing process.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                {["Selenium", "Web Scrapping", "ChromeDriver", "Python"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-4 rounded-full text-sm hover:bg-[#9c737c]/10 hover:shadow-[0_2px_8px_rgba(99,72,78,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className = "flex justify-bewteen items-center">
                                <a href="https://github.com/hybin21/AutoCart-Buyer"
                                   className="text-[#9c737c] hover:text-[#332528] my-4 flex items-center space-x-2">
                                    <img className="w-5" src={"github_logo.png"} alt="GitHub"/>
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-[#705158]/30 border hover:-translate-y-1  hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
                            <h3 className="text-xl text-[#705158] font-bold mb-2">Video-Streamer</h3>
                            <p>
                                DNS load balancer in C++ for video traffic distribution, implementing round-robin and geographic-based IP selection in Mininet to optimize CDN performance and adaptive bitrate streaming.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                {["CDN", "C++", "VM", "C++", "Mininet"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-4 rounded-full text-sm hover:bg-[#9c737c]/10 hover:shadow-[0_2px_8px_rgba(99,72,78,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/hybin21/Video-Streamer"
                                   className="text-[#9c737c] hover:text-[#332528] my-4 flex items-center space-x-2">
                                    <img className="w-5" src={"github_logo.png"} alt="GitHub"/>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                <RevealOnScroll>
                    <div className="flex justify-center relative mt-40">
                        <a href="#creativeprojects">
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
export default Projects
