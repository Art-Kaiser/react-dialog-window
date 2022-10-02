import { useEffect } from "react";

const useScrollLock = () => {
    useEffect(() => {
        const saveOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = saveOverflow
        }
    }, [])
}

export default useScrollLock