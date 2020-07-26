import { wrapper } from "../../src/redux/store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../../src/theme";

type Props = {
    Component: React.FC;
    pageProps: any;
};

const WrappedApp = ({ Component, pageProps }: Props) => {
    return (
        <Component {...pageProps}>
            {" "}
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Component>
    );
};

export default wrapper.withRedux(WrappedApp);
