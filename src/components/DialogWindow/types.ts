import React from "react";

export type position = 'top' | 'center'
export type type = 'alert' | 'confirm' | 'prompt'
export type funcName = 'onClick' | 'onClose'
type handler = (value: boolean | string) => void

interface ButtonType {
    titleSuccess?: string,
    titleReject?: string,
    disabled?: boolean,
    backgroundColor?: string,
    border?: string,
    hidden?: boolean,
    onClick?: handler,
    onClose?: handler,
    color?: string,
}

export interface DialogWindowProps {
    backgroundColor?: string,
    position?: position,
    type?: type,
    animation?: boolean,
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
    type?: type,
}

export interface Settings extends DialogWindowProps {
    elementId: string,
}