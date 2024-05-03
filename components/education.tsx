"use client";

import React from 'react';
import SectionHeading from './section-heading';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educationData } from '@/lib/data';

export default function Education() {
  return (
    <section id="education">
      <SectionHeading> My Education</SectionHeading>
      <VerticalTimeline>
        {educationData.map((item, index) => (
            <React.Fragment key={index}>
            <VerticalTimelineElement>
             <h3>{item.title}</h3>
             <p>{item.location}</p>
             <p>{item.description}</p>
            </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
    </section>
  );
}