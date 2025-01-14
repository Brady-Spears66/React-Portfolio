# Overview

This is the repository for my portfolio web application. This project will be developed using React+Vite along with TypeScript.

## FrameWorks

- React
- Vite
- TypeScript

# Firebase instructions

## Building the project
When you reach the point where you want to deploy your updated code, you need to begin by building the production ready project. 

Run:  `npm run build` from the console

This will create (or overwrite) the `dist` folder.

You will need to take the contents of the `dist` folder and move them to the `public` folder.

*Note* The `public` folder probably already has files inside, but you don't need them now that you have rebuilt your project, so delete everything that was in there before. This folder is what firebase looks in to find the code you want to have hosted.

## Deploying the project

Simply run the command:  `firebase deploy` from the same console session you built the project in.

From here, the console should have printed a the link that your updated website is publicly hosted on.

Go to this link to verify that everything looks right.




