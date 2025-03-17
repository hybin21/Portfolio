import React, {useEffect} from 'react'

const Navbar = ({menuOpen,setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    return (
        <nav className = "fixed top-0 w-full z-40 bg-[#9c737c] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className = "max-w-5xl mx-auto px-4" >
                <div className = "flex justify-between items-center h-16">

                    <div className = "w-7 h-5 relative cursor-pointer z-40 md:hidden text-white" onClick = {() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className = "hidden md:flex  items-center space-x-8 absolute left-0 pl-8">
                        <a href = "#home" className = "white hover:text-black transition-color"> Home</a>
                        <a href = "#about" className = "white hover:text-black transition-color"> About</a>
                        <a href = "#projects" className = "white hover:text-black transition-color"> Professional Projects</a>
                        <a href = "#creativeprojects" className = "white hover:text-black transition-color"> Creative Projects</a>
                        <a href = "#contact" className = "white hover:text-black transition-color"> Contact</a>
                    </div>
                </div>

            </div>
        </nav>
    )

}
export default Navbar
