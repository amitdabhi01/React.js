import React, { useState} from "react";

const OnSubmit = () => {

    const [name, setName] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return( 
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)}/>

                <br />
                
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default OnSubmit;