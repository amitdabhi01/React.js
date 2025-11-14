import React, { useState} from "react"

// Example = 1

// const PassingArgument = () => {

//     const handleClick = (name) => {
//         alert(`Hii ${name}`)
//     }

//     return(
//         <>
//             <button onClick={()=>handleClick("Amit")}>click</button>
//         </>
//     )
// }

// export default PassingArgument;



// Example-2

// const PassingArgument = () => {

//     const [input, setInput] = useState("")

//     const handleClick = () => {
//         alert(`Hyy ${input}`)
//     }

//     return(
//         <>
//             <input type="text" placeholder="Enter Name" value={input} onChange={(e) => setInput(e.target.value)}/>
//             <button onClick={handleClick}>Click</button>
//         </>
//     )
// }

// export default PassingArgument;



// Example-3

const PassingArgument = ({name}) => {

    const handleClick = (name) => {
        alert(`Hyy ${name}`)
    }

    return(
        <>
            <button onClick={() => handleClick(name)}>Click</button>
        </>
    )
}

export default PassingArgument;