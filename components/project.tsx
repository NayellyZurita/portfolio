"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  href,
  description,
  tags,
  images,
  linkSource,
  linkName,
}: ProjectProps & { href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = 1;
  const opacityProgess = 1;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-25 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[85rem] border border-black/5 rounded-lg overflow-hidden px-5 sm:px-8 sm:pr-10 sm:pl-10 sm:pt-10 sm:pb-7 dark:text-white transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col h-full w-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <div
            className="leading-relaxed text-gray-800 dark:text-white/70 text-lg text-justify mt-2 mb-4 paragraph-spacing"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex flex-full gap-4 mb-6">
            {Array.isArray(images) && images.map((img, index) => (
              <div key={index} className="w-full sm:w-1/2">
                <Image
                  src={img}
                  alt={`Project image ${index + 1}`}
                  quality={95}
                  layout="responsive"
                  width={300}
                  height={250}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            ))}
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-4"
          >
            {linkName} ({linkSource})
          </a>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}