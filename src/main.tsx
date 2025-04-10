import { StrictMode } from "react";
/* import { createRoot } from "react-dom/client"; */

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

// page components

import "./index.css";

import App from "./app/App.tsx";

import About from "./pages/about/components/About.tsx";
import Resume from "./pages/resume/components/Resume.tsx";
import Projects from "./pages/projects/components/Projects.tsx";
import Contact from "./pages/contact/components/Contact.tsx";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children : [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

// rendering 

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
