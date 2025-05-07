import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function useHandleLazy() {
    const { isLazy } = useSelector((state) => state.lazySlice);
    const clear = useRef(null);
    const [isLazyOut, setisLazyOut] = useState(false);
    useEffect(() => {
        if (isLazy) {
            setisLazyOut(true);
            clearTimeout(clear.current);
        } else {
            clear.current = setTimeout(() => {
                setisLazyOut(false);
            }, 100);
        }
    }, [isLazy]);
    return isLazyOut;
}