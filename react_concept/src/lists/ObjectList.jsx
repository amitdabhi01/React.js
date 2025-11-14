const ObjectList = () => {
    const people = [
        { id: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com", city: "New York" },
        { id: 2, name: "Brian Smith", age: 35, email: "brian.smith@example.com", city: "Los Angeles" },
        { id: 3, name: "Carla Gomez", age: 24, email: "carla.gomez@example.com", city: "Chicago" },
        { id: 4, name: "David Lee", age: 42, email: "david.lee@example.com", city: "Houston" },
        { id: 5, name: "Eva Martinez", age: 31, email: "eva.martinez@example.com", city: "Phoenix" },
        { id: 6, name: "Frank Wright", age: 37, email: "frank.wright@example.com", city: "Philadelphia" },
        { id: 7, name: "Grace Kim", age: 29, email: "grace.kim@example.com", city: "San Antonio" },
        { id: 8, name: "Henry Clark", age: 45, email: "henry.clark@example.com", city: "San Diego" },
        { id: 9, name: "Ivy Chen", age: 26, email: "ivy.chen@example.com", city: "Dallas" },
        { id: 10, name: "Jack Wilson", age: 33, email: "jack.wilson@example.com", city: "San Jose" }
    ];

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((user)=> {
                        return(
                            <>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ObjectList;