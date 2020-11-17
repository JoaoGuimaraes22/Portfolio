// #region Global Imports
import React from "react";
import { Typography, Button } from "@material-ui/core";
import Particles from "react-particles-js";
// #endregion Global Imports

// #region Local Imports
import { ILanding } from "./Landing";
import { particlesConfig } from "./particles-config/particles-config";
import styles from "./Landing.module.scss";
// #endregion Local Imports

export const Landing: React.FC<ILanding.IProps> = (_props) => {
    return (
        <div id="landing" className={styles.landing}>
            <div className={styles.container}>
                <div className={styles.particles}>
                    <Particles
                        height="100vh"
                        width="100%"
                        // @ts-ignore
                        params={particlesConfig}
                    />
                </div>

                <div className={styles.land}>
                    <Typography variant="h1" className={styles.land_title}>
                        JOÃO GUIMARÃES
                    </Typography>

                    <Typography variant="h2" className={styles.land_subtitle}>
                        FULL STACK DEVELOPER
                    </Typography>
                    <Typography variant="h6" className={styles.land_text}>
                        If it's hard to say, just call me John
                    </Typography>

                    <Button
                        variant="outlined"
                        className={styles.land_button}
                        href="#about"
                    >
                        See more
                    </Button>
                </div>
            </div>
        </div>
    );
};
