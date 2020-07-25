declare namespace IButton {
    export interface IProps {
        text: string | null;
        onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    }
}

export { IButton };
