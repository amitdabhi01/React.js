import React, { useState } from "react";

const WorkingWithForms = () => {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
    })

    const [saveData, setSaveDate] = useState([]);

    const handleChange = (field, e) => {
        setFormData((formData) => {
            return{
                ...formData,
                [field]:e.target.value,
            }
        })
    }

    const handleSubmitData = (e) => {
        e.preventDefault();

        setSaveDate((data) => [...data, formData]);

        setFormData({name: "", surname: ""});
    }

    console.log("save", saveData)

    return(
        <>
            <form onSubmit={handleSubmitData}>
                <input type="text" placeholder="name" onChange={(e) => handleChange("name" ,e)}/>
                <br />
                <br />
                <input type="text" placeholder="surname" onChange={(e) => handleChange("surname", e)}/>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {saveData.map((data, index) => {
                        return(
                            <>
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.surname}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default WorkingWithForms;