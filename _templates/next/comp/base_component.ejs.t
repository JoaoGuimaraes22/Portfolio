---
to: ./client/src/components/<%=path%>/<%=name%>/index.tsx
---

// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { I<%= name %> } from "./<%= name %>";
// #endregion Local Imports

export const <%= name %>: React.FC<I<%= name %>.IProps> = _props => {
    return <></>;
};
