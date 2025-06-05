import { StrictMode } from 'react';
/* import { createRoot } from "react-dom/client"; */
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

// page components

import App from './App.tsx';
import './index.css';
import About from './pages/about/components/About.tsx';
import Contact from './pages/contact/components/Contact.tsx';
import Projects from './pages/projects/components/Projects.tsx';
import Resume from './pages/resume/components/Resume.tsx';

// content

import NotFound from './pages/notFound/NotFound.tsx';

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
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
