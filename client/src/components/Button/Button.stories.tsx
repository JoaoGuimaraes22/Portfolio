// #region Global Imports
import React from "react";
import { action } from "@storybook/addon-actions";
// #endregion Global Imports

// #region Local Imports
import { Button } from "./index";
// #endregion Local Imports

export default {
    component: Button,
    title: "Button",
};

export const Default = () => (
    <Button onClick={action("button-click")} text="Hello Story World"></Button>
);
