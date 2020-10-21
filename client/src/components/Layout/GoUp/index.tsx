// #region Global Imports
import React from "react";
import { FaArrowUp } from "react-icons/fa";
// #endregion Global Imports

// #region Local Imports
import { IGoUp } from "./GoUp";
import styles from "./GoUp.module.scss";
// #endregion Local Imports

export const GoUp: React.FunctionComponent<IGoUp.IProps> = (_props) => {
    return (
        <>
            <div>
                <a href="#landing" className={styles.go_up}>
                    <FaArrowUp className={styles.go_up_icon}></FaArrowUp>
                </a>
            </div>
        </>
    );
};
