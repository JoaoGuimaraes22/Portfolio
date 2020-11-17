// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { ISection } from "./Section";
// #endregion Local Imports

export const Section: React.FC<ISection.IProps> = ({
    backgroundColor,
    children,
    id,
    height,
    padingBottom,
}) => {
    const pageHeight = height || "100vh";
    const padBottom = padingBottom || "5vh";

    return (
        <>
            <div
                style={{
                    background: backgroundColor,
                    minHeight: pageHeight,
                    paddingTop: "5vh",
                    textAlign: "center",
                    paddingBottom: padBottom,
                }}
                id={id}
            >
                {children}
            </div>
        </>
    );
};
