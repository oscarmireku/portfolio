import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network,  Cpu, Cloud,  RouterIcon, ArrowLeftRight, 
        EthernetPortIcon, FolderOpen, 
        ServerCog, UsersRound, IdCard, CloudDownload, ServerIcon, PrinterIcon, } from "lucide-react";
import {
  FaLinux,
  FaAws,
  FaMicrosoft,
  FaCloud,
  FaWatchmanMonitoring,
  FaCode
} from "react-icons/fa";
import {
  SiVmware,
  SiProxmox,
  SiMacos,
} from "react-icons/si";
import { BsActivity,  BsWindows } from "react-icons/bs";
import { MdDns, MdHttp, MdSecurity, MdTroubleshoot, MdOutlineComputer, MdOutlineHardware } from "react-icons/md";
import { FcAddressBook,  } from "react-icons/fc";


const SkillCard = ({ icon: Icon, title, skills, color }) => (
  // Updated: bg-gray-900/80 and border-gray-700 to bg-card and border-border
  <Card className="group relative overflow-hidden bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className={`absolute top-0 left-0 w-full h-full opacity-10 blur-xl ${color} transition-opacity duration-500 group-hover:opacity-30`}></div>
    {/* Explicitly setting background to card color for inner div */}
    <div
      className={`absolute inset-[1px] rounded-[0.7rem] bg-card`}
    ></div>
    <div className={`absolute inset-0 z-0 bg-gradient-to-r from-transparent via-${color}/50 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          // Updated: bg-gray-800/50 to bg-muted/50
          className={`p-3 rounded-xl bg-muted/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-8 h-8 ${color} transition-colors duration-300`} />
        </div>
        {/* Updated: text-white to use foreground and muted-foreground gradient */}
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            // Updated: Hardcoded colors to theme-aware classes
            className="group/badge relative bg-muted/50 hover:bg-muted/80 text-foreground border-border flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Services",
    color: "text-blue-500",
    skills: [
      { name: "Azure", icon: <FaMicrosoft className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-600" /> },
      { name: "SaaS/PaaS/IaaS", icon: <FaCloud className="text-teal-400" /> },
      { name: "Cloud Migration", icon: <CloudDownload className="text-indigo-400" /> },
      
    ],
  },
  {
    icon: ServerCog,
    title: "OS & Virtualization",
    color: "text-red-500",
    skills: [
      { name: "Windows Server", icon: <BsWindows className="text-blue-400" /> },
      { name: "Linux (Ubuntu/CentOS)", icon: <FaLinux className="text-orange-600" /> },
      { name: "VMware vSphere", icon: <SiVmware className="text-gray-400" /> },
      { name: "Proxmox", icon: <SiProxmox className="text-green-500" /> },
      { name: "MacOS", icon: <SiMacos className="text-blue-300" /> },
    ],
  },
  {
    icon: Network,
    title: "Networking",
    color: "text-teal-500",
    skills: [
      { name: "TCP/IP", icon: <EthernetPortIcon className="text-teal-400" /> },
      { name: "DNS/DHCP", icon: <MdDns className="text-green-500" /> },
      { name: "VPN (Site-to-Site)", icon: <ArrowLeftRight className="text-indigo-400" /> },
      { name: "Routing/Switching", icon: <RouterIcon className="text-red-400" /> },
      { name: "Protocols (HTTP/S)", icon: <MdHttp className="text-yellow-400" /> },
    ],
  },
  {
    icon: ServerIcon,
    title: "System Administration",
    color: "text-yellow-500",
    skills: [
      { name: "Active Directory", icon: <UsersRound className="text-blue-500" /> },
      { name: "Group Policy", icon: <IdCard className="text-green-500" /> },
      { name: "System Monitoring", icon: <FaWatchmanMonitoring className="text-red-500" /> },
      { name: "Scripting (Bash/PowerShell)", icon: <FaCode className="text-indigo-400" /> },
      { name: "Data Backup", icon: <FolderOpen className="text-yellow-600" /> },
    ],
  },
  {
    icon: MdSecurity,
    title: "Security & Compliance",
    color: "text-indigo-500",
    skills: [
      { name: "Firewall Management", icon: <MdSecurity className="text-red-500" /> },
      { name: "Endpoint Protection", icon: <MdOutlineComputer className="text-blue-500" /> },
      { name: "Vulnerability Scans", icon: <MdTroubleshoot className="text-yellow-500" /> },
      { name: "Patch Management", icon: <BsActivity className="text-teal-400" /> },
    ],
  },
  {
    icon: Cpu,
    title: "Hardware & Support",
    color: "text-pink-500",
    skills: [
      { name: "PC & Server Hardware", icon: <MdOutlineHardware className="text-gray-400" /> },
      { name: "Troubleshooting", icon: <MdTroubleshoot className="text-red-500" /> },
      { name: "Printer Mgmt", icon: <PrinterIcon className="text-green-500" /> },
      { name: "Asset Tracking", icon: <FcAddressBook /> },
    ],
  },
];

const SkillsSection = () => {

  return (
    <main
    id="skills" 
    className="pt-6 lg:pt-0 text-foreground min-h-screen bg-background relative"> 
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <section className="container mx-auto px-4 pt-32 pb-14 relative z-10"> 
        
        {/* UPDATED: Skills Section Heading to use the blue-teal gradient */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;