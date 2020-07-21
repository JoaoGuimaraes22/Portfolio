---
to: <%=path%>/<%=name%>/<%=name%>.stories.tsx
---

// #region Global Imports
import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// #endregion Global Imports

// #region Local Imports
import { <%=name%> } from "./index";
// #endregion Local Imports

export default {
    component: <%=name%>,
    title: "<%=name%>",
};

export const Default = () => (
);
