import * as React from "react";

import { LayoutProps } from "./Layout";

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return <div className="layout">{children}</div>;
};

export { Layout };
