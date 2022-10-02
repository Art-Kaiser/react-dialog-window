import React from "react";
import {TYPES_MODAL} from "../../constants";
import Prompt from "../../components/Prompt";
import {DialogWindowProps} from "../../components/DialogWindow/types";
import {Default} from "../../components/Default";

function useCurrent(props: DialogWindowProps) {
    let component = null
    switch (props?.type?.toUpperCase()) {
        case TYPES_MODAL.ALERT:
            component = <Default {...props}/>
            break
        case TYPES_MODAL.PROMPT:
            component = <Prompt buttons={props?.buttons} onSuccess={props?.onSuccess} onReject={props?.onReject}/>
            break
        default:
            component = <Default {...props}/>
    }

    return { component }
}

export default useCurrent