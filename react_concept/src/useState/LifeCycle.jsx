import { useState, useEffect } from "react";

const LifeCycle = () => {
    const [count, setCounter] = useState(0);

    const [input, setInput] = useState("")

    // useEffect(() => {
    //     console.log("This will print again and again");
    // });

    useEffect(() => {
        console.log("This will print again and again");
    }, [count])

    return(
        <> 
            <h2>{count}</h2> 
            <br />
            <button onClick={() => setCounter((count) => count+1)}>Count</button> 
            <br />
            <br />
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <br />
            <h2>{input}</h2>
        </>
    )
}

export default LifeCycle