import { useRef, useEffect } from "react";

const FocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form>
            <input ref={inputRef} type="text" placeholder="Auto-focused input" />
        </form>
    );
};

export default FocusInput;
