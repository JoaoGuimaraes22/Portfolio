import { wrapper } from "../../src/redux/store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../../src/theme";
import "../global.css";

type Props = {
    Component: React.FC;
    pageProps: any;
};

const WrappedApp = ({ Component, pageProps }: Props) => {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles: any = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

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
