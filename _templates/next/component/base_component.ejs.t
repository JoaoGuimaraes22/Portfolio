---
to: <%=path%>/<%=name%>/index.tsx
---

// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { I<%= name %> } from "./<%= name %>";
// #endregion Local Imports

export const <%= name %>: React.FunctionComponent<I<%= name %>.IProps> = props => {
    return "Your Component";
};
