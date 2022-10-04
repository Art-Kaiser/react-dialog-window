import React from "react";

export type funcName = 'onSuccess' | 'onReject'
type handler = (value: boolean | string) => void

interface ButtonType {
    titleSuccess?: string,
    titleReject?: string,
    disabled?: boolean,
    backgroundColor?: string,
    border?: string,
    hidden?: boolean,
    onSuccess?: handler,
    onReject?: handler,
    color?: string,
}

export interface DialogWindowProps {
    backgroundColor?: string,
    position?: string,
    type?: string,
    text?: string,
    title?: string,
    titleColor?: string,
    onSuccess?: handler,
    onReject?: handler,
    theme?: string,
    children?: React.ReactNode,
    blackout?: boolean,
    color?: string,
    buttons?: ButtonType,
    animated?: boolean,
}

export interface PromptProps {
    buttons?: ButtonType,
    onSuccess?: handler,
    onReject?: handler,
}

export interface FooterProps extends PromptProps {
    type?: string,
}

export interface Settings extends DialogWindowProps {
    elementId: string,
}