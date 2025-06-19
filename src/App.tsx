import { Outlet } from 'react-router';

import Footer from './components/layouts/Footer/Footer';
import Header from './components/layouts/Header/Header';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="bg-global-primary transition-theme min-h-[calc(100dvh-61px-37px)] py-4 md:py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
