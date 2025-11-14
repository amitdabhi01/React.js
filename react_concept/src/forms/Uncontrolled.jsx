import React, { useRef} from "react";

const Uncontrolled = () => {

    const taskRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(taskRef.current.value);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="task" ref={taskRef}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Uncontrolled;