import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import StravaImg from "@/public/Strava.png";
import JavaImg from "@/public/java.png";
import ExcelImg from "@/public/excel.png";
import JavaScriptImg from "@/public/javaScript.png";
import TableauImg from "@/public/Tableau.png";
import PythonImg from "@/public/Python.png";
import SQLImg from "@/public/SQL.png";
import FinanceImg from "@/public/finance.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const educationData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
  "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
    "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
    "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Identifying factors influencing running pace",
    description:
      " I used Tableau to create a dashboard that shows the factors that influence running pace.",
    tags: ["Tableau", "exel", "problem-solving", " statistical analysis",],
    image: StravaImg,
    href:"https://public.tableau.com/views/Runningpaceproject/Dashboard1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
   
  },
  {
    title: "Financial Risk Analysis",
    description:
      " This projects is still in progress.....",
    tags: ["Phyton", "pandas", "NumPy", "Seaborn", "Scikit-learn"],
    image: FinanceImg,
  
  },
    
] as const;

export const skillsData = [
  {
   
    image: JavaImg,
  },
  {
    
    image: ExcelImg,
  },
  {
    
    image: JavaScriptImg,
  },
  {
   
    image: TableauImg,
  },
  {
    
    image: PythonImg,
  },
  {
    
    image: SQLImg,
  },
] as const;