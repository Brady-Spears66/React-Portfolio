# 🚀 Personal Portfolio Website

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![Material UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-46A5F1?style=for-the-badge&logo=maildotru&logoColor=white)](https://www.emailjs.com/)

---

Welcome to the source code for my **portfolio website** — a high-performance, interactive, and fully responsive React app built with a modern stack. It’s designed to showcase my skills, projects, and contact information in a sleek, professional format.

This site features dynamic 3D elements with **Three.js**, responsive layouts with **MUI**, centralized state management via **Redux**, and seamless email integration using **EmailJS**. It's hosted and deployed using **Google Firebase**.

---

## 🌐 Live Demo

🔗 Visit here: [site link](https://bradyspearsportfolio.web.app)

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
Feel free to reach out through the [contact form](https://bradyspearsportfolio.web.app/contact) on the live site.
