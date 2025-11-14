import { useEffect, useState } from "react";

import axios from "axios";

const UseEffect = () => {
    const [person,setPerson] = useState([]);

    const [fetchData, setFetchData] = useState(false)

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const response = await fetch("https://jsonplaceholder.typicode.com/users");

    //             const data = response.json();

    //             if (!data || data.length === 0) {
    //                 console.log("Data not found")
    //             }

    //             setPerson(data);
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     }

    //     fetchUser()
    // }, [])

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios("https://jsonplaceholder.typicode.com/users");

                if (!response.data || response.data.length === 0) {
                    console.log("data not found");
                    setPerson([]);
                }

                setPerson(response.data);
            } catch (error) {
                console.log(error.message)
            }
        }

        if (fetchData) {
            fetchUserData();
        }
    }, [fetchData]);

    const handleFetchData = () => {
        setFetchData(true);      
    }

    return(
        <>
            <button onClick={handleFetchData}>fetch user data</button>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {person.map((person) => {
                        return(
                            <>
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.username}</td>
                                    <td>{person.email}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default UseEffect;