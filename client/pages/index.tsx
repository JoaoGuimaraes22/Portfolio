import { Button } from "../src/components/Button";
import { MatUI } from "../src/components/MatUI";

const IndexPage = () => (
    <>
        <div>
            <h1>Hello World</h1>
        </div>
        <Button
            onClick={(e) => {
                console.log("Hello World");
            }}
            text={`${process.env.NEXT_PUBLIC_TEXT}`}
        ></Button>
        <MatUI></MatUI>
    </>
);

export default IndexPage;
