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
      className="mb-28 max-w-[80rem] text-center leading-9 sm:mb-40 scroll-mt-28 text-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       {" "}
        <span className="font-large"></span>I'm pursuing a degree in Data Science to advance my passion for transforming data into actionable solutions. Data has the potential to impact society significantly, and I am dedicated to bringing insight and problem-solving.
        Throughout my journey, I have gained proficiency in programming languages such as Java, Python, and SQL and data visualization tools like Tableau. I have also developed skills in machine learning, data analysis, and statistical modeling. Additionally, I am proficient in using Python libraries like Pandas, NumPy, Matplotlib and Scikit-learn.
        I am actively seeking internship opportunities in data science to develop my skills further and apply my knowledge professionally.
      </p>
      <p>
        <span className="italic">When I'm not working on projects</span>, I enjoy spending
        time outdoors. I like running, hiking, {" "}
        <span className="font-large">and learning new sports.</span> I also value time
        with my {" "}
        <span className="font-large">family</span> and friends.
      </p>
    </motion.section>
  );
}