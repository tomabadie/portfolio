import { Outlet } from 'react-router';

import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/Header/Header';
import { navDataEn } from './components/layouts/Header/data/navData.en';
import { navDataFr } from './components/layouts/Header/data/navData.fr';

function App() {
  return (
    <>
      <Header en={navDataEn} fr={navDataFr} />
      <main className="bg-global-primary transition-theme min-h-[calc(100vh-68px-24px)] py-4 md:py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
