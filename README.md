# Scract (WIP)

I remember when I started working with React in 2018, when class-based components where the norm and React was _just a library!_ that you could add to your existing project. Fast forward to 2024 and class-based components are all but extinct, and the official docs actually advise *against* using React as a standalone library. They recommend a production-ready framework like Next.js, which has its own fancy features like routing and server-side rendering. I can only feel sorry for newbie web devs these days: 

*Okay, I learned HTML/CSS/JS now let's build a website. Wait, what is this virtual dom business? JSX? Babel? I guess I'll need to learn React. Oh, I'll need Next.js for this, but better ensure I use the App router instead of the page router. Now I have this project directory with a 300 MB `node_modules` folder inside it, but whatever. I can finally build a website! Ah, actually, it might be best to learn some Typescript first.* (A few months later, React compiler comes out...)

I'm doing this as an exercise to understand what it would be like to set up a project from scratch using React. With all these frameworks that keep popping up, I want to ensure that I still understand how to use React as _just a library!_.

## Getting started

First thing we want to do is obvious: install React! Then, instead of resorting to magic tricks like `create_react_app` or Next.js we will try to use the React library to render stuff on a webpage. Also, I'm not sure if I want to set up a server that returns the bundled files magically (I don't like magic). I will try first to create a simple HTML file that imports the React library as well as my scripts to render the UI. This means no `src` directory for now. The HTML and JS files will be created directly in the `dist` folder.
