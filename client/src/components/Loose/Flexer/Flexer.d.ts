declare namespace IFlexer {
    export interface IProps {
        children?: any;
        allCenter: boolean;
        direction?:
            | "-moz-initial"
            | "inherit"
            | "initial"
            | "revert"
            | "unset"
            | "column"
            | "column-reverse"
            | "row"
            | "row-reverse";
        justifyContent?: string;
        alignItems?: string;
        backgroundColor?: string;
    }
}

export { IFlexer };
