import React from "react";
import { Footer } from "./Footer";
import { GoUp } from "./GoUp";
import { Navbar } from "./Navbar";

const Layout: React.FC = (props: any) => {
    return (
        <>
            <Navbar></Navbar>
            {props.children}
            <GoUp></GoUp>
            <Footer></Footer>
        </>
    );
};

export default Layout;
