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
                    height: "100vh",
                    paddingTop: "10vh",
                    background: "#fff",
                }}
            >
                <Container>
                    <Typography variant="h1" style={{ textAlign: "center" }}>
                        About
                    </Typography>
                    <Container
                        className=""
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "3rem",
                        }}
                    >
                        <div style={{ padding: "0 10rem 0 0" }}>
                            <Typography
                                variant="body1"
                                style={{
                                    paddingBottom: "0.7rem",
                                    borderBottom: "1px solid #B2E2F8",
                                }}
                            >
                                Hello! I'm João Guimarães, a 19 years old
                                fullstack developer who loves building things
                                that live on the web.
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    padding: "0.7rem 0",
                                    borderBottom: "1px solid #B2E2F8",
                                }}
                            >
                                I've always loved tech and sports. My greatest
                                passions are technology, volleyball and personal
                                finance.
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{
                                    padding: "0.7rem 0",
                                    borderBottom: "1px solid #B2E2F8",
                                }}
                            >
                                My focus is on the development of modern and
                                efficient websites, web apps or services to
                                provide users or companies with fully
                                responsive, pixel-perfect interfaces and
                                exceptional efficient interaction.
                            </Typography>
                            <Button
                                variant="outlined"
                                style={{
                                    margin: "1rem 0",
                                }}
                                href="#skills"
                            >
                                Continue
                            </Button>
                        </div>
                        <img
                            src="/media/imgs/Me.jpg"
                            style={{ width: "30%", borderRadius: "3%" }}
                        ></img>
                    </Container>
                </Container>
            </div>
        </>
    );
};
