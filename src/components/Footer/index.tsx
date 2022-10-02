import {Button} from "../Button";
import {TYPES_MODAL} from "../../constants";
import React from "react";
import {FooterProps} from "../DialogWindow/types";

export const Footer = ({ type, buttons, onSuccess, onReject }: FooterProps) => {
    return (
        <div className={'footer'}>
            <Button
                title={buttons?.titleSuccess || "Ok"}
                onClick={() => onSuccess?.(true)}
            />
            {type?.toUpperCase() !== TYPES_MODAL.ALERT && (
                <Button
                    title={buttons?.titleReject || "Cancel"}
                    onClick={() => onReject?.(false)}
                />
            )}
        </div>
    )
}