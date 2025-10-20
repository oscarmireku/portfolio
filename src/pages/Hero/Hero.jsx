import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import AboutMePage from "@/pages/About/About";
import SKillsPage from "@/pages/Skills/Skills";
import ProjectsPage from "@/pages/Projects/Projects";
import ExperiencePage from "@/pages/Experience/Experience";
import EducationPage from "@/pages/Education/Education";
import ContactPage from "@/pages/Contact/Contact";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "IT Support Snapshot",
    text: "Providing frontline support for technical issues across desktops and networks.",
    image: "https://placehold.co/400x250/0f172a/94a3b8?text=IT+Support"
  },
  {
    title: "Cloud Integration",
    text: "Deploying hybrid cloud solutions using Azure, AWS, and on-prem infrastructure.",
    image: "https://placehold.co/400x250/1e293b/94a3b8?text=Cloud+Architecture"
  },
  {
    title: "Network Topology",
    text: "Designing scalable network topologies with VLANs, OSPF, and ACLs.",
    image: "https://placehold.co/400x250/0f172a/94a3b8?text=Network+Map"
  }
];

export default function Hero() {
  const words = [
    "Network Support",
    "Learning Azure",
    "Cisco Enthusiast",
    "Tech Troubleshooter",
    "Windows Server & Active Directory",
    "Microsoft & Office 365 Administrator",
    "On-Prem to Cloud Integrations",
    "Results-Oriented IT Professional",
    "VLANs, OSPF, ACLs & NAT"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    Prism.highlightAll();
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section id="home" className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding overflow-x-hidden" style={{ paddingTop: "var(--hero-padding-top, 0)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <Meteors number={10} />
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">Welcome to my portfolio</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" /> I&apos;m <span className="typing-effect gradient-text">Oscar Mireku</span>
              </h1>
              <div className="mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20">
                <FlipWords className="text-xl text-blue-400 font-medium" words={words} />
              </div>
              <p className="mt-6 text-xl text-gray-300/90">Network Administrator 📡 | Windows Server 🖥 | Cloud Platforms (AWS, Azure) ☁</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <a href="https://www.linkedin.com/in/oscarmireku/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl font-medium hover:scale-105 transition inline-flex items-center gap-2">
  <i className="fab fa-linkedin"></i>
  LinkedIn
</a>
                <a href="https://drive.google.com/file/d/1o5-g_sISzopqGWKn1isasJidBsDyh_Uq/view?usp=sharing" className="px-6 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-xl font-medium hover:text-white transition">
                  Resume
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-[320px] sm:h-[350px] lg:h-[400px] overflow-hidden rounded-xl bg-gray-900 shadow-xl relative"
                >
                  <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-xl font-semibold mb-2">{slides[current].title}</h3>
                    <p className="text-sm text-gray-300">{slides[current].text}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, idx) => (
                  <motion.span
                    key={idx}
                    animate={{ scale: idx === current ? 1.25 : 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-400" : "bg-gray-600"}`}
                  ></motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <SKillsPage />
        <ProjectsPage />
        <ExperiencePage />
        <AboutMePage />
        <ContactPage />
      </main>
    </>
  );
}
