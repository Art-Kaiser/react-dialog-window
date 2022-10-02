import React from "react";

interface TitleProps {
    title?: string,
}

export const Title= ({ title }: TitleProps) => {
    return (
        <p className={'title'}>
            {title}
        </p>
    )
}