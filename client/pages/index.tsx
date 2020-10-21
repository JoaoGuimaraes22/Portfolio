import { About } from "../src/components/Home/About";
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
            </Layout>
        </div>
    </>
);

export default IndexPage;
