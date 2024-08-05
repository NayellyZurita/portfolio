import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import Fivetop from "@/public/fivetop.png"; 
import TopCities from "@/public/topcities.png";
import Realestate1 from "@/public/RealState2.png";
import Realestate2 from "@/public/RealState3.png";
import LSTM from "@/public/lstm.png";
import LinearReg from "@/public/linearreg.png";
import FraudDet from "@/public/TableauSQL.png";
import FraudDet2 from "@/public/TableauSQL1.png";
import { link } from "fs";

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
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Fraud Detection Analysis and Trend Visualization",
    description: `
    <p><strong>Summary</strong></p>
     <p>Insurance claims are critical for providing financial support to policyholders in need, ensuring stability and trust in the insurance industry. However, fraudulent claims can significantly undermine this trust and lead to substantial monetary losses. In this project, Fraud Detection Analysis and Trend Visualization strives to identify and mitigate fraudulent activities in insurance claims through extensive data analysis and visualization.</p>
<p>The purpose of this project is to gain insights to identify suspicious transactions. The project uses an SQL server to query and extract significant data to detect fraud. Finally, Tableau is used to visualize the data, making identifying and communicating potential fraud patterns easier.</p>
<p>This project highlights the importance of robust data analysis and visualization in detecting and preventing insurance fraud, ultimately protecting insurance companies and their policyholders.</p>

    `,
    tags: ["SQL Server", "Tableau", ],
    images: [FraudDet, FraudDet2 ], // Always an array
    links: [
      {
        href: "https://github.com/NayellyZurita/Fraud_detection.git",
        linkName: "View Github Code"
      },
      {
        href: "https://public.tableau.com/shared/WQNC8D72D?:display_count=n&:origin=viz_share_link",
        linkName: "View Tableau Dashboard"
      }
    ] 
  },
  {
    title: "Predicting ADBE Stock Prices with Machine Learning",
    description: `
      <p><strong>Summary</strong></p>
      <p>I explored data science and finance, using machine-learning techniques to predict stock prices. Through meticulous data collection, cleaning, and analysis, I found valuable insights hidden within historical stock price data. By leveraging machine learning models such as LSTM, and linear regression, I seek to forecast stock prices with accuracy and precision. This educational project demonstrates data science methodologies applied to financial data. Please note that the insights presented are for educational purposes only and should not be construed as financial advice.</p>
    `,
    tags: ["Python", "APIs", "ARIMA", "LSTM"],
    images: [LSTM,LinearReg ], // Always an array
    links: [
      {
        href: "",
        linkName: "View Code"
      }

    ]
    
  },
  {
    title: "Machine Learning: Using Python to Find Your Next Business Opportunity",
    description: `
      <p><strong>Summary</strong></p>
      <p>This project leverages the power of machine learning to analyze market data and find the top five places to establish a coffee business in California. Additionally, it predicts the price of a latte based on demographic data from these prime locations. This project provides a comprehensive approach to strategic business planning by integrating advanced data analysis and machine learning techniques.</p>
      <p>Key aspects of this project include:</p>
      <ul>
          <li><strong>Data Processing and Scaling:</strong> Cleaning and preparing the data to ensure accuracy and consistency.</li>
          <li><strong>Model Selection:</strong> Evaluating different machine learning models to determine the best fit for the data.</li>
          <li><strong>Hyperparameter Tuning:</strong> Optimizing model parameters to improve performance.</li>
          <li><strong>Linear Regression:</strong> Analyzing the relationship between demographic variables and latte prices.</li>
          <li><strong>Random Forest and Gradient Boosting:</strong> Using ensemble learning methods to enhance prediction accuracy.</li>
          <li><strong>Model Evaluation:</strong> Assessing model performance to ensure reliable predictions.</li>
      </ul>
    `,
    tags: ["Python", "pandas", "NumPy", "matplotlib", "Scikit-learn"],
    images: [TopCities, Fivetop,], // Always an array
    links: [
      {
        href: "https://colab.research.google.com/drive/1U9Niz6zizAta-QLRYenXu3naXa0ccY-d?usp=sharing",
        linkName: "View Colab Code"
      }
    ]
  },
  {
    title: "Real State with object-oriented programming",
    description: " This project uses Java and object-oriented programming. It is a simple real estate program that allows you to add, delete, and bid for properties.",
    tags: ["Java", "Object-oriented design", "Code structure", "Testing"],
    images: [Realestate1,Realestate2 ], // Always an array
    links: [
      {
        href: "https://github.com/NayellyZurita/real-estate.git",
        linkName: "View Github Code"
      } 
    ]
  },
 
  
] as const;

export const skillsData = [
  {
    category: "Programming Languages:",
    skills: ["Python", "Java", "JavaScript", "SQL"]
  },
  {
    category: "Data Analysis and Statistics:",
    skills: ["Excel", "Tableau", "Machine Learning", "Linear Regression"]
  },
  {
    category: "Frameworks and Tools:",
    skills: ["React", "Next.js", "Node.js"]
  },
  {
    category: "Python Libraries:",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras"]
  },
  {
    category: "Problem-Solving Skills:",
    skills: ["Data Structures", "Algorithms", "Object-Oriented Design", "Git and Version Control", "Testing and Debugging"]
  },
  {
    category: "Soft Skills:",
    skills: ["Communication", "Teamwork", "Problem-Solving"]
  },
  {
    category: "Languages:",
    skills: ["English", "Spanish"]
  }
] as const;