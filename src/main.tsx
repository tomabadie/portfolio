import { StrictMode } from 'react';
/* import { createRoot } from "react-dom/client"; */

import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { LanguageProvider } from './shared/components/Language/LanguageContext.tsx';
import { ThemeProvider } from './shared/components/Theme/ThemeContext.tsx';

// page components

import './index.css';

import App from './app/App.tsx';

import About from './pages/about/components/About.tsx';
import Contact from './pages/contact/components/Contact.tsx';
import Projects from './pages/projects/components/Projects.tsx';
import Resume from './pages/resume/components/Resume.tsx';

// content

import { aboutDataEn } from './pages/about/data/aboutData.en.tsx';

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <About aboutDataList={aboutDataEn} />,
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
