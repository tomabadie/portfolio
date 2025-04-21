/* import "./About.css" */
import type { AboutProps } from '../data/aboutType';

const About = ({ aboutDataList }: AboutProps) => {
  return (
    <section className="bg-amber-300">
      <h2>About me</h2>
      {aboutDataList.map((item) => (
        <section key={item.id}>
          <h3>{item.title}</h3>
          {item.content.map((paragraph) => (
            <p key={paragraph.id} className="font-primary">
              {paragraph.content} <br />
            </p>
          ))}
        </section>
      ))}
    </section>
  );
};

export default About;
