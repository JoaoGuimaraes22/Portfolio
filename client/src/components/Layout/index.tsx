import React from "react";
import { Footer } from "./Footer";
import { GoUp } from "./GoUp";

const Layout: React.FC = (props: any) => {
    return (
        <>
            {props.children}
            <GoUp></GoUp>
            <Footer></Footer>
        </>
    );
};

export default Layout;
