// #region Global Imports
import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { MdWeb } from "react-icons/md";
import { GoServer } from "react-icons/go";
import { FiDatabase, FiCloud } from "react-icons/fi";
// #endregion Global Imports

// #region Local Imports
import { ISkills } from "./Skills";
import styles from "./Skills.module.scss";
import { Title } from "../../Loose/Title";
import { Section } from "../../Loose/Section";

// #endregion Local Imports

export const Skills: React.FunctionComponent<ISkills.IProps> = (_props) => {
    return (
        <>
            <Section id="skills" backgroundColor="#000">
                <Title text="Skills" color="#fafafa"></Title>
                <Container className={styles.content}>
                    <div className={styles.boxes}>
                        <Container className={styles.box}>
                            <MdWeb className={styles.box_icon} />
                            <Typography
                                variant="h5"
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
                            <GoServer className={styles.box_icon} />
                            <Typography
                                variant="h5"
                                className={styles.box_title}
                            >
                                Backend
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
                            <FiDatabase className={styles.box_icon} />
                            <Typography
                                variant="h5"
                                className={styles.box_title}
                            >
                                Database
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
                            <FiCloud className={styles.box_icon} />
                            <Typography
                                variant="h5"
                                className={styles.box_title}
                            >
                                DevOps
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
            </Section>
        </>
    );
};
