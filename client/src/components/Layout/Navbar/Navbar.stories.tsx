// #region Global Imports
import React from "react";
import { action } from "@storybook/addon-actions";
// #endregion Global Imports

// #region Local Imports
import { Navbar } from "./index";
// #endregion Local Imports

export default {
    component: Navbar,
    title: "Navbar",
};

export const Default = () => (
    <>
        <Navbar></Navbar>
    </>
);
