// #region Global Imports
import { Container, Typography, Button } from "@material-ui/core";
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IAbout } from "./About";
// #endregion Local Imports

export const About: React.FunctionComponent<IAbout.IProps> = (_props) => {
    return (
        <>
            <div
                className="about"
                id="about"
                style={{
                    height: "900vh",
                    paddingTop: "10vh",
                    background: "#f5f5f5",
                }}
            >
                <Container>
                    <Typography variant="h1" style={{ textAlign: "center" }}>
                        About
                    </Typography>
                    Grid
                </Container>
            </div>
        </>
    );
};
