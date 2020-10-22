// #region Global Imports
import React from "react";
import { Section } from "../../Loose/Section";
import { Title } from "../../Loose/Title";
import { Triangle } from "../../Loose/Triangle";
// #endregion Global Imports

// #region Local Imports
import { IExperience } from "./Experience";
import styles from "./Experience.module.scss";
// #endregion Local Imports

export const Experience: React.FunctionComponent<IExperience.IProps> = (
    _props
) => (
    <>
        <Section id="experience" backgroundColor="#000">
            <Triangle backgroundColor="#fff"></Triangle>
            <Title text="Experience" color="#fff"></Title>
        </Section>
    </>
);
