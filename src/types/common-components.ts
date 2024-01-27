import { MouseEventHandler, ReactNode } from "react";


// ==================== Common Button ==================== 
export interface IAppButtonProps {
    type?: "button" | "submit" | "reset";
    href?: string | any;
    title: ReactNode;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    classes?: string
    hasYellowHover?: boolean;
    disabled?:boolean
}




// ==================== Wrapper Components ====================
export interface ICommonChildrenProp {
    children: ReactNode;
}




// ==================== Common Link ====================
export interface IAppLinkProps {
    path: string;
    title: ReactNode;
    children: ReactNode;
}