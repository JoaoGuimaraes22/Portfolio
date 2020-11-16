// #region Global Imports
import { Button, Typography } from "@material-ui/core";
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
            backgroundColor="linear-gradient(#35648e, #B2E2F8)"
            padingBottom="10vh"
        >
            <Title text="Experience" color="#fff" lineColor="#d8315b"></Title>
            <Flexer allCenter={true} direction="column"></Flexer>
            <ul className={styles.timeline}>
                {/* 2021 */}
                <li className={`${styles.year} ${styles.first}`}>
                    <Typography variant="h3">2021</Typography>
                </li>
                <li className={`${styles.event} ${styles.offset_first}`}>
                    <Typography variant="caption" className={styles.caption}>
                        September 2020 - Present
                    </Typography>
                    <Typography variant="body1">
                        - Started my first year studying in a computer
                        engineering Bachelor's Degree in ISCTE - Lisbon
                        University Institute
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        February 2020 - Present
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Entered the "App Modernization project for Crédito
                        Agrícola", where I am currently.
                    </Typography>
                    <Typography variant="body1" className={styles.txt}>
                        - Dealt with the containerization and orchestration of
                        their applications, developed new services with recent
                        technologies, built MLOps pipelines for their ML
                        processes and applications and developed chatbots for
                        internal company use.
                    </Typography>
                    <Typography variant="body1" className={styles.txt}>
                        - Used Azure, Docker, Kubernetes, Python, SQL Server,
                        Power Platform, .NET and ASP.NET Core, ML Workspace,
                        Azure DevOps (Pipelines), React, and more
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        January 2020 - February 2020
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Was the main developer on an Augmented Reality hybrid
                        mobile application for auditing, for showcase in the
                        event Microsoft Building the Future
                    </Typography>
                    <Typography variant="body1" className={styles.txt}>
                        - Used the Unity Engine, C#, AR Foundation, Dynamics365,
                        Azure CosmosDB
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        October 2019 - January 2020
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Developed backend services to handle language
                        understanding and message intent detection for a chatbot
                        used by a financial services company
                    </Typography>
                    <Typography variant="body1" className={styles.txt}>
                        - Used .NET CORE, Azure SQL Server, Microsoft's LUIS and
                        QNA Maker
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        October 2019 - Present
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Integrated in a team called Digital Lab focused on
                        innovation
                    </Typography>
                </li>

                {/* 2019 */}
                <li className={styles.year}>
                    <Typography variant="h3">2019</Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        October 2019
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Started working as a developer for Unipartner IT
                        Services
                        <img src="/media/imgs/unip.png" alt="" />
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        August 2019
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Having finished highschool, started learning object
                        oriented programming
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        June 2016
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Began learning Python and many web development
                        technologies
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        January 2016
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Began learning the basic building blocks of the web,
                        HTML, CSS and Javascript
                    </Typography>
                </li>

                {/* 2016 */}
                <li className={styles.year}>
                    <Typography variant="h3">2016</Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        December 2015
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Started building simple programs
                    </Typography>
                </li>
                <li className={styles.event}>
                    <Typography variant="caption" className={styles.caption}>
                        September 2015
                    </Typography>
                    <br />
                    <Typography variant="body1" className={styles.txt}>
                        - Started to mess around with different programming
                        languages and technologies
                    </Typography>
                </li>
            </ul>
            <Button
                variant="outlined"
                href="#contacts"
                style={{ color: "#fff" }}
            >
                Continue
            </Button>
        </Section>
    </>
);
