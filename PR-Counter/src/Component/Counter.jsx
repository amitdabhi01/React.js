import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(1);  // default increment is 1

    const handleInputChange = (e) => {
        setInput(Number(e.target.value));
    };

    return (
        <>
            <div>
                <input 
                    type="number" 
                    value={input} 
                    onChange={handleInputChange} 
                />

                <h1>{counter}</h1>

                <button onClick={() => setCounter(counter - input)}>
                    -
                </button>

                <button onClick={() => setCounter(0)}>Reset</button>

                <button onClick={() => setCounter(counter + input)}>
                    +
                </button>

            </div>
        </>
    );
};

export default Counter;
