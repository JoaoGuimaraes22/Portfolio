// #region Global Imports
import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { MdWeb } from "react-icons/md";
// #endregion Global Imports

// #region Local Imports
import { ISkills } from "./Skills";
import styles from "./Skills.module.scss";

// #endregion Local Imports

export const Skills: React.FunctionComponent<ISkills.IProps> = (_props) => {
    return (
        <>
            <div id="skills" className={styles.skills}>
                <Container>
                    <Typography
                        variant="h1"
                        style={{ color: "#fafafa" }}
                        align="center"
                    >
                        Skills
                    </Typography>
                </Container>
                <Container>
                    <div className={styles.boxes}>
                        <Container className={styles.box}>
                            <MdWeb className={styles.box_icon} />
                            <Typography
                                variant="h4"
                                className={styles.box_title}
                            >
                                Frontend
                            </Typography>
                            <div className={styles.box_textAll}>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    Adobe XD
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    CSS | SASS
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    JavaScript
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    React | Redux
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    NextJS
                                </Typography>
                            </div>
                        </Container>
                        <Container className={styles.box}>
                            <MdWeb className={styles.box_icon} />
                            <Typography
                                variant="h4"
                                className={styles.box_title}
                            >
                                Frontend
                            </Typography>
                            <div className={styles.box_textAll}>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    Adobe XD
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    CSS | SASS
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    JavaScript
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    React | Redux
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    NextJS
                                </Typography>
                            </div>
                        </Container>
                        <Container className={styles.box}>
                            <MdWeb className={styles.box_icon} />
                            <Typography
                                variant="h4"
                                className={styles.box_title}
                            >
                                Frontend
                            </Typography>
                            <div className={styles.box_textAll}>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    Adobe XD
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    CSS | SASS
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    JavaScript
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    React | Redux
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    NextJS
                                </Typography>
                            </div>
                        </Container>
                        <Container className={styles.box}>
                            <MdWeb className={styles.box_icon} />
                            <Typography
                                variant="h4"
                                className={styles.box_title}
                            >
                                Frontend
                            </Typography>
                            <div className={styles.box_textAll}>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    Adobe XD
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    CSS | SASS
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    JavaScript
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    React | Redux
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.box_text}
                                >
                                    NextJS
                                </Typography>
                            </div>
                        </Container>
                    </div>
                    <Button
                        variant="contained"
                        href="#projects"
                        className={styles.skills_button}
                    >
                        Continue
                    </Button>
                </Container>
            </div>
        </>
    );
};
