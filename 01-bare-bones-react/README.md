## Getting started: Bare bones React

First thing we want to do is obvious: install React! Then, instead of resorting to magic tricks like `create_react_app` or Next.js we will try to use the React library to render stuff on a webpage. We also want to install ReactDOM to be able to render the elements on the actual DOM. React by itself is just a library that keeps track of the component tree (and its updates), but it does not manage rendering DOM elements.

After installing both libraries, we can already use React! No JSX, no bundler, no server, no framework. *This is what they mean* when they say React is just a library. You import the script, and you use its functions. The React elements? Good old JS objects. Is is just me or is this way cooler without all the magic?

NOTE: Even though React is _just a library_, it is unfeasible to use it as such. You want to use JSX to avoid all these pesky `React.createElement` calls. You want a bundler to break down your components into multiple files. You want a dev server with hot reloading to display the latest changes you made. You want the framework which will handle routing, data fetching and server side rendering. It turns out that React is just a library that requires a lot of other tools to be used effectively. As I said, I feel sorry for new developers. Complexity in web development is getting out of control.
