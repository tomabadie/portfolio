import { Outlet } from 'react-router';

import Header from '../shared/components/Header/Header';
import Social from '../shared/components/Social/components/Social';
import Footer from '../shared/components/Footer/Footer';

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
    </>
  );
}

export default App;
