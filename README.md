# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# react-test

# public Folder

- where all the static apps related to the app will go.
- could include images, icons and information files for the browser

# src Folder

- where you will find code that runs the app.
- main.jsx file serves as the entry point for the app

# /src/main.jsx

- import `StrictMode` and `createRoot` from `react` and `react-dom` packages respectively
- import `App` component from `App.jsx`

npm run dev
localhost:5173

e.g. React Components
- App
- Navbar
- MainArticle
- NewsletterForm

# What is JSX?

- syntax extension for JS that lets you write HTML-like markup inside JS file
- not required when writing React components, but it does make writing them more concise

- syntactic sugar for React `createElement` function.
- function creates a React element, a plain object, so JSX compiles down to plain JS objects.

# Rules of JSX

- return a single root element (either by `<div>` or React fragment `<>Children</>`)

===
function App() {
  // Could replace <></> with <div></div>
  return (
    <>
      <h1>Example h1</h1>
      <h2>Example h2</h2>
    </>
  );
}
===

- close all tags (`<input>` becomes `<input />`, `<li>` becomes `<li></li>`)
- camelCase MOST things(`stroke-width` becomes `strokeWidth`, `class` becomes `className`)

# Where to get keys

- generated from a database, if from a database
- otherwise when locally generated, use incrementing counter, `crypto.randomUUID()` or package like `uuid` when creating
items