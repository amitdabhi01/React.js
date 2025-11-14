import React, { useRef } from "react";

const Focus = () => {

    const inputRef = useRef(null);

    const handleCLick = () => {
        inputRef.current.focus();
    }

    return(
        <>
            <input type="text" ref={inputRef}/>

            <button onClick={handleCLick}>Click to focus</button>
        </>
    )
}

export default Focus;