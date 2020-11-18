---
to: ./client/src/components/<%=path%>/<%=name%>/index.tsx
---
// Imports
import React from "react";
import { I<%= name %> } from "./<%= name %>";

export const <%= name %>: React.FC<I<%= name %>.IProps> = _props => {
    return <></>;
};
