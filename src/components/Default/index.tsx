import {DialogWindowProps} from "../DialogWindow/types";
import {Footer} from "../Footer";
import React from "react";

export const Default = ({ ...props }: DialogWindowProps) => {
    return (
        <div>
            {props.children || (
                <div className={'body'}>
                    {props.text}
                </div>
            )}

            {!props?.buttons?.hidden && (
                <Footer
                    buttons={props?.buttons}
                    type={props?.type}
                    onSuccess={props?.onSuccess}
                    onReject={props?.onReject}
                />
            )}
        </div>
    )
}