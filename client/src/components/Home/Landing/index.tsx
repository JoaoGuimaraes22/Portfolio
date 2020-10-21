// #region Global Imports
import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import Particles from "react-particles-js";
// #endregion Global Imports

// #region Local Imports
import { ILanding } from "./Landing";
import { particlesConfig } from "./particles-config/particles-config";
// #endregion Local Imports

export const Landing: React.FunctionComponent<ILanding.IProps> = (_props) => {
    return (
        <div style={{ margin: 0, padding: 0 }} id="landing">
            <div
                style={{
                    height: "100vh",
                    width: "100%",
                    background: "linear-gradient(#0499de, #B2E2F8)",
                }}
            >
                <Particles
                    className="particles"
                    // @ts-ignore
                    params={particlesConfig}
                    style={{ height: "100vh" }}
                />
                <Container
                    style={{
                        position: "absolute",
                        top: "45%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h1" style={{ color: "#fff" }}>
                        JOÃO GUIMARÃES
                    </Typography>

                    <Typography
                        variant="h2"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                        FULL STACK DEVELOPER
                    </Typography>
                    <Typography
                        variant="h6"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                        If it's hard to say, just call me John
                    </Typography>

                    <Button
                        variant="contained"
                        style={{ marginTop: "10px" }}
                        href="#about"
                    >
                        See more
                    </Button>
                </Container>
            </div>
        </div>
    );
};
