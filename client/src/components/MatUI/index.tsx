// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { IMatUI } from "./MatUI";
import { Typography, Link, makeStyles } from "@material-ui/core";
// #endregion Local Imports

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0),
    },
}));

export const MatUI: React.FunctionComponent<IMatUI.IProps> = (props) => {
    const classes = useStyles();
    return (
        <Typography className={classes.root} color="textSecondary">
            Pro tip: See more{" "}
            <Link href="https://material-ui.com/getting-started/templates/">
                templates
            </Link>{" "}
            on the Material-UI documentation.
        </Typography>
    );
};
