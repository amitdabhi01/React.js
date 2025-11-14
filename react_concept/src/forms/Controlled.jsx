import React, { useState } from "react";

const Controlled = () => {

    const [formData, setFormData] = useState({
        task: "",
        description: "",
    })

    const handleChange = (field, e) => {
        setFormData((data) => {
            return{
                ...data,
                [field]: e.target.value,
            }
        })
    }

    return(
        <>
            <form>
                <input type="text" placeholder="task" value={formData.task} onChange={(e) => handleChange("task", e)}/>
                <br />
                <br />
                <input type="text" placeholder="description" value={formData.description} onChange={(e) => handleChange("description", e)}/>
            </form>

            <h2>{formData.task}</h2>
            <h2>{formData.description}</h2>
        </>
    )
}

export default Controlled;