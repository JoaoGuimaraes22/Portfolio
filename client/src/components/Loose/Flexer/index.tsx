// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IFlexer } from "./Flexer";
// #endregion Local Imports

const Flexer: React.FC<IFlexer.IProps> = ({
    children,
    direction,
    allCenter,
    alignItems,
    justifyContent,
    backgroundColor,
}) => {
    return (
        <>
            {allCenter ? (
                <div
                    style={{
                        display: "flex",
                        msFlexDirection: direction,
                        flexDirection: direction,
                        WebkitJustifyContent: "center",
                        WebkitAlignItems: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: backgroundColor,
                    }}
                >
                    {children}
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: direction,
                        WebkitFlexDirection: direction,
                        justifyContent: justifyContent,
                        WebkitJustifyContent: justifyContent,
                        alignItems: alignItems,
                        WebkitAlignItems: alignItems,
                        backgroundColor: backgroundColor,
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default Flexer;
