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
            backgroundColor="linear-gradient(#000, #4b87a3,#53baea )"
            height="200vh"
        >
            <Title text="Experience" color="#fff"></Title>
            <Flexer allCenter={true} direction="column"></Flexer>
        </Section>
    </>
);
