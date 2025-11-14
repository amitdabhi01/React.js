import { useState } from "react";

const OnChange = () => {

    const [input, setInput] = useState("")

    const handleName = (e) => {
        setInput(e.target.value)
    }

    return(
        <>
            <input type="text" value={input} onChange={handleName} placeholder="Enter name"/>

            <h1>{input}</h1>
        </>
    )
}

export default OnChange;