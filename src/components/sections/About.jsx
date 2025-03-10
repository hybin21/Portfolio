import React, { useState } from "react";
import RevealOnScroll from "./RevealOnScroll.jsx";

export function WorkExperience() {
    const [openJob, setOpenJob] = useState(null);
    const jobDescription = [
        {
            title: "Front End Engineer at Sam Il I & C (2022 - Present)",
            details: [
                "Develop responsive and interactive web interfaces using React, ensuring device compatibility and improving efficiency by 10%.",
                "Optimized the main website’s menu bar to enhance user experience and performance.",
                "Identified API and database inefficiencies causing bottlenecks and redesigned the system architecture to streamline data flow, boosting user response speed by 30%."
            ]
        },
        {
            title: "Teaching Assistant at University of Southern California (2023 - Present)",
            details: [
                "Lead monitoring and analysis of 100+ non-major students’ development, harnessing insights on common errors to refine teaching methodologies.",
                "Conducts weekly 2-hour office hours to provide targeted assistance in Python programming."
            ]
        },
        {
            title: "Software Engineer & Tech Camp Lead at ID Tech Camps (2024)",
            details: [
                "Crafted curriculums for Virtual Robotics and Scratch classes and Minecraft Game Design, tailored for 15+ preschool students.",
                "Collaborated with 20+ instructors to integrate ChatGPT API and databases, optimizing data flow and enhancing user experience with advanced server-side strategies."
            ]
        },
        {
            title: "Data Analyst at Pasadena City College (2021)",
            details: [
                "Developed and implemented an AI-driven data management system to enable real-time updates and streamline data processing for over 10,000 students.",
                "Optimized data handling workflows to ensure accuracy and responsiveness, significantly reducing latency and improving system scalability.",
                "Enhanced data accuracy and achieved a notable 40% reduction in processing times for strategic process and operational excellence."
            ]
        }
    ];

    const toggleJob = (job) => {
        setOpenJob(openJob === job ? null : job);
    };

    return (
        <div className="p-6 rounded-xl border-[#705158]/30 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
            <h3 className="text-xl text-[#9c737c] font-bold mb-4">💼 Work Experience</h3>
            <ul className="list-inside space-y-4 text-[#9c737c]">
                {jobDescription.map((job, index) => (
                    <li key={index} className="border-b border-[#705158]/20 pb-2">
                        <button
                            onClick={() => toggleJob(index)}
                            className={`w-full text-left text-lg flex justify-between items-center transition-all ${
                                openJob === index ? "font-bold" : "font-normal"
                            }`}
                        >
                            {job.title}
                            <span className="text-[#705158]">{openJob === index ? "x" : "-"}</span>
                        </button>
                        {openJob === index && (
                            <ul className="list-[circle] list-inside space-y-2 pl-4 mt-2 text-sm text-[#9c737c]">
                                {job.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const About = () => {
    const [openCourse, setOpenCourse] = useState(false);

    const toggleCourses = () => {
        setOpenCourse(!openCourse);
    };

    const courses = [
        "Data Structures & Algorithms",
        "Discrete Mathematics",
        "Embedded Systems",
        "Artificial Intelligence",
        "Video Game Programming",
        "Introduction to Internetworking",
        "Probability Theory",
        "Software Engineering and Capstone Design",
        "Cross-Platform App Development",
        "Full-Stack Web Development",
        "Operating Systems",
        "Construction of Large Software Systems"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-2xl mb-4 border-[#705158]/30 border shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="pfp.jpeg"
                                alt="Jessica's Image"
                                className="rounded-2xl object-cover w-64 h-64"
                            />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#e6b1bd] to-[#9c737c] bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="glass rounded-xl p-8 border-[#705158]/30 border hover:-translate-y-1 transition-all">
                        <p className="text-[#9c737c] mb-6">
                            I enjoy creating high-performing, minimalist mobile and online apps that combine style and utility. I add creativity to both digital and physical work by working on craft projects like knitting and crocheting when I'm not computing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#705158]">Programming Language</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["C++","Python","Java","JavaScript","TypeScript","Dart","SwiftUI","HTML","CSS"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-3 rounded-full text-sm hover:bg-[#9c737c]/20 transition"
                                        >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#705158]">Frameworks & Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["React","React Native","Node.js","Flutter","QT"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-3 rounded-full text-sm hover:bg-[#9c737c]/20 transition"
                                        >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#705158]">Platforms & Operating Systems</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Linux","Windows","iOS"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-3 rounded-full text-sm hover:bg-[#9c737c]/20 transition"
                                        >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#705158]">Developer Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Visual Studio Code","Visual Studio","Android Studio","Xcode","Eclipse","PyCharm","WebStorm","Github"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-3 rounded-full text-sm hover:bg-[#9c737c]/20 transition"
                                        >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#705158]">Database</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["MySQL","NoSQL","PostgreSQL"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-3 rounded-full text-sm hover:bg-[#9c737c]/20 transition"
                                        >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#705158]">Database</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["MySQL","NoSQL","PostgreSQL"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-3 rounded-full text-sm hover:bg-[#9c737c]/20 transition"
                                        >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-[#705158]">Crafting & Design</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Knitting","Crocheting"].map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#9c737c]/10 text-[#9c737c] py-1 px-3 rounded-full text-sm hover:bg-[#9c737c]/20 transition"
                                        >
                                        {tech}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-[#705158]/30 border hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(99,72,78,1)] transition-all">
                            <h3 className="text-xl text-[#9c737c] font-bold mb-4">🎓 Education</h3>
                            <ul className="text-[#9c737c] list-inside space-y-2">
                                <li className="list-disc">
                                    <strong>B.S. in Computer Science</strong> - University of Southern California (2022-2025)
                                </li>

                                <li className="list-disc">
                                    <strong>A.S. in Computer Science</strong> - Pasadena City College (2021 - 2022)
                                </li>

                                <li>
                                    <button
                                        onClick={toggleCourses}
                                        className={`w-full text-left text-lg flex justify-between items-center transition-all ${
                                            openCourse ? "font-bold" : "font-normal"
                                        }`}
                                    >
                                        Relevant Coursework
                                        <span className="text-[#705158]">{openCourse ? "x" : "-"}</span>
                                    </button>

                                    {openCourse && (
                                        <ul className="list-[circle] pl-6 mt-2 text-sm text-[#9c737c] space-y-1">
                                            {courses.map((course, index) => (
                                                <li key={index}>{course}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <WorkExperience />
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    );
};

export default About;