// #region Global Imports
import { Button, Typography } from "@material-ui/core";
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IProjects } from "./Projects";
import styles from "./Projects.module.scss";
import { Title } from "../../Loose/Title/index";
import { Section } from "../../Loose/Section";
// #endregion Local Imports

export const Projects: React.FC<IProjects.IProps> = (_props) => (
    <>
        <Section id="projects" backgroundColor="#fffaff">
            <Title text="Projects" color="#000"></Title>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <div className={styles.flip_card}>
                        <div className={styles.flip_card_inner}>
                            <div className={styles.flip_card_front}>
                                <img
                                    src="/media/imgs/predios.jpg"
                                    alt="Avatar"
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                    }}
                                    className={styles.card_img}
                                ></img>
                                <Typography
                                    variant="h3"
                                    className={styles.project_title}
                                >
                                    Project 1
                                </Typography>
                            </div>
                            <div className={styles.flip_card_back}>
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flip_card}>
                        <div className={styles.flip_card_inner}>
                            <div className={styles.flip_card_front}>
                                <img
                                    src="/media/imgs/tech.jpeg"
                                    alt="Avatar"
                                    style={{ width: "300px", height: "300px" }}
                                    className={styles.card_img}
                                ></img>
                            </div>
                            <div className={styles.flip_card_back}>
                                <Typography variant="h5">John Doe</Typography>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flip_card}>
                        <div className={styles.flip_card_inner}>
                            <div className={styles.flip_card_front}>
                                <img
                                    src="/media/imgs/logo.jpg"
                                    alt="Avatar"
                                    style={{ width: "300px", height: "300px" }}
                                    className={styles.card_img}
                                ></img>
                            </div>
                            <div className={styles.flip_card_back}>
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flip_card}>
                        <div className={styles.flip_card_inner}>
                            <div className={styles.flip_card_front}>
                                <img
                                    src="/media/imgs/app.jpeg"
                                    alt="Avatar"
                                    style={{ width: "300px", height: "300px" }}
                                    className={styles.card_img}
                                ></img>
                            </div>
                            <div className={styles.flip_card_back}>
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flip_card}>
                        <div className={styles.flip_card_inner}>
                            <div className={styles.flip_card_front}>
                                <img
                                    src="/media/imgs/test.jpg"
                                    alt="Avatar"
                                    style={{ width: "300px", height: "300px" }}
                                    className={styles.card_img}
                                ></img>
                            </div>
                            <div className={styles.flip_card_back}>
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flip_card}>
                        <div className={styles.flip_card_inner}>
                            <div className={styles.flip_card_front}>
                                <img
                                    src="/media/imgs/code.jpg"
                                    alt="Avatar"
                                    style={{ width: "300px", height: "300px" }}
                                    className={styles.card_img}
                                ></img>
                            </div>
                            <div className={styles.flip_card_back}>
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    variant="outlined"
                    className={styles.projects_button}
                    href="#experience"
                >
                    Continue
                </Button>
            </div>
        </Section>
    </>
);
