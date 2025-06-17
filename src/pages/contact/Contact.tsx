import SocialGlobal from '../../components/social/SocialGlobal/SocialGlobal';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center gap-4 px-4 sm:flex-row sm:items-start">
      <SocialGlobal />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-start justify-around gap-3 rounded-2xl border px-4 py-3 motion-reduce:transition-none sm:mx-auto md:max-w-6xl md:min-w-xl">
        <h2 className="transition-theme border-primary my-2 w-full border-b-2 pb-2 text-xl font-bold motion-reduce:transition-none">
          {language === 'en' ? 'Reach out' : 'Contactez-moi'}
        </h2>

        <p className="transition-theme text-primary max-w-[80ch] motion-reduce:transition-none">
          {language === 'en'
            ? 'Use the form below or contact me directly at '
            : 'Utilisez le formulaire ci-dessous ou contactez-moi directement sur '}{' '}
          <strong>abadie.thomas@gmail.com</strong>
        </p>

        <div className="flex w-full flex-col gap-8 py-4 md:w-xl lg:w-3xl">
          {/* Name */}
          <label htmlFor="Name" className="relative">
            <input
              type="text"
              id="Name"
              name="name"
              aria-label="Name"
              placeholder=""
              required
              className="peer border-primary transition-theme focus:ring-accent-primary-light dark:focus:ring-accent-primary-dark w-full rounded border px-2 py-2.5 focus:ring-2 focus:outline-none motion-reduce:transition-none lg:w-2/3"
            />
            <span className="text-primary bg-global-secondary transition-theme absolute inset-y-0 start-3 h-fit -translate-y-4 px-1 font-medium transition-transform peer-placeholder-shown:translate-y-2.5 peer-focus:-translate-y-4 motion-reduce:transition-none">
              Name *
            </span>
          </label>

          {/* Email */}
          <label htmlFor="Email" className="relative">
            <input
              type="email"
              id="Email"
              name="email"
              aria-label="Email"
              placeholder=""
              required
              className="peer border-primary transition-theme focus:ring-accent-primary-light dark:focus:ring-accent-primary-dark w-full rounded border px-2 py-2.5 focus:ring-2 focus:outline-none motion-reduce:transition-none lg:w-2/3"
            />
            <span className="text-primary bg-global-secondary transition-theme absolute inset-y-0 start-3 h-fit -translate-y-4 px-1 font-medium transition-transform peer-placeholder-shown:translate-y-2.5 peer-focus:-translate-y-4 motion-reduce:transition-none">
              Email *
            </span>
          </label>

          {/* Message */}
          <label htmlFor="Message" className="relative">
            <textarea
              id="Message"
              name="message"
              aria-label="Message"
              placeholder=""
              required
              className="peer border-primary transition-theme focus:ring-accent-primary-light dark:focus:ring-accent-primary-dark w-full rounded border px-2 py-2.5 focus:ring-2 focus:outline-none motion-reduce:transition-none"
              rows={7}
            />
            <span className="text-primary bg-global-secondary transition-theme absolute inset-y-0 start-3 h-fit -translate-y-4 px-1 font-medium transition-transform peer-placeholder-shown:translate-y-2.5 peer-focus:-translate-y-4 motion-reduce:transition-none">
              Message *
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            data-cursor="hover"
            className="text-primary bg-global-secondary border-primary hover:bg-btn-primary-hover-light dark:hover:bg-btn-primary-hover-dark transition-theme ml-auto block w-30 rounded-lg border py-2 text-lg font-semibold"
          >
            {language === 'en' ? 'Send' : 'Envoyer'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
