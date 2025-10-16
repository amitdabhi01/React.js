// conditional example 1

// import React, { useState } from "react";

// const Conditional = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     return(
//         <>
//             <h1>{isLoggedIn ? "Welcome" : "Click to login"}</h1>

//             <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//                 {isLoggedIn ? "log-out" : "login"}
//             </button>
//         </>
//     )
// }

// export default Conditional;


// conditional example 2

import React, { useState } from "react";

const Conditional = () => {
    const [color, setColor] = useState("green");

    let content;

    if (color === "green"){
        content = (
            <h1>You have selected green color</h1>
        )
    }
    else if(color === "blue"){
        content = (
            <h1>You have selected blue color</h1>
        )
    }
    else{
        content = (
            <h1> you are not allowed to select other color only you can select green or blue</h1>
        )
    }

    return(
        <>
            {content}
        </>
    )
}

export default Conditional;