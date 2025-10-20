import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Link, Share2 } from 'lucide-react';
import { scroller } from "react-scroll";



// Helper function to create a URL-friendly slug from a title
const createSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[!?,.:;'"()]/g, '');



// Data for the projects, with an added 'longDescription' and 'date' for the detail page.
const projects = [
  {
    title: "Olova! A Lightweight JavaScript Library",
    description: "A lightweight JavaScript library for creating beautiful, responsive UI components.",
    date: "2025-03-19",
    longDescription: `
        <p>Olova! is a passion project aimed at simplifying front-end development. It provides a set of minimalistic, highly customizable UI components that are easy to integrate into any JavaScript project. The library is built with <strong>performance in mind</strong>, ensuring a small footprint and fast rendering times. The goal was to create a developer-friendly tool that speeds up the creation of elegant user interfaces without the bloat of larger frameworks.</p>
        <p><em>The core philosophy is to provide unstyled, accessible components that give developers full control over the look and feel.</em></p>
        <img src="https://placehold.co/800x400/1e293b/94a3b8?text=Component+Code+Snippet" alt="Sample code snippet" class="rounded-lg my-4" />
        <blockquote>"Olova! strips away the complexity, letting you build beautiful UIs with simple, predictable building blocks."</blockquote>
        <p>It's not just another component library; it's a statement against the complexity of modern web development. It’s about getting back to basics and writing clean, maintainable code.</p>
    `,
    image: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    github: "https://github.com/olovajs/olova",
    live: "https://olova.js.org/",
    tags: ["JavaScript", "UI/UX", "Frontend", "Library"]
  },
  {
    title: "Sleek Portfolio",
    description: "A sleek portfolio built with React and Tailwind CSS to showcase your skills and projects.",
    date: "2025-04-01",
    longDescription: `
        <p>This portfolio itself is a project designed to showcase my abilities in modern web development. Built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <em>Framer Motion</em>, it features a clean, responsive design with smooth, engaging animations.</p>
        <img src="https://placehold.co/800x400/1e293b/94a3b8?text=Portfolio+Animation+Demo" alt="Portfolio animation" class="rounded-lg my-4" />
        <p>The focus was on creating a visually appealing and easy-to-navigate site that effectively highlights my skills, projects, and professional experience to potential employers and collaborators. Every interaction, from the page transitions to the hover effects, has been carefully crafted to create a delightful user experience.</p>
        <blockquote>The design is intentionally minimal to let the projects and content speak for themselves.</blockquote>
    `,
    image: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    github: "https://github.com/seraprogrammer/portfolio",
    live: "https://codervai.vercel.app",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Portfolio"]
  },
  {
    title: "CodeWhisperer",
    description: "A powerful online code editor with real-time code execution and multi-language support.",
    date: "2025-04-01",
    longDescription: `
        <p>CodeWhisperer is an ambitious project to create a versatile online IDE. It supports multiple programming languages with features like syntax highlighting, real-time code execution, and collaborative editing. The backend is powered by a robust containerization system using <strong>Docker</strong> to safely execute user-submitted code, while the frontend communicates in real-time using <strong>Web Sockets</strong>.</p>
        <p>The frontend, built with React, provides a seamless and intuitive coding environment directly in the browser. <em>It's designed to be fast, responsive, and accessible from any device.</em></p>
        <img src="https://placehold.co/800x400/1e293b/94a3b8?text=CodeWhisperer+UI" alt="CodeWhisperer Interface" class="rounded-lg my-4" />
        <blockquote>Future plans include adding support for more languages, version control integration, and a marketplace for extensions.</blockquote>
    `,
    image: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
    github: "https://github.com/seraprogrammer/codewhisperer",
    live: "https://codewhisperer.vercel.app/",
    tags: ["React", "Node.js", "Docker", "Web Sockets", "IDE"]
  },
  {
    title: "CodeKori",
    description: "A sleek, real-time code editor supporting syntax highlighting and a modern developer UI.",
    date: "2025-04-01",
    longDescription: `
        <p>CodeKori is a lightweight, aesthetically pleasing code editor designed for simplicity and focus. Unlike more complex IDEs, CodeKori prioritizes a <strong>clean interface</strong> and <strong>fast performance</strong>. It's perfect for quick edits, learning new languages, or collaborative coding sessions.</p>
        <img src="https://placehold.co/800x400/1e293b/94a3b8?text=Theme+Customization" alt="Theme Customization" class="rounded-lg my-4" />
        <p>It features a modern developer UI with customizable themes and syntax highlighting for several popular languages. <em>The entire experience is designed to be calm and focused, helping you get into a state of flow.</em></p>
        <blockquote>"I love using CodeKori for my quick coding tasks. It's fast, beautiful, and doesn't get in my way." - A Happy User</blockquote>
        <p>The project demonstrates a strong understanding of UI/UX principles and frontend performance optimization.</p>
    `,
    image: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    github: "https://github.com/seraprogrammer/CodeKori",
    live: "https://codekori.js.org",
    tags: ["JavaScript", "Code Editor", "UI/UX", "Real-time"]
  },
];

// Component for the grid of project cards
function ProjectsGrid({ onProjectSelect }) {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center mb-12"
        >
          PROJECTS
        </motion.h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layoutId={`card-container-${project.title}`}
              className="bg-gray-900/80 rounded-xl shadow-lg overflow-hidden group cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0px 10px 30px rgba(0, 255, 255, 0.1)' }}
              onClick={() => onProjectSelect(project)}
            >
              <div className="overflow-hidden h-56">
                <motion.img
                  layoutId={`card-image-${project.title}`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0f172a/94a3b8?text=Image+Not+Found'; }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                 <p className="text-gray-500 text-xs mb-2">
                    {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-end mt-auto">
                    <span className="text-sm text-teal-400 group-hover:underline">View Details &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component for the detailed project view (the "blog post" overlay)
function ProjectDetail({ project, onBack }) {
    // This effect prevents body scroll and dispatches events for the header
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        // Dispatch event to HIDE the header
        window.dispatchEvent(new CustomEvent('project-detail-view', { detail: { isOpen: true } }));
        
        return () => {
            document.body.style.overflow = 'unset';
            // Dispatch event to SHOW the header
            window.dispatchEvent(new CustomEvent('project-detail-view', { detail: { isOpen: false } }));
        }; 
    }, []);

    // State and refs for scroll-based animation
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const lastScrollY = useRef(0);
    const scrollContainerRef = useRef(null);

    // State for the copy button text
    const [copyText, setCopyText] = useState('Copy Link');

    // Function to handle scroll events on the modal
    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const currentScrollY = container.scrollTop;
            if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
            }
            lastScrollY.current = currentScrollY;
        }
    };

    // Attach the scroll event listener to the modal
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Function to copy the project link to the clipboard
    const handleCopyLink = () => {
        const url = window.location.href;
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            setCopyText('Copied!');
        } catch (err) {
            console.error('Failed to copy: ', err);
            setCopyText('Failed!');
        }
        document.body.removeChild(textArea);
        setTimeout(() => setCopyText('Copy Link'), 2000);
    };

    // Function to share the project using the Web Share API
    const handleShare = async () => {
        const shareData = {
            title: project.title,
            text: project.description,
            url: window.location.href,
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            handleCopyLink();
        }
    };

    return (
        <motion.div 
            ref={scrollContainerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm text-white p-4 sm:p-8 overflow-y-auto"
        >
            <div className="max-w-4xl mx-auto relative">
                <div className="sticky top-0 z-10 h-12 flex items-center pointer-events-none">
                    <AnimatePresence>
                        {isButtonVisible && (
                            <motion.button
                                onClick={onBack}
                                initial={{ y: '-150%', opacity: 0 }}
                                animate={{ y: '0%', opacity: 1 }}
                                exit={{ y: '-150%', opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold bg-slate-800/50 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg pointer-events-auto"
                            >
                                <ArrowLeft size={20} />
                                Back to Projects
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                <div className="bg-slate-900 rounded-2xl shadow-2xl shadow-teal-500/20 p-8 -mt-12">
                    <motion.div 
                        layoutId={`card-image-${project.title}`}
                        className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x800/0f172a/94a3b8?text=Image+Not+Found'; }}
                        />
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{project.title}</h1>
                    <p className="text-gray-400 text-sm mb-6">
                        Posted on {new Date(project.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-gray-800 text-teal-300 text-xs font-mono px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button onClick={handleCopyLink} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800 px-3 py-1 rounded-full">
                                <Link size={14} />
                                {copyText}
                            </button>
                            <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800 px-3 py-1 rounded-full">
                                <Share2 size={14} />
                                Share
                            </button>
                        </div>
                    </div>

                    <div 
                        className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: project.longDescription }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

// Main App component to manage state and switch between views
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // This effect handles routing, state changes, and scrolling.
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);

      // If hash is empty or '#projects', show the grid.
      if (!hash || hash === 'projects') {
        setSelectedProject(null);
        // If the hash is specifically '#projects', scroll to it.
        if (hash === 'projects') {
          // Defer scroll to allow the DOM to update after state change.
          setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 50); // A small delay is usually sufficient.
        }
      } else {
        // Otherwise, find the project by its slug and display the detail view.
        const projectFromHash = projects.find(p => createSlug(p.title) === hash);
        setSelectedProject(projectFromHash || null);
      }
    };

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check when the component mounts
    handleHashChange();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  // Function to handle selecting a project from the grid
  const handleSelectProject = (project) => {
    const slug = createSlug(project.title);
    window.location.hash = slug;
    window.dispatchEvent(new CustomEvent('project-detail-view', {
    detail: { isOpen: true }
  }));
  };

  // Function to handle going back to the projects grid
  const handleGoBack = () => {
    window.location.hash = 'projects';
     window.dispatchEvent(new CustomEvent('project-detail-view', {
    detail: { isOpen: false }
  }));
  };

  return (
    <div className="bg-slate-950">
        <ProjectsGrid onProjectSelect={handleSelectProject} />
        <AnimatePresence>
            {selectedProject && (
                <ProjectDetail 
                    key={selectedProject.title}
                    project={selectedProject} 
                    onBack={handleGoBack} 
                />
            )}
        </AnimatePresence>
    </div>
  );
}