// #region Global Imports
import React from "react";
import { action } from "@storybook/addon-actions";
// #endregion Global Imports

// #region Local Imports
import { Blog } from "./index";
// #endregion Local Imports

export default {
    component: Blog,
    title: "Blog",
};

export const Default = () => (
    <>
        <Blog></Blog>
    </>
);
