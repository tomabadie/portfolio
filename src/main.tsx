import { StrictMode } from 'react';
/* import { createRoot } from "react-dom/client"; */
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

// page components

import App from './App.tsx';
import './index.css';

import About from './pages/about/About.tsx';
import Contact from './pages/contact/Contact.tsx';
import Home from './pages/home/Home.tsx';
import NotFound from './pages/notFound/NotFound.tsx';
import Projects from './pages/projects/Projects.tsx';
import Resume from './pages/resume/Resume.tsx';

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById('root');

if (rootElement == null) {
  throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
