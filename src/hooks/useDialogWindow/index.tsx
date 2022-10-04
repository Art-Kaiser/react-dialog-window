import React from "react";
import ReactDOM from "react-dom";
import DialogWindow from "../../components/DialogWindow";
import {funcName, Settings} from "../../components/DialogWindow/types";

const useDialogWindow = ({ elementId, children, ...props }: Settings) => {
    const handleClick = (root: any, funcName: funcName) => {
        return (value: boolean | string) => {
            props?.buttons?.[funcName]?.(value)
            root.unmount()
        }
    }

    const open = () => {
        // @ts-ignore
        const root = ReactDOM?.createRoot(document.getElementById(elementId))
        const onSuccess = handleClick(root, 'onSuccess')
        const onReject = handleClick(root, 'onReject')

        root.render(
            <DialogWindow
                {...props}
                onSuccess={onSuccess}
                onReject={onReject}
            >
                { children }
            </DialogWindow>
        )
    }

    return { open }
}

export default useDialogWindow
