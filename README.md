# 🚀 Personal Portfolio Website

<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
<a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" /></a>
<a href="https://mui.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material UI" /></a>
<a href="https://threejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" /></a>
<a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" /></a>
<a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/EmailJS-46A5F1?style=for-the-badge&logo=maildotru&logoColor=white" alt="EmailJS" /></a>

---

Welcome to the source code for my **portfolio website** — a high-performance, interactive, and fully responsive React app built with a modern stack. It’s designed to showcase my skills, projects, and contact information in a sleek, professional format.

This site features dynamic 3D elements with **Three.js**, responsive layouts with **MUI**, centralized state management via **Redux**, and seamless email integration using **EmailJS**. It's hosted and deployed using **Google Firebase**.

---

## 🌐 Live Demo

🔗 Visit here: <a href="https://bradyspearsportfolio.web.app" target="_blank" rel="noopener noreferrer">Live Site</a>

---

## 📸 Screenshot Preview

![Portfolio Screenshot](/src/images/PortfolioSnapshot.png)

> _Sneak peek of the portfolio landing page with animated 3D graphics and smooth transitions._

---

## 📁 Project Structure

```
src/
├── assets/         # Static images, 3D models, icons
├── components/     # Reusable UI components
├── state/          # Redux setup and slices
├── pages/          # Main pages (Home, About, Projects, etc.)
├── utils/          # Utility functions
├── constants.ts    # Static variables
├── types.tsx       # Declared types being used
├── App.tsx         # Root component
└── main.tsx        # App entry point
```

---

## 🛠️ Firebase Deployment Instructions

### Building the Project

To create a production-ready build:

```bash
npm run build
```

This command updates the `public/` folder.

> 🔥 Firebase will serve whatever is inside `public/` — make sure it contains your latest build.

---

### Deploying the Project

With the new build in `public/`, deploy using:

```bash
firebase deploy
```

After deployment, the console will provide a public URL. Open it in a browser to verify your changes are live!

---

## 🙌 Thanks for Stopping By!

If you like this project, consider starring the repo or sharing it!  
Feel free to reach out through the <a href="https://bradyspearsportfolio.web.app/contact" target="_blank" rel="noopener noreferrer">contact form</a> on the live site.
