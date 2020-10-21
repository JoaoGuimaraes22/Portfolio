import React from "react";
import { GoUp } from "./GoUp";

const Layout = (props: any) => {
    return (
        <>
            {props.children}
            <GoUp></GoUp>
        </>
    );
};

export default Layout;
