// #region Global Imports
import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import Particles from "react-particles-js";
// #endregion Global Imports

// #region Local Imports
import { ILanding } from "./Landing";
import { particlesConfig } from "./particles-config/particles-config";
import styles from "Landing.module.scss";
// #endregion Local Imports

export const Landing: React.FC<ILanding.IProps> = (_props) => {
    return (
        <div style={{ margin: 0, padding: 0 }} id="landing">
            <div
                style={{
                    minHeight: "100vh",
                    width: "100%",
                    background: "linear-gradient(#3e92cc, #B2E2F8)",
                }}
            >
                <Particles
                    className="particles"
                    // @ts-ignore
                    params={particlesConfig}
                    style={{ height: "100%" }}
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
                        variant="outlined"
                        style={{
                            marginTop: "10px",
                            color: "rgba(255,255,255,0.9)",
                            borderColor: "#fff",
                        }}
                        href="#about"
                    >
                        See more
                    </Button>
                </Container>
            </div>
        </div>
    );
};
