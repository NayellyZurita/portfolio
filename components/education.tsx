"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Ensures vertical timeline styles are included
import { useSectionInView } from "@/lib/hooks";
import { LuGraduationCap } from "react-icons/lu"; // Ensure this import is correct

// Education data
const educationData = [
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
      "I worked as a front-end developer for 2 years at one job and 1 year at another job. I also upskilled to full-stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
];

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-9 sm:mb-40 scroll-mt-28 text-lg"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="education"
    >
      <SectionHeading>My Education</SectionHeading>

      {/* Use VerticalTimeline to render education data */}
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "white",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid rgba(0, 0, 0, 0.2)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "rgba(255, 255, 255, 0.15)",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal">{item.location}</p>
            <p className="font-normal text-gray-700">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}