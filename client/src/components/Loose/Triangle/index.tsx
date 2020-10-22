// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { ITriangle } from "./Triangle";
import styles from "./Triangle.module.scss";
// #endregion Local Imports

export const Triangle: React.FunctionComponent<ITriangle.IProps> = ({
    backgroundColor,
}) => {
    return (
        <>
            <div
                className={styles.triangle}
                style={{ backgroundColor: `${backgroundColor}` }}
            ></div>
        </>
    );
};
