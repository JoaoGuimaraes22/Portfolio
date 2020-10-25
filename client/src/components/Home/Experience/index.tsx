// #region Global Imports
import { Typography } from "@material-ui/core";
import React from "react";
import Flexer from "../../Loose/Flexer";
import { Section } from "../../Loose/Section";
import { Title } from "../../Loose/Title";
// #endregion Global Imports

// #region Local Imports
import { IExperience } from "./Experience";
import styles from "./Experience.module.scss";
// #endregion Local Imports

export const Experience: React.FC<IExperience.IProps> = (_props) => (
    <>
        <Section
            id="experience"
            backgroundColor="linear-gradient(#3e92cc, #B2E2F8)"
            height="250vh"
        >
            <Title text="Experience" color="#fff" lineColor="#d8315b"></Title>
            <Flexer allCenter={true} direction="column"></Flexer>
            <ul className={styles.timeline}>
                {/* 2021 */}
                <li className={`${styles.year} ${styles.first}`}>
                    <Typography variant="h3">2021</Typography>
                </li>
                <li className={`${styles.event} ${styles.offset_first}`}>
                    <Typography variant="body1">
                        Working on Unipartner...
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="body1">
                        Timeline.css is dynamic responsive and optimized to
                        demonstrate events in your life in a simple and clear
                        way
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="body1">
                        Timeline.css is dynamic responsive and optimized to
                        demonstrate events in your life in a simple and clear
                        way
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="body1">
                        Timeline.css is dynamic responsive and optimized to
                        demonstrate events in your life in a simple and clear
                        way
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="body1">
                        Started working as a developer at Unipartner
                    </Typography>
                </li>

                {/* 2019 */}
                <li className={styles.year}>
                    <Typography variant="h3">2019</Typography>
                </li>
                <li className={`${styles.event} ${styles.offset_first}`}>
                    <Typography variant="caption" className={styles.caption}>
                        October 2019
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        Started working for Unipartner IT Services
                        <img src="/media/imgs/unip.png" alt="" />
                    </Typography>
                </li>
                <li className={`${styles.event}`}>
                    <Typography variant="caption" className={styles.caption}>
                        August 2019
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        Having finished highschool, started preparing by
                        learning how to program in an enterprise oriented manner
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        January 2016
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        Began learning the basic building blocks of the web,
                        HTML, CSS and Javascript
                    </Typography>
                </li>

                {/* 2016 */}
                <li className={styles.year}>
                    <Typography variant="h3">2016</Typography>
                </li>
                <li className={`${styles.event} ${styles.offset_first}`}>
                    <Typography variant="caption" className={styles.caption}>
                        December 2015
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        Building simple programs
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        September 2015
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        Started to mess around with different programming
                        languages and technologies
                    </Typography>
                </li>
            </ul>
        </Section>
    </>
);
