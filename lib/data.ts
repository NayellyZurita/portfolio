import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import JavaImg from "@/public/java.png";
import ExcelImg from "@/public/excel.png";
import JavaScriptImg from "@/public/javaScript.png";
import TableauImg from "@/public/Tableau.png";
import PythonImg from "@/public/Python.png";
import SQLImg from "@/public/SQL.png";
import FinanceImg from "@/public/finance.jpg";
import RealestateImg from "@/public/realestate.jpg";

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
    title: "Real State with object-oriented programming",
    href:"https://github.com/NayellyZurita/real-estate.git",
    description:
      " This project uses Java and object-oriented programming. It is a simple real estate program that allows you to add, delete, and bid for properties.",
    tags: ["Java", "Object-oriented desing", "Code structure", " Testing",],
    image: RealestateImg,
   
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