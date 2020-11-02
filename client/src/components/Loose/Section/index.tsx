// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { ISection } from "./Section";
import styles from "./Section.module.scss";
// #endregion Local Imports

export const Section: React.FC<ISection.IProps> = ({
    backgroundColor,
    children,
    id,
    height,
}) => {
    const pageHeight = height || "100vh";
    return (
        <>
            <div
                className={styles.page_section}
                style={{
                    background: backgroundColor,
                    minHeight: pageHeight,
                }}
                id={id}
            >
                {children}
            </div>
        </>
    );
};
