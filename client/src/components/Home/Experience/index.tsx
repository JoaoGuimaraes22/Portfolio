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
        <Section id="experience" backgroundColor="#000" height="250vh">
            <Title text="Experience" color="#fff"></Title>
            <Flexer allCenter={true} direction="column"></Flexer>
            <ul className={styles.timeline}>
                <li className={`${styles.year} ${styles.first}`}>
                    <Typography variant="h3">2021</Typography>
                </li>
                <li className={`${styles.event} ${styles.offset_first}`}>
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
                        Timeline.css is dynamic responsive and optimized to
                        demonstrate events in your life in a simple and clear
                        way
                    </Typography>
                    <img src="/media/imgs/unip.png" alt="" />
                </li>
                <li className={styles.event}>
                    <Typography variant="body1">
                        Timeline.css is dynamic responsive and optimized to
                        demonstrate events in your life in a simple and clear
                        way
                    </Typography>
                </li>
                <li className={styles.year}>
                    <Typography variant="h3">2019</Typography>
                </li>
                <li className={`${styles.event} ${styles.offset_first}`}>
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
                <li className={styles.year}>
                    <Typography variant="h3">2016</Typography>
                </li>
                <li className={`${styles.event} ${styles.offset_first}`}>
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
            </ul>
        </Section>
    </>
);
