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
 
] as const;

export const projectsData = [
  {
    title: "Identifying factors influencing running pace",
    href:"https://public.tableau.com/views/Runningpaceproject/Dashboard1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link",
    description:
      " I used Tableau to create a dashboard that shows the factors that influence running pace.",
    tags: ["Tableau", "exel", "problem-solving", " statistical analysis",],
    image: StravaImg,
    
   
  },
  {
    title: "Financial Risk Analysis",
    description:
      " This projects is still in progress.....",
    tags: ["Phyton", "pandas", "NumPy", "Seaborn", "Scikit-learn"],
    image: FinanceImg,
    href:"",
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