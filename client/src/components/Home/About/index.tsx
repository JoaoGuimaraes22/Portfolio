// #region Global Imports
import { Typography, Button } from "@material-ui/core";
import React from "react";
import Image from "next/image";
// #endregion Global Imports

// #region Local Imports
import { IAbout } from "./About";
import styles from "./About.module.scss";
import Flexer from "../../Loose/Flexer";
import { Section } from "../../Loose/Section";
import { Title } from "../../Loose/Title";
// #endregion Local Imports

export const About: React.FC<IAbout.IProps> = (_props) => {
    return (
        <>
            <Section backgroundColor="#fffaff" id="about">
                <Title text="About" color="#000"></Title>
                <Flexer allCenter={true} direction="column">
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <div className={styles.txt_container}>
                                <Typography
                                    variant="body1"
                                    className={styles.txt_comp}
                                >
                                    Hello! I'm João Guimarães, a 19 years old
                                    fullstack developer who loves building
                                    things that live on the web.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.txt_comp}
                                >
                                    I've always loved tech and sports. My
                                    greatest passions are technology, volleyball
                                    and personal finance.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.txt_comp}
                                >
                                    My focus is on the development of modern and
                                    efficient websites, web apps or services to
                                    provide users or companies with fully
                                    responsive, pixel-perfect interfaces and
                                    exceptional efficient interaction.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    style={{
                                        margin: "1rem 0",
                                    }}
                                    className={styles.about_button}
                                    href="#skills"
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                        {/*Look into next/image for responsiveness layout*/}
                        <img
                            src="/media/imgs/Me.jpg"
                            className={styles.about_img}
                        ></img>
                    </div>
                </Flexer>
            </Section>
        </>
    );
};
