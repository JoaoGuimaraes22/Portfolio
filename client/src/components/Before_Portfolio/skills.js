import { MdWeb } from "react-icons/md";
import { GoServer } from "react-icons/go";
import { FiDatabase, FiCloud } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills-content content">
        <Fade>
          <h1 className="skills-content-title subtitle">My Skills</h1>
          <p className="skills-content-description description">
            See what I can do
          </p>
        </Fade>
        <Zoom>
          <div className="skills-boxes">
            <div className="skills-box skills-box-frontend">
              <MdWeb className="skills-box-img" />
              <h2 className="skills-box-title small-title">Frontend</h2>
              <ul className="skills-box-list">
                <li className="skills-box-list-skill filler">AdobeXD</li>
                <li className="skills-box-list-skill filler">CSS3 | SASS</li>
                <li className="skills-box-list-skill filler">JavaScript</li>
                <li className="skills-box-list-skill filler">React | Redux</li>
                <li className="skills-box-list-skill skills-box-list-skill-last  filler">
                  NextJS
                </li>
              </ul>
            </div>
            <div className="skills-box skills-box-backend">
              <GoServer className="skills-box-img" />
              <h2 className="skills-box-title small-title">Backend</h2>
              <ul className="skills-box-list">
                <li className="skills-box-list-skill filler">C#</li>
                <li className="skills-box-list-skill filler">ASP.NET</li>
                <li className="skills-box-list-skill filler">
                  NodeJS | Express
                </li>
                <li className="skills-box-list-skill filler">
                  NLP | NLU | Bots
                </li>
                <li className="skills-box-list-skill skills-box-list-skill-last filler">
                  Augmented Reality{" "}
                </li>
              </ul>
            </div>
            <div className="skills-box skills-box-database">
              <FiDatabase className="skills-box-img" />
              <h2 className="skills-box-title small-title">Database</h2>
              <ul className="skills-box-list">
                <li className="skills-box-list-skill filler">PostgreSQL</li>
                <li className="skills-box-list-skill filler">mySQL</li>
                <li className="skills-box-list-skill filler">MongoDB</li>
                <li className="skills-box-list-skill filler">Redis</li>
                <li className="skills-box-list-skill skills-box-list-skill-last filler">
                  Azure DBs
                </li>
              </ul>
            </div>
            <div className="skills-box skills-box-deployment">
              <FiCloud className="skills-box-img" />
              <h2 className="skills-box-title small-title">Deployment</h2>
              <ul className="skills-box-list">
                <li className="skills-box-list-skill filler">Azure</li>
                <li className="skills-box-list-skill filler">Git | Github</li>
                <li className="skills-box-list-skill filler">Linux | Ubuntu</li>
                <li className="skills-box-list-skill filler">Docker</li>
                <li className="skills-box-list-skill skills-box-list-skill-last filler">
                  Kubernetes w/ NGINX
                </li>
              </ul>
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Skills;
