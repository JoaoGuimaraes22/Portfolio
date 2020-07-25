import Link from "next/link";
import { Button } from "../src/components/Button";

const IndexPage = () => (
  <>
    <div>
      <h1>Hello World</h1>
    </div>
    <Button
      onClick={(e) => {
        console.log("Hello World");
      }}
      text="Hello World"
    ></Button>
  </>
);

export default IndexPage;
