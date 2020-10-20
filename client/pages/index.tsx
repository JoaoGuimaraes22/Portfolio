import { About } from "../src/components/Home/About";
import { Landing } from "../src/components/Home/Landing";
import { Projects } from "../src/components/Home/Projects";
import { Skills } from "../src/components/Home/Skills";

const IndexPage = () => (
    <>
        <div>
            <Landing></Landing>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    </>
);

export default IndexPage;
