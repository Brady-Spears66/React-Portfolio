// Importing tech logos
import bootstrap from './assets/tech/bootstrap.png';
import csharp from './assets/tech/csharp.png';
import cpp from './assets/tech/cpp.png';
import css from './assets/tech/css.png';
import eclipse from './assets/tech/eclipse.png';
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
import visualstudio from './assets/tech/visualstudio.png';
import vscode from './assets/tech/vscode.png';
import vmware from './assets/tech/vmware.png';
import winscp from './assets/tech/winscp.png';
import xaml from './assets/tech/xaml.png'

// Importing Project images
import nfl from './assets/projects/NFL.png';
import recipedia from './assets/projects/recipedia.png';
import stocksite from './assets/projects/stocksite.jpeg';
import tourguide from './assets/projects/tourguide.jpeg';
import radarVisualizer from './assets/projects/radarVizualizer.jpeg';
import llmEvaluator from './assets/projects/llmEvaluator.jpeg';

// Importing Education logos
import miamiUniversity from './assets/education/miamiUniversity.png';

// Importing experience logos
import southeasternLogo from './images/SELS.jfif';
import navistarLogo from './images/navistar.png';
import srcLogo from './images/src.png';

// Importing types
import { Experience, Technology, Project, Education} from "./types";

// Creating a list of experiences
export const experiences: Experience[] = [
    {
        date: "May, 2024 - August 2024",
        title: "Software Engineer Intern",
        location: "Fariborn, Ohio",
        company: "SRC Inc.",
        points: [
            "Developed a dynamic and responsive user interface utilizing <strong style='font-size: 1.1em;'>React</strong>, <strong style='font-size: 1.1em;'>TypeScript</strong>, <strong style='font-size: 1.1em;'>Material UI</strong>, and <strong style='font-size: 1.1em;'>Redux</strong>, significantly improving user experience and operational efficiency.",
            "Integrated <strong style='font-size: 1.1em;'>Plotly</strong> with <strong style='font-size: 1.1em;'>React</strong> to create interactive maps and data visualizations, enhancing the user's ability to interpret complex signal data intuitively.",
            "Engineered a robust <strong style='font-size: 1.1em;'>Python</strong> server using <strong style='font-size: 1.1em;'>Quart</strong>, providing reliable backend support and seamless API integrations to enhance overall system performance.",
            "Designed and implemented a complex graph data structure to efficiently manage and execute calls to a large language model (LLM), optimizing data processing workflows and improving the accuracy of results.",
            "Conducted comprehensive analysis and manipulation of 300 unique radar signals by leveraging <strong style='font-size: 1.1em;'>JSON</strong> and <strong style='font-size: 1.1em;'>Python</strong>, contributing to sophisticated signal analysis and advancing the project's data interpretation capabilities.",
            "Utilized <strong style='font-size: 1.1em;'>pandas</strong> to work with CSV files, performing data cleaning, transformation, and analysis to support various aspects of the project.",
            "Created an LLM evaluator framework to test and validate responses from the large language model, ensuring the quality and reliability of outputs.",
            "Utilized prompt engineering techniques to craft precise and effective queries, extracting accurate and relevant results from LLM calls, thereby enhancing the quality and reliability of outputs."
        ],
        logo: srcLogo
    },
    {
        date: "May, 2023 - August 2023",
        title: "Controls Engineer Intern",
        location: "Springfield, Ohio",
        company: "Navistar Inc.",
        points: [
            "Implemented an automated solution using <strong style='font-size: 1.1em;'>VB</strong> configuration files, <strong style='font-size: 1.1em;'>Windows Batch</strong>, and <strong style='font-size: 1.1em;'>Windows Task Scheduler</strong>, ensuring seamless PC reboots and application startup.",
            "Developed <strong style='font-size: 1.1em;'>Nintex Workflows</strong> on a <strong style='font-size: 1.1em;'>SharePoint</strong> site, automating processes such as requesting replacement PCs from IT and updating the Controls issues list.",
            "Established a test server and database for managing content on networked monitors supporting digital signage, enhancing control and visibility.",
            "Designed an interactive <strong style='font-size: 1.1em;'>Visio</strong> diagram depicting the intricate interactions among devices and systems within a specific department.",
            "Utilized the company's <strong style='font-size: 1.1em;'>Tortoise</strong> repository, promoting version control and providing a reference point for colleagues to access and review past work.",
            "Implemented various functions to eliminate inconsistencies in <strong style='font-size: 1.1em;'>SQL</strong> tables, significantly reducing unique values and enhancing data integrity.",
            "Completed a 2-day <strong style='font-size: 1.1em;'>Power BI</strong> training session, gaining expertise in manipulating datatables and creating interactive visuals with diverse filtering capabilities.",
            "Initiated a <strong style='font-size: 1.1em;'>SharePoint</strong> Project to document the internship experience, linking it to the Controls <strong style='font-size: 1.1em;'>SharePoint</strong> site for efficient task management and file storage.",
            "Completed a one-day training on low voltage safety, earning certification for working with voltages ranging from 60 to 600 volts, ensuring adherence to proper safety protocols."
        ],
        logo: navistarLogo
    },
    {
        date: "June, 2019 - August, 2021",
        title: "IT Assistant",
        location: "South Charleston, Ohio",
        company: "Southeastern Local Schools",
        points: [
            "Spearheaded a comprehensive update, successfully upgrading all PCs to <strong style='font-size: 1.1em;'>Windows 10</strong> district-wide, ensuring enhanced security and performance.",
            "Implemented a meticulous inventory system for Chromebooks, creating a detailed spreadsheet capturing crucial details such as model, serial number, MAC address, and device status, streamlining tracking and management processes.",
            "Specialized in diagnosing and repairing a variety of devices, including PCs, Chromebooks, and projectors. Conducted tasks such as cleaning vents, screen replacement, battery replacement, keyboard key replacement, and software updates.",
            "Acquired proficiency in creating custom Ethernet cables        , utilizing a crimper to cut cables to specific lengths. Mastered the cable order sequence and employed a tester to ensure the functionality of all cables.",
            "Enhanced the efficiency of the server room by replacing outdated patch cables with custom-length ones, minimizing clutter and reducing cable waste.",
            "Leveraged <strong style='font-size: 1.1em;'>Windows Task Manager</strong> to monitor and optimize CPU, GPU, and memory status on various devices, ensuring optimal performance across the district."
        ],
        logo: southeasternLogo
    },
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
    },
    {
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
        name: "Eclipse",
        icon: eclipse,

    },
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
        name: "Visual Studio",
        icon: visualstudio,

    },
    {
        name: "Visual Studio Code",
        icon: vscode,

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

// Projects data
export const projects: Project[] = [
    { 
        id: 3, 
        title: 'AI Tour Guide', 
        category: 'AI', 
        image: tourguide,
        description: 'Project for Miami University that utilizes a large language model and retrieval augmented generation (RAG) to create a tour guide that can answer questions about specific data including stats about Miami University\'s college of engineering, important locations, and department information. This application converts speech to text and text back to speech so the user can verbally communcate with the AI assistant. This project was developed using Python, Django, LlamaIndex, HTML, CSS, and JavaScript. ' 
    },
    { 
        id: 6, 
        title: 'LLM Response Evaluator', 
        category: 'AI', 
        image: llmEvaluator, 
        description: 'A framework designed to evaluate and validate responses from large language models (LLMs), ensuring accuracy and reliability of AI-generated content. Developed using Python, this application leverages prompt engineering techniques and a structured evaluation pipeline to test LLM responses systematically. It features advanced data processing capabilities, utilizing graph-based execution models to optimize query performance and response validation.' 
    },
    { 
        id: 4, 
        title: 'NFL Power Rankings',
        category: 'Mobile Apps',
        image: nfl,
        videoUrl: 'https://youtu.be/pf7Ap2d3fBc',
        description: 'A mobile app that displays the NFL power rankings from the 2022 season. \n\nThis app was developed using .NET MAUI with XAML to allow for multi-platform capabilities' 
    },
    { 
        id: 5, 
        title: 'Radar Signal Visualizer', 
        category: 'AI', 
        image: radarVisualizer, 
        description: 'An AI-powered web application designed to visualize and analyze radar signal data with intelligent processing workflows. Utilizing React, TypeScript, Material UI, Redux, and Plotly for dynamic front-end visualization, the backend is built with Python and Quart. LangGraph was implemented to manage complex execution flows for analyzing over 300 unique radar signals, optimizing signal interpretation and enhancing analytical accuracy.' 
    },
    { 
        id: 1, 
        title: 'Recipedia', 
        category: 'Web Apps', 
        image: recipedia, 
        link: 'https://recipedia-cc9fb.web.app/',
        description: 'Web application that provides recipe data and keeps track of a user\'s virtual pantry. This project was designed with a class team utilizing agile project development. Developed using HTML, CSS, JavaScript, and the Spoonacular API' 
    },
    { 
        id: 2, 
        title: 'Stock Site', 
        category: 'Web Apps', 
        image: stocksite, 
        link: 'https://ceclnx01.cec.miamioh.edu/~spearsb2/Stock_Site/cse383_final/home.html',
        description: 'Web application that pulls stock data from polygon.io API to display stock ticker data that the user has selected. The user\'s viewed stock history is stored so it can be easily referenced by date. This project was developed for a class project. Developed using HTML, CSS, BootStrap, JavaScript, SQLite, and PHP.  ' 
    },
];

export const educations: Education[] = [
    {
        school: "Miami University",
        degree: "Bachelor of Arts in Computer Science",
        major: "Co-Major in Entrepreneurship",
        expectedGraduation: "2025",
        logo: miamiUniversity
    },
];
