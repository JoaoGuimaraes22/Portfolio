// #region Global Imports
import { Container, Typography } from "@material-ui/core";
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IProjects } from "./Projects";
import styles from "./Projects.module.scss";
import { Title } from "../../Loose/Title/index";
// #endregion Local Imports

export const Projects: React.FunctionComponent<IProjects.IProps> = (_props) => (
    <>
        <div id="projects">
            <Title text="Projects" color="#000"></Title>
        </div>
    </>
);
