import React, {FC} from "react";
import Portal from "../Portal";
import {useScrollLock} from "../../hooks";
import ReactShadowRoot from 'react-shadow-root'
import {Style} from "../Style";
import {ModalProps} from "./types";

const Modal: FC<ModalProps> = ({
    children,
    blackout,
    position,
    bg,
    color,
    animated,
    titleColor,
    btnBGColor,
    btnColor,
}) => {
    useScrollLock()
    return (
        <Portal>
            <ReactShadowRoot mode={'closed'}>
                <Style
                    blackout={blackout}
                    bg={bg}
                    color={color}
                    position={position}
                    animated={animated}
                    titleColor={titleColor}
                    btnBGColor={btnBGColor}
                    btnColor={btnColor}
                />
                <div className={'wrapper'}>
                    <div className={'container'}>
                        {children}
                    </div>
                </div>
            </ReactShadowRoot>
        </Portal>
    )
}

export default Modal