// Importing tech logos
import bootstrap from './assets/tech/bootstrap.png';
import csharp from './assets/tech/csharp.png';
import cpp from './assets/tech/cpp.png';
import css from './assets/tech/css.png';
import firebase from './assets/tech/firebase.png';
import flask from './assets/tech/flask.svg';
import git from './assets/tech/git.png';
import html from './assets/tech/html.png';
import java from './assets/tech/java.png';
import javascript from './assets/tech/javascript.png';
import langchain from './assets/tech/langchain.svg'
import llamaIndex from './assets/tech/llamaindex.png';
import linux from './assets/tech/linux.png';
import maui from './assets/tech/maui.png';
import mui from './assets/tech/mui.png';
import plotly from './assets/tech/plotly.svg';
import putty from './assets/tech/putty.png';
import python from './assets/tech/python.png';
import quart from './assets/tech/quart.svg';
import reactjs from './assets/tech/reactjs.png';
import redux from './assets/tech/redux.png';
import threejs from './assets/tech/threejs.svg';
import typescript from './assets/tech/typescript.png';
import vmware from './assets/tech/vmware.png';
import winscp from './assets/tech/winscp.png';
import xaml from './assets/tech/xaml.png'

// Importing experience logos
import southeasternLogo from './images/SELS.jfif';
import navistarLogo from './images/navistar.png';
import srcLogo from './images/src.png';

// Importing types
import { Experience, Technology, Project} from "./types";

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
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
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
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "XAML",
        icon: xaml,
    },
];

export const librariesFrameworks: Technology[] = [
    {
        name: "Flask",
        icon: flask,
    },
    {
        name: "Quart",
        icon: quart,
    },
    {
        name: "LangChain",
        icon: langchain,
    },{
        name: "Llama Index",
        icon: llamaIndex,
    },
    {
        name: "Plotly",
        icon: plotly,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux JS",
        icon: redux,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Material UI",
        icon: mui,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: ".NET MAUI",
        icon: maui,
    },
];

export const tools: Technology[] = [
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Google Firebase",
        icon: firebase,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "PuTTy",
        icon: putty,
    },
    {
        name: "VMWare",
        icon: vmware,
    },
    {
        name: "WinSCP",
        icon: winscp,
    },
];

// Sample projects data
export const projects: Project[] = [
    { id: 1, title: 'Financial Planning App', category: 'Web App', image: '/images/project1.jpg', description: 'A platform connecting users with financial advisors.' },
    { id: 2, title: 'AI Defense System', category: 'AI', image: '/images/project2.jpg', description: 'An AI-powered defense analysis tool.' },
    { id: 3, title: 'Real Estate Dashboard', category: 'Dashboard', image: '/images/project3.jpg', description: 'A real estate analytics and management dashboard.' },
    { id: 4, title: 'Stock Market Predictor', category: 'AI', image: '/images/project4.jpg', description: 'An ML model for stock market forecasting.' }
];
