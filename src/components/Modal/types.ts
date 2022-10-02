import React from "react";
import {position} from "../DialogWindow/types";

export interface StyleProps {
    blackout?: boolean,
    position?: position,
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