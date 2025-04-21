import { Outlet } from 'react-router';

import Header from '../shared/components/Header/Header';
import Social from '../shared/components/Social/components/Social';
import Footer from '../shared/components/Footer/Footer';
import TypographyTest from '../TypographyTest';

import { navigationItemList } from '../shared/components/Header/data/navData.en';

function App() {
  return (
    <>
      <Header navList={navigationItemList} />
      <main>
        <Social />
        <section>
          {' '}
          <Outlet />{' '}
        </section>
      </main>
      <Footer />
      <TypographyTest />
      <div className="bg-debug h-10 w-10" />
      <p className="font-heading text-3xl">Texte avec font-heading Satoshi</p>
      <p className="font-body text-3xl">Texte avec font-body Inter</p>
      <p className="font-alt text-3xl">Texte avec font-alt Geist</p>
      <p className="font-bis text-3xl">Texte avec font-bis montserrat</p>
    </>
  );
}

export default App;
