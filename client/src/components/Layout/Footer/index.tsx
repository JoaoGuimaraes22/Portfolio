// #region Global Imports
import { Typography } from "@material-ui/core";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Flexer from "../../Loose/Flexer";
// #endregion Global Imports

// #region Local Imports
import { IFooter } from "./Footer";
import styles from "./Footer.module.scss";
// #endregion Local Imports

export const Footer: React.FC<IFooter.IProps> = (_props) => {
    return (
        <>
            <div id="footer" className={styles.footer}>
                <Flexer allCenter={true} direction="column">
                    <Typography
                        className={styles.footer_text}
                        style={{ fontSize: "1.3rem" }}
                    >
                        Made by JOÃO GUIMARÃES{" "}
                        <span style={{ color: "#d8315b" }}>&#169;</span> 2020
                    </Typography>
                    <div className={styles.footer_icons}>
                        <a href="#" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="#" target="_blank">
                            <FaLinkedin />
                        </a>
                        <a href="#" target="_blank">
                            <FaInstagram />
                        </a>
                        <a href="#" target="_blank">
                            <FaTwitter />
                        </a>
                    </div>
                </Flexer>
            </div>
        </>
    );
};
