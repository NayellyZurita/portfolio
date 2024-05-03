"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-9 sm:mb-40 scroll-mt-28 text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning  my degree in{" "}
        <span className="font-large">Economics</span>, I decided to pursue a data science degree. {" "}
        <span className="font-large">my favorite part of</span>{" "}
        <span className="italic">working with data is transforming it into </span>
        solutions for problem-solving situations. <span className="underline">Data</span> has
        the potential to make a significant impact on society.
        {" "}
        <span className="font-large">
        Throughout my journey, I have gained proficiency in various programming languages,
         including Java, Python, and SQL Server, as well as in data visualization tools like Tableau. 
  
        </span>
         I'm seeking internship opportunities in data science{" "}
        <span className="font-large">to develop my skills further</span> a and 
        apply my knowledge professionally.
      </p>

      <p>
        <span className="italic">When I'm not working on projects</span>, I enjoy spending
         time outdoors. I like running, hiking,  {" "}
        <span className="font-large">and learning new sports.</span>  I also value time 
        with my {" "}
        <span className="font-large"> family </span> and friends.
      </p>
    </motion.section>
  );
}