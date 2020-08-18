import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Projects = () => {
  return (
    <section className="cards section" id="projects">
      <div className="content">
        <Fade>
          <h1 className="subtitle heading">Projects</h1>
          <p className="description">Hover over a project to see more.</p>
        </Fade>
        <Zoom>
          <a className="card" href="#!">
            <div
              className="front"
              style={{ backgroundImage: "url(/media/imgs/logo.jpg)" }}
            >
              <h2 className="proj-title">Projecto 1</h2>
              <ul className="proj-list">
                <li className="proj-list-item">React</li>
                <li className="proj-list-item">NodeJS</li>
                <li className="proj-list-item">Express</li>
                <li className="proj-list-item">MongoDB</li>
              </ul>
            </div>
            <div className="back">
              <div>
                <p>
                  Augmented Reality Android/IoS app w/ Dynamics 365 connector.
                </p>
                <p>
                  Recognizes objects using your phone camera and detects damaged
                  objects.
                </p>
                <button className="button">Click Here</button>
              </div>
            </div>
          </a>
        </Zoom>
        <Zoom>
          <a className="card" href="#!">
            <div
              className="front"
              style={{ backgroundImage: "url(/media/imgs/app.jpeg)" }}
            >
              <p>Projecto 2</p>
            </div>
            <div className="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className="button">Click Here</button>
              </div>
            </div>
          </a>
        </Zoom>
        <Zoom>
          <a className="card" href="#!">
            <div
              className="front"
              style={{ backgroundImage: "url(/media/imgs/test.jpg)" }}
            >
              <p>Projecto 3</p>
            </div>
            <div className="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className="button">Click Here</button>
              </div>
            </div>
          </a>
        </Zoom>
        <Zoom>
          <a className="card" href="#!">
            <div
              className="front"
              style={{ backgroundImage: "url(/media/imgs/app.jpeg)" }}
            >
              <p>Projecto 4</p>
            </div>
            <div className="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className="button">Click Here</button>
              </div>
            </div>
          </a>
        </Zoom>
        <Zoom>
          <a className="card" href="#!">
            <div
              className="front"
              style={{ backgroundImage: "url(/media/imgs/predios.jpg)" }}
            >
              <p>Projecto 5</p>
            </div>
            <div className="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className="button">Click Here</button>
              </div>
            </div>
          </a>
        </Zoom>
        <Zoom>
          <a className="card" href="#!">
            <div
              className="front"
              style={{ backgroundImage: "url(/media/imgs/tech.jpeg)" }}
            >
              <p>Projecto 6</p>
            </div>
            <div className="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button className="button">Click Here</button>
              </div>
            </div>
          </a>
        </Zoom>
      </div>
    </section>
  );
};

export default Projects;
