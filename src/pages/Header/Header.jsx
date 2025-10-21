import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Sun, Moon } from "lucide-react"; 
import { Link as ScrollLink, scroller, Events, scrollSpy } from "react-scroll";

// --- Theme Hook Implementation ---
const useTheme = () => {
    const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light' 
    );
  
    useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark'); 
      root.classList.add(theme); 
      localStorage.setItem('theme', theme); 
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
  
    return { theme, toggleTheme };
};
// ---------------------------------

export default function Header() {
  const { theme, toggleTheme } = useTheme(); 
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home" },
    { id: "skills", icon: FaCode, text: "Skills" },
    { id: "projects", icon: FaLaptopCode, text: "Projects" },
    { id: "experience", icon: FaBriefcase, text: "Experience" },
    { id: "about", icon: FaUser, text: "AboutMe" },
    { id: "contact", icon: FaEnvelope, text: "Contact" },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "experience", "about", "contact"];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("end", () => {});
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("end");
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = hash.replace("#", "");
        setActiveLink(target);
        setTimeout(() => {
          scroller.scrollTo(target, {
            duration: 700,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: 0,
          });
        }, 100);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleProjectDetailToggle = (event) => {
      const { isOpen } = event.detail;
      setIsHeaderVisible(!isOpen);
    };

    window.addEventListener("project-detail-view", handleProjectDetailToggle);
    return () => {
      window.removeEventListener("project-detail-view", handleProjectDetailToggle);
    };
  }, []);

  const handleSetActive = (id) => {
    setActiveLink(id);
    window.history.replaceState(null, null, `#${id}`);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-1 left-0 w-full z-40 transition-transform duration-500 ease-in-out transform ${scrollY > 30 ? "scale-[0.98] shadow-2xl" : "scale-100"} ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div
        // FINAL GLASS EFFECT: Reduced opacity to '50' for higher transparency and ensured max blur ('backdrop-blur-xl') and strong border/shadow are applied.
        className="bg-card/50 backdrop-blur-xl border border-border/80 shadow-2xl rounded-2xl mx-auto max-w-fit mt-4 px-6 py-3" 
      >
        <div className="flex justify-between items-center md:hidden px-2">
          <span className="text-foreground font-bold">Portfolio</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground p-2" 
          >
            <FaBars />
          </button>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
            {navLinks.map(({ id, icon: Icon, text }) => (
              <ScrollLink
                key={id}
                to={id}
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                isDynamic={true}
                hashSpy={true}
                onSetActive={handleSetActive}
                className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium transition-all duration-500 ease-in-out flex items-center gap-2 
                  hover:bg-accent hover:scale-105 hover:shadow-md cursor-pointer 
                  ${
                    activeLink === id
                      ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg ring-2 ring-blue-400 hover:scale-110 hover:rotate-1"
                      : "text-muted-foreground hover:text-foreground" 
                  }`}
              >
                <Icon
                  className={`text-base transition-transform duration-300 ${
                    activeLink === id ? "scale-110 rotate-1" : ""
                  }`}
                />
                <span>{text}</span>
              </ScrollLink>
            ))}
             {/* --- Mode Toggle Button --- */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium transition-all duration-500 ease-in-out flex items-center justify-center 
                        hover:bg-accent hover:scale-105 hover:shadow-md cursor-pointer 
                        text-muted-foreground hover:text-foreground`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            {/* --------------------------- */}
          </div>
        </div>
      </div>
    </header>
  );
}