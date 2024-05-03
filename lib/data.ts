import Image from "next/image";
import StravaImg from "@/public/Strava.png";
import JavaImg from "@/public/java.png";
import ExcelImg from "@/public/excel.png";
import JavaScriptImg from "@/public/javaScript.png";
import TableauImg from "@/public/Tableau.png";
import PythonImg from "@/public/Python.png";


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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",

    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    
    date: "2019 - 2021",
  },
  
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    image: StravaImg,
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
] as const;