// #region Global Imports
import { Typography } from "@material-ui/core";
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { INavbar } from "./Navbar";
import styles from "./Navbar.module.scss";
// #endregion Local Imports

export const Navbar: React.FC<INavbar.IProps> = (_props) => {
    return (
        <>
            <nav className={styles.nav} id="nav">
                <input type="checkbox" id={styles.nav_check}></input>
                <div className={styles.nav_header}>
                    <div className={styles.nav_title}>
                        <a href="/" className={styles.nav_title_link}>
                            <Typography variant="h5">JoG</Typography>
                        </a>
                    </div>
                </div>
                <div className={styles.nav_btn}>
                    <label htmlFor={styles.nav_check}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className={styles.nav_links}>
                    <a href="#about">
                        <Typography variant="button">About</Typography>
                    </a>
                    <a href="#skills">
                        <Typography variant="button">Skills</Typography>
                    </a>
                    <a href="#projects">
                        <Typography variant="button">Projects</Typography>
                    </a>
                    <a href="#experience">
                        <Typography variant="button">Experience</Typography>
                    </a>
                    <a href="#contacts">
                        <Typography variant="button">Contact</Typography>
                    </a>
                    <a href="/media/pdf/dummy.pdf" target="_blank">
                        <Typography variant="button">Resume</Typography>
                    </a>
                </div>
            </nav>
        </>
    );
};
