import { About } from "../src/components/Home/About";
import { Contact } from "../src/components/Home/Contact";
import { Experience } from "../src/components/Home/Experience";
import { Landing } from "../src/components/Home/Landing";
import { Projects } from "../src/components/Home/Projects";
import { Skills } from "../src/components/Home/Skills";
import Layout from "../src/components/Layout";

const IndexPage = () => (
    <>
        <div>
            <Layout>
                <Landing></Landing>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Experience></Experience>
                <Contact></Contact>
            </Layout>
        </div>
    </>
);

export default IndexPage;
