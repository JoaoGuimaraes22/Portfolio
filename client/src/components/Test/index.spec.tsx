// #region Global Imports
import * as React from "react";
import { render } from "@testing-library/react";
// #endregion Global Imports

// #region Local Imports
import { Test } from "./index";
// #endregion Local Imports

describe("Basic Components", () => {
    describe("Test", () => {
        it("should match snapshot", () => {
            const { container } = render(<Test text="Hello World"></Test>);

            expect(container).toMatchSnapshot();
        });
    });
});
