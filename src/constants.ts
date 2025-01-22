// Importing tech logos
import css from './assets/tech/css.png';
import docker from './assets/tech/docker.png';
import figma from './assets/tech/figma.png';
import git from './assets/tech/git.png';
import html from './assets/tech/html.png';
import javascript from './assets/tech/javascript.png';
import mongodb from './assets/tech/mongodb.png';
import typescript from './assets/tech/typescript.png';
import reactjs from './assets/tech/reactjs.png';
import nodejs from './assets/tech/nodejs.png';
import tailwind from './assets/tech/tailwind.png';
import redux from './assets/tech/redux.png';
import threejs from './assets/tech/threejs.svg';

// Importing experience logos
import southeasternLogo from './images/SELS.jfif';
import navistarLogo from './images/navistar.png';
import srcLogo from './images/src.png';

// Importing types
import { Experience, Technology } from "./types";

// Creating a list of experiences
export const experiences: Experience[] = [
    {
        date: "June, 2019 - August, 2021",
        title: "IT Assistant",
        company: "Southeastern Local Schools",
        points: [
            "Spearheaded a comprehensive update, successfully upgrading all PCs to Windows 10 district-wide, ensuring enhanced security and performance.",
            "Implemented a meticulous inventory system for Chromebooks, creating a detailed spreadsheet capturing crucial details such as model, serial number, MAC address, and device status, streamlining tracking and management processes.",
            "Specialized in diagnosing and repairing a variety of devices, including PCs, Chromebooks, and projectors. Conducted tasks such as cleaning vents, screen replacement, battery replacement, keyboard key replacement, and software updates.",
            "Acquired proficiency in creating custom Ethernet cables, utilizing a crimper to cut cables to specific lengths. Mastered the cable order sequence and employed a tester to ensure the functionality of all cables.",
            "Enhanced the efficiency of the server room by replacing outdated patch cables with custom-length ones, minimizing clutter and reducing cable waste.",
            "Leveraged Windows Task Manager to monitor and optimize CPU, GPU, and memory status on various devices, ensuring optimal performance across the district."
        ],
        logo: southeasternLogo
    },
    {
        date: "May, 2023 - August 2023",
        title: "Controls Engineer Intern",
        company: "Navistar Inc.",
        points: [
            "Implemented an automated solution using VB configuration files, Windows Batch, and Windows Task Scheduler, ensuring seamless PC reboots and application startup.",
            "Developed Nintex Workflows on our SharePoint site, automating processes such as requesting replacement PCs from IT and updating the Controls issues list.",
            "Established a test server and database for managing content on networked monitors supporting digital signage, enhancing control and visibility.",
            "Designed an interactive Visio diagram depicting the intricate interactions among devices and systems within a specific department.",
            "Utilized the company's Tortoise repository, promoting version control and providing a reference point for colleagues to access and review past work.",
            "Implemented various functions to eliminate inconsistencies in SQL tables, significantly reducing unique values and enhancing data integrity.",
            "Completed a 2-day Power BI training session, gaining expertise in manipulating datatables and creating interactive visuals with diverse filtering capabilities.",
            "Initiated a SharePoint Project to document the internship experience, linking it to the Controls SharePoint site for efficient task management and file storage.",
            "Completed a one-day training on low voltage safety, earning certification for working with voltages ranging from 60 to 600 volts, ensuring adherence to proper safety protocols."
        ],
        logo: navistarLogo
    },
    {
        date: "May, 2024 - August 2024",
        title: "Software Engineer Intern",
        company: "SRC Inc.",
        points: [
            "Developed a dynamic and responsive user interface utilizing React, TypeScript, Material UI, and Redux, significantly improving user experience and operational efficiency.",
            "Integrated Plotly with React to create interactive maps and data visualizations, enhancing the user's ability to interpret complex signal data intuitively.",
            "Engineered a robust Python server using Quart, providing reliable backend support and seamless API integrations to enhance overall system performance.",
            "Designed and implemented a complex graph data structure to efficiently manage and execute calls to a large language model (LLM), optimizing data processing workflows and improving the accuracy of results.",
            "Conducted comprehensive analysis and manipulation of 300 unique radar signals by leveraging JSON and Python, contributing to sophisticated signal analysis and advancing the project's data interpretation capabilities.",
            "Utilized pandas to work with CSV files, performing data cleaning, transformation, and analysis to support various aspects of the project.",
            "Created an LLM evaluator framework to test and validate responses from the large language model, ensuring the quality and reliability of outputs.",
            "Utilized prompt engineering techniques to craft precise and effective queries, extracting accurate and relevant results from LLM calls, thereby enhancing the quality and reliability of outputs."
        ],
        logo: srcLogo
    }
]

// Categorizing technologies
export const languages: Technology[] = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
];

export const librariesFrameworks: Technology[] = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
];

export const tools: Technology[] = [
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

export const databases: Technology[] = [
    {
        name: "MongoDB",
        icon: mongodb,
    },
];

export const backend: Technology[] = [
    {
        name: "Node JS",
        icon: nodejs,
    },
];