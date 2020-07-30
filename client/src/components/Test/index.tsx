// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { ITest } from "./Test";
// #endregion Local Imports

export const Test: React.FunctionComponent<ITest.IProps> = (props) => {
    return <h1>{props.text}</h1>;
};
