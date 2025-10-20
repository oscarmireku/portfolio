import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Network,  Cpu, Cloud,  RouterIcon, ArrowLeftRight, 
        EthernetPortIcon, LandPlot, BookUserIcon, FolderOpen, 
        Server, ServerCog, UsersRound, IdCard, CloudDownload, ServerIcon, PrinterIcon, } from "lucide-react";
import {
  FaLinux,
  FaAws,
  FaMicrosoft,
  FaCloud,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import {

  SiVmware,
  SiProxmox,
  SiMacos,
} from "react-icons/si";
import {  TbCloudDataConnection,  } from "react-icons/tb";
import { BsActivity,  BsWindows } from "react-icons/bs";
import { MdAnimation, MdDns, MdHttp, MdHttps, MdOutlineComputer, MdOutlineHardware, MdSecurity, MdTroubleshoot } from "react-icons/md";
import { FcAddressBook,  } from "react-icons/fc";
import { Router } from "react-router-dom";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
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

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Network,
      title: "Network Infrastructure",
      color: "text-green-400",
      skills: [
        { name: "Cisco Routers", icon: <RouterIcon className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Cisco Switches",
          icon: <ArrowLeftRight className="w-4 h-4 text-white" />,
        },
        {
          name: "VLANs",
          icon: <EthernetPortIcon className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "OSPF",
          icon: <BsActivity className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "ACLs",
          icon: <LandPlot className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "NAT",
          icon: <BookUserIcon className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: FaMicrosoft,
      title: "Microsoft Technologies",
      color: "text-blue-400",
      skills: [
        {
          name: "Windows Server",
          icon: <Server className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Active Directory",
          icon: <FolderOpen className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "Azure",
          icon: <FaCloud className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Microsoft 365",
          icon: <ServerCog className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "GPOs",
          icon: <UsersRound className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "Entra ID",
          icon: <IdCard className="w-4 h-4 text-[#E10098]" />,
        },
      ],
    },
    {
      icon: CloudDownload,
      title: "Cloud Technologies",
      color: "text-purple-400",
      skills: [
        { name: "Azure Services", icon: <Cloud className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "AWS",
          icon: <FaAws className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Hyper-V",
          icon: <FaMicrosoft className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "VMWare",
          icon: <SiVmware className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Proxmox",
          icon: <SiProxmox className="w-4 h-4 text-[#C6240B]" />,
        },
        {
          name: "Hybrid Deployment",
          icon: <MdAnimation className="w-4 h-4 text-[#336791]" />,
        },
      ],
    },
    {
      icon: BsWindows,
      title: "Operating Systems",
      color: "text-orange-400",
      skills: [
        { name: "Windows Server", icon: <ServerIcon className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Windows 10/11",
          icon: <BsWindows className="w-4 h-4 text-[#2496ED]" />,
        },
       
        { name: "macOS", icon: <SiMacos className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "IT Support & Hardware",
      color: "text-pink-400",
      skills: [
        {
          name: "Troubleshooting",
          icon: <MdTroubleshoot className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Hardware Diagnostics", icon: <MdOutlineHardware className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "PC Assembly",
          icon: <MdOutlineComputer className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Printer Support", icon: <PrinterIcon className="w-4 h-4 text-[#764ABC]" /> },
        
      ],
    },
    {
      icon: MdSecurity,
      title: "Protocols & Security",
      color: "text-yellow-400",
      skills: [
        {
          name: "TCP/IP",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "DNS",
          icon: <MdDns className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "DHCP",
          icon: <FcAddressBook className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "HTTP/HTTPS",
          icon: <MdHttps className="w-4 h-4 text-[#FF6D00]" />,
        },
        {
          name: "ACLs",
          icon: <TbCloudDataConnection className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "Network Monitoring",
          icon: <FaWatchmanMonitoring className="w-4 h-4 text-[#F05032]" />,
        },
      ],
    },
  ];

  return (
    <main
    id="skills" className="pt-6 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 pt-4 pb-14 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
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
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
