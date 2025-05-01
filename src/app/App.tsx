import { Outlet } from 'react-router';

import Footer from '../shared/components/Footer/Footer';
import Header from '../shared/components/Header/Header';
import Social from '../shared/components/Social/components/Social';

import { navigationItemList } from '../shared/components/Header/data/navData.en';

function App() {
  return (
    <>
      <Header navList={navigationItemList} />
      <main className="bg-global-primary min-h-[calc(100vh-68px-24px)] py-8">
        <Social />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
