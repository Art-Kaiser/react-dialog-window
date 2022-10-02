import React from "react";

interface ButtonTypes {
    title: string,
    onClick?: () => void,
    disabled?: boolean,
}

export const Button = ({
    title,
    onClick,
    disabled,
}: ButtonTypes) => {
    return (
        <button className={'button'} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}