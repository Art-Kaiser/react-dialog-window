import React from "react";

export interface StyleProps {
    blackout?: boolean,
    position?: string,
    bg?: string,
    color?: string,
    animated?: boolean,
    titleColor?: string,
    btnBGColor?: string,
    btnColor?: string,
}

export interface ModalProps extends StyleProps {
    children: React.ReactNode,
}