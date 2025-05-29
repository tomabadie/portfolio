import SocialGLobal from '../../../components/social/SocialGlobal/SocialGLobal';

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-2 sm:flex-row sm:items-start sm:justify-around lg:gap-0 xl:justify-center xl:gap-20">
      <SocialGLobal />
      <section className="transition-theme bg-global-secondary border-primary text-primary flex flex-col items-center justify-around gap-3 rounded-2xl border py-3 md:w-lg lg:w-2xl">
        <h2 className="transition-theme my-2 text-center text-xl font-bold">CONTACT SECTION</h2>
        <article className="px-4 sm:px-8">
          <h3 className="text-l transition-theme my-2 font-bold">Article 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, esse, tempore iure
            est quas temporibus fugit eligendi maxime sapiente laboriosam incidunt error
            praesentium. Eaque consequatur aliquam in, ad quibusdam eos mollitia ullam enim eum
            recusandae incidunt? Debitis, quod animi voluptatibus quos porro veniam tempore rerum
            quidem perspiciatis explicabo libero aut.
          </p>
        </article>
        <article className="px-4 sm:px-8">
          <h3 className="text-l transition-theme my-2 font-bold">Article 2</h3>
          <p className="transition-theme text-primary max-w-[80ch]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus delectus itaque
            recusandae consequuntur distinctio voluptatibus sapiente. Non ut veritatis eligendi
            similique eveniet. Maiores praesentium cum, ipsa iure libero ea. Dolorum sit
            necessitatibus dignissimos cumque earum officia, id quae esse animi deserunt odit
            voluptatum ipsam modi ipsum quas voluptate nostrum! Quo!
          </p>
        </article>
        <article className="px-4 sm:px-8">
          <h3 className="text-l transition-theme my-2 font-bold">Article 3</h3>
          <p className="transition-theme text-primary max-w-[80ch]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ab voluptatum
            voluptatem ipsam error voluptas magnam distinctio perferendis debitis doloribus. Quas
            commodi reprehenderit tempora tenetur facilis quidem, voluptatibus ratione et blanditiis
            alias illo ullam soluta. Placeat, voluptatem sunt quibusdam tempora iusto repudiandae
            vero corporis illo expedita perferendis, deserunt dolor. Perferendis!
          </p>
        </article>
      </section>
    </div>
  );
};

export default Contact;
