import React, { FC } from 'react';
import Modal from "../Modal";
import {DialogWindowProps} from "./types";
import {Title} from "../Title";
import useCurrent from "../../hooks/useCurrent";

const DialogWindow: FC<DialogWindowProps> = ({ children, ...props }) => {
    const { component } = useCurrent(props)
    return (
        <Modal
            blackout={props.blackout}
            position={props.position}
            bg={props.backgroundColor}
            color={props.color}
            animated={props.animated}
            titleColor={props?.titleColor}
            btnBGColor={props?.buttons?.backgroundColor}
            btnColor={props?.buttons?.color}
        >
            <div className={'dialog-window'}>
                <Title title={props.title}/>
                {component}
            </div>
        </Modal>
    )
}

export default DialogWindow