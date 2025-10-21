import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Link, Share2 } from 'lucide-react';
import { scroller } from "react-scroll";


// Helper function to create a URL-friendly slug from a title
const createSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[!?,.:;"()]/g, '');


// Data for the projects, with an added 'longDescription' and 'date' for the detail page.
const projects = [
  {
    title: "Azure Site-to-Site VPN Connection",
    description: "Configured a secure, resilient VPN between Azure VNet and an on-premises network.",
    date: "2025-10-20",
    longDescription: `
        <p>This project involved setting up a robust, highly available Site-to-Site VPN using Azure Virtual WAN and a simulated on-premises gateway. The primary goal was to ensure seamless, secure communication for hybrid cloud applications and data synchronization. Key technologies utilized included Azure VPN Gateway, BGP routing, and strong encryption protocols (IKEv2).</p>
        <p><em>The solution provided a secure, cost-effective extension of the corporate network into the cloud.</em></p>
        <img src="https://placehold.co/1200x800/0f172a/94a3b8?text=VPN+Topology+Diagram" alt="VPN Topology Diagram" class="rounded-lg my-4" />
        <h3 style="margin-top: 1.5rem; font-size: 1.5rem; font-weight: 700;">Technical Achievements</h3>
        <ul>
            <li>Achieved 99.9% uptime for the connection using redundant gateway configurations.</li>
            <li>Implemented custom routing tables (UDRs) to optimize traffic flow between cloud and on-prem subnets.</li>
            <li>Automated configuration deployment using Terraform for infrastructure as code (IaC).</li>
        </ul>
        <p>This project sharpened my skills in network security, Azure networking services, and automation, providing a deep understanding of hybrid cloud connectivity challenges.</p>
    `,
    tags: ["Azure Networking", "Site-to-Site VPN", "BGP", "Terraform", "Cloud Security"],
    image: "https://placehold.co/1200x800/0f172a/94a3b8?text=Azure+VPN"
  },
  {
    title: "Active Directory Migration to Azure AD",
    description: "Successfully migrated 500+ users and groups from on-premises AD to Azure Active Directory.",
    date: "2025-08-15",
    longDescription: `
        <p>The objective was to modernize identity management by moving from a legacy on-premises Active Directory (AD) to Azure Active Directory (Azure AD) for enhanced security, single sign-on (SSO) capabilities, and simplified user access management. The project utilized Azure AD Connect to synchronize users, groups, and password hashes, followed by a phased rollout of conditional access policies.</p>
        <img src="https://placehold.co/1200x800/1e293b/94a3b8?text=Azure+AD+Dashboard" alt="Azure AD Dashboard" class="rounded-lg my-4" />
        <h3 style="margin-top: 1.5rem; font-size: 1.5rem; font-weight: 700;">Key Outcomes</h3>
        <ul>
            <li>Implemented Multi-Factor Authentication (MFA) company-wide, reducing phishing risks by over 90%.</li>
            <li>Enabled Single Sign-On (SSO) for core SaaS applications, improving user experience.</li>
            <li>Created and enforced Conditional Access policies based on location and device compliance.</li>
        </ul>
    `,
    tags: ["Azure AD", "Identity Management", "SSO", "MFA", "Conditional Access"],
    image: "https://placehold.co/1200x800/1e293b/94a3b8?text=AD+Migration"
  },
  {
    title: "Automated VM Patch Management",
    description: "Developed PowerShell scripts and Azure Automation runbooks for automated patching of 100+ Windows Servers.",
    date: "2025-06-01",
    longDescription: `
        <p>Patching a large fleet of virtual machines (VMs) manually was time-consuming and prone to human error. This project focused on creating a scalable, automated solution using **Azure Automation Update Management**. I authored custom PowerShell DSC (Desired State Configuration) scripts to handle pre- and post-update tasks, ensuring application health checks were performed before and after every patching cycle.</p>
        <img src="https://placehold.co/1200x800/0f172a/94a3b8?text=PowerShell+Script+Example" alt="PowerShell Script Example" class="rounded-lg my-4" />
        <h3 style="margin-top: 1.5rem; font-size: 1.5rem; font-weight: 700;">Solution Highlights</h3>
        <ul>
            <li>Reduced manual patching time by 80%, allowing the team to focus on strategic tasks.</li>
            <li>Improved security compliance scores by guaranteeing monthly patching cycles were met.</li>
            <li>Implemented a change control process integrated with Azure DevOps for tracking approvals.</li>
        </ul>
    `,
    tags: ["Azure Automation", "PowerShell", "VM Management", "Patching", "DSC"],
    image: "https://placehold.co/1200x800/0f172a/94a3b8?text=Automation"
  }
];


// Component for the grid of project cards
function ProjectsGrid({ onProjectSelect }) {
  return (
    <section id="projects" className="bg-background text-foreground py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          Featured Projects
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layoutId={`card-container-${project.title}`}
              className="bg-card rounded-xl shadow-lg overflow-hidden group cursor-pointer flex flex-col" 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0px 10px 30px rgba(0, 255, 255, 0.1)' }}
              onClick={() => onProjectSelect(project)}
            >
              <motion.div layoutId={`card-image-${project.title}`} className="w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x800/0f172a/94a3b8?text=Image+Not+Found'; }}
                />
              </motion.div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-blue-400 transition-colors"> 
                  {project.title}
                </h3>
                 <p className="text-muted-foreground text-xs mb-2"> 
                    {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
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
    const scrollContainerRef = useRef(null);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [copyText, setCopyText] = useState('Copy Link');
    const lastScrollY = useRef(0);

    useEffect(() => {
        // Force scroll to top on mount
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
            setIsButtonVisible(true);
        }

        // Logic to show/hide the sticky button based on scroll direction
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            if (container) {
                const currentScrollY = container.scrollTop;
                // Show button if scrolling up OR near the top (less than 100px scroll)
                if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
                    setIsButtonVisible(true);
                } else {
                    // Hide button if scrolling down significantly
                    setIsButtonVisible(false);
                }
                lastScrollY.current = currentScrollY;
            }
        };

        const currentRef = scrollContainerRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [project]);

    const handleCopyLink = () => {
        const link = window.location.href;
        navigator.clipboard.writeText(link).then(() => {
            setCopyText('Copied!');
            setTimeout(() => setCopyText('Copy Link'), 2000);
        }).catch(err => {
            console.error('Could not copy text: ', err);
            setCopyText('Error!');
            setTimeout(() => setCopyText('Copy Link'), 2000);
        });
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: project.title,
                text: project.description,
                url: window.location.href,
            }).catch(err => console.error('Error sharing', err));
        } else {
            alert("Web Share API is not supported in this browser.");
        }
    };

    return (
        <motion.div 
            ref={scrollContainerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm text-foreground p-4 sm:p-8 overflow-y-auto" 
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
                                // UPDATED: Added glass effect (bg-card/90 and backdrop-blur-md) and padding
                                className="flex items-center gap-2 font-semibold bg-card/90 backdrop-blur-md rounded-full shadow-lg border border-border/70 px-4 py-2 hover:border-blue-400 transition-all duration-300
                                           bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 pointer-events-auto"
                            >
                                <ArrowLeft size={20} className="text-blue-400" />
                                <span className="text-base text-primary">Back to Projects</span>
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                <div className="bg-card rounded-2xl shadow-2xl shadow-teal-500/20 p-8 -mt-12">
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

                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-2">{project.title}</h1>
                    <p className="text-muted-foreground text-sm mb-6">
                        Posted on {new Date(project.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span 
                                    key={tag} 
                                    className="bg-muted/70 text-blue-400 border border-blue-400/50 text-xs font-mono px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button onClick={handleCopyLink} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-muted/70 px-3 py-1 rounded-full">
                                <Link size={14} />
                                {copyText}
                            </button>
                            <button onClick={handleShare} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-muted/70 px-3 py-1 rounded-full">
                                <Share2 size={14} />
                                Share
                            </button>
                        </div>
                    </div>

                    <div 
                        className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed" 
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

  const handleSelectProject = (project) => {
    const slug = createSlug(project.title);
    window.location.hash = slug;
    window.dispatchEvent(new CustomEvent('project-detail-view', {
    detail: { isOpen: true }
  }));
  };

  const handleGoBack = () => {
    window.location.hash = 'projects';
     window.dispatchEvent(new CustomEvent('project-detail-view', {
    detail: { isOpen: false }
  }));
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const projectFromHash = projects.find(p => createSlug(p.title) === hash);
        setSelectedProject(projectFromHash || null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  return (
    <div className="bg-background">
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