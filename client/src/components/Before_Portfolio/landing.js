import Particles from "react-particles-js";
import { particlesConfig } from "../config-public/particles-config";
import Zoom from "react-reveal/Zoom";

const Landing = () => {
  return (
    <div id="landing" className="landing section">
      <Particles className="particles" params={particlesConfig} />
      <div className="landing-main">
        <Zoom>
          <h1 className="landing-main-title title">João Guimarães</h1>
          <h3 className="landing-main-subtitle subtitle">
            Full Stack Developer
          </h3>
          <p className="landing-main-subtext filler">
            If it's hard to say, just call me John
          </p>
          <a className="landing-main-button btn-light" href="#projects">
            See projects
          </a>
        </Zoom>
      </div>
    </div>
  );
};

export default Landing;
