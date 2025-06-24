import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import SocialAbout from '../../components/social/SocialAbout';
import { useLanguage } from '../../contexts/LanguageContext';

const NotFound = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [countdown, setCountDown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((sec) => sec - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/about');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center gap-4 px-2 sm:flex-row sm:items-start sm:justify-around lg:gap-0 xl:justify-center xl:gap-20">
      <SocialAbout />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex w-full flex-col items-center justify-around gap-3 rounded-2xl border px-4 py-3 motion-reduce:transition-none md:w-lg lg:w-2xl">
        {language === 'en' && (
          <>
            <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold motion-reduce:transition-none">
              404- Lost your way ?
            </h2>
            <p>Don't worry, we'll get you back on track. </p>
            <p>Redirection in {countdown} sec.</p>
          </>
        )}
        {language === 'fr' && (
          <>
            <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold motion-reduce:transition-none">
              404 - Tu t'es perdu ?
            </h2>
            <p>Pas de panique, on va te ramener à bon port !</p>
            <p>Redirection automatique dans {countdown} sec.</p>
          </>
        )}
      </section>
    </div>
  );
};

export default NotFound;
