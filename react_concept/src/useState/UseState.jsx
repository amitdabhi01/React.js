import { useState } from "react";

const UseState = () => {

    const [input, setInput] = useState("");

    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter((count) => count + 1);
    }

    const handleDecrease = () => {
        setCounter((count) => count - 1);
    }

    return(
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your text"/>
            <br />
            <h1>{input}</h1>

            <br />

            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    )
}

export default UseState;