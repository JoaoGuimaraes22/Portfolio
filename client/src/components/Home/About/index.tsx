// #region Global Imports
import { Typography, Button } from "@material-ui/core";
import React from "react";
import Flexer from "../../Loose/Flexer";
import { Section } from "../../Loose/Section";
import { Title } from "../../Loose/Title";
// #endregion Global Imports

// #region Local Imports
import { IAbout } from "./About";
import styles from "./About.module.scss";
// #endregion Local Imports

export const About: React.FC<IAbout.IProps> = (_props) => {
    return (
        <>
            <Section backgroundColor="#fff" id="about">
                <Title text="About" color="#000"></Title>
                <Flexer allCenter={true} direction="column">
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <div style={{ padding: "0 10rem 0 0" }}>
                                <Typography
                                    variant="body1"
                                    style={{
                                        paddingBottom: "0.7rem",
                                        borderBottom: "1px solid #53baea",
                                    }}
                                >
                                    Hello! I'm João Guimarães, a 19 years old
                                    fullstack developer who loves building
                                    things that live on the web.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{
                                        padding: "0.7rem 0",
                                        borderBottom: "1px solid #53baea",
                                    }}
                                >
                                    I've always loved tech and sports. My
                                    greatest passions are technology, volleyball
                                    and personal finance.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    style={{
                                        padding: "0.7rem 0",
                                        borderBottom: "1px solid #53baea",
                                    }}
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
                                    href="#skills"
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                        <img
                            src="/media/imgs/Me.jpg"
                            style={{
                                width: "auto",
                                borderRadius: "3%",
                                height: "350px",
                            }}
                        ></img>
                    </div>
                </Flexer>
            </Section>
        </>
    );
};
