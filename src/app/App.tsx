import { Outlet } from 'react-router';

import Footer from '../shared/components/Footer/Footer';
import Header from '../shared/components/Header/Header';

import { navDataEn } from '../shared/components/Header/data/navData.en';
import { navDataFr } from '../shared/components/Header/data/navData.fr';

function App() {
  return (
    <>
      <Header en={navDataEn} fr={navDataFr} />
      <main className="bg-global-primary min-h-[calc(100vh-68px-24px)] py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
