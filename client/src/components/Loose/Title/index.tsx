// #region Global Imports
import { Typography } from "@material-ui/core";
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { ITitle } from "./Title";
import styles from "./Title.module.scss";
// #endregion Local Imports

export const Title: React.FC<ITitle.IProps> = ({ text, color, lineColor }) => {
    const lineCl = lineColor || "#53baea";

    return (
        <>
            <div className={styles.container}>
                <Typography
                    variant="h1"
                    className={styles.title}
                    style={{
                        color: color,
                        borderBottom: `1px solid ${lineCl}`,
                    }}
                >
                    {text}
                </Typography>
            </div>
        </>
    );
};
