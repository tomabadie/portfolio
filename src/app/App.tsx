import { Outlet } from 'react-router';

import Footer from '../shared/components/Footer/Footer';
import Header from '../shared/components/Header/Header';
import Social from '../shared/components/Social/components/Social';

import { navDataEn } from '../shared/components/Header/data/navData.en';
import { navDataFr } from '../shared/components/Header/data/navData.fr';

function App() {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_auto_auto_auto] gap-4">
      <Header en={navDataEn} fr={navDataFr} />
      <main className="bg-global-primary min-h-[calc(100vh-68px-24px)] py-8">
        <Social />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
