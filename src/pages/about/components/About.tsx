/* import "./About.css" */
import type { AboutProps } from '../data/aboutType';

const About = ({ aboutDataList }: AboutProps) => {
  return (
    <section className="bg-global-secondary border-primary text-primary mx-auto my-4 w-1/2 rounded-2xl border">
      <h2 className="my-2 text-center text-xl font-bold">About me</h2>
      {aboutDataList.map((item) => (
        <section key={item.id} className="px-8">
          <h3 className="text-l my-2 font-bold">{item.title}</h3>
          {item.content.map((paragraph) => (
            <p key={paragraph.id} className="text-primary max-w-[80ch]">
              {paragraph.content} <br />
            </p>
          ))}
        </section>
      ))}
    </section>
  );
};

export default About;
