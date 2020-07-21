---
to: <%=path%>/<%=name%>/index.spec.tsx
---

// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render, fireEvent } from "@Test/utils";
import { <%=name%> } from "./index";
// #endregion Local Imports

describe("Basic Components", () => {
    describe("<%=name%>", () => {
    });
});
