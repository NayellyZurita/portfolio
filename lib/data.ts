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
import Fivetop from "@/public/fivetop.png"; 
import TopCities from "@/public/topcities.png";

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
    title: "Real State with object-oriented programming",
    href: "https://github.com/NayellyZurita/real-estate.git",
    description: " This project uses Java and object-oriented programming. It is a simple real estate program that allows you to add, delete, and bid for properties.",
    tags: ["Java", "Object-oriented design", "Code structure", "Testing"],
    images: [RealestateImg, RealestateImg], // Always an array
    linkSource: "Github",
    linkName: "View Code",
  },
  {
    title: "Machine Learning: Using Python to Find Your Next Business Opportunity",
    href: "https://colab.research.google.com/drive/1U9Niz6zizAta-QLRYenXu3naXa0ccY-d?usp=sharing",
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
    images: [TopCities, Fivetop], // Always an array
    linkSource: "Google Colab",
    linkName: "View Notebook",
  },
  {
    title: "Predicting Stock Prices with Machine Learning",
    description: `
      <p><strong>Summary</strong></p>
      <p>In this project, I explored data science and finance, using advanced machine-learning techniques to predict stock prices. Through meticulous data collection, cleaning, and analysis, I uncover valuable insights hidden within historical stock price data. By leveraging machine learning models such as ARIMA, LSTM, and linear regression, I seek to forecast future stock prices with accuracy and precision. This educational project demonstrates data science methodologies applied to financial data. Please note that the insights presented are for educational purposes only and should not be construed as financial advice.</p>
    `,
    tags: ["Python", "APIs", "ARIMA", "LSTM"],
    images: [FinanceImg, FinanceImg], // Always an array
    href: "",
    linkSource: "Github",
    linkName: "View Code",
  },
] as const;

export const skillsData = [
  { image: JavaImg },
  { image: ExcelImg },
  { image: JavaScriptImg },
  { image: TableauImg },
  { image: PythonImg },
  { image: SQLImg },
] as const;