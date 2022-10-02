import React, {useState, useEffect, FC} from "react";
import ReactDOM from 'react-dom';

interface Portal {
    children: React.ReactNode,
}

export default function Portal({ children }: Portal) {
    const [container] = useState(() => document?.createElement("div"))

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}
