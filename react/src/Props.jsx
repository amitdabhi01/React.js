// old methods

// const Props = (props) => {
//     return (
//         <>
//             <h1>This is props</h1>

//             <h1>{props.greeting}</h1>
//         </>
//     )
// }

// export default Props



// new methods

const Props = ({greeting, count}) => {
    return (
        <>
            <h1>This is props</h1>

            <h1>{greeting}</h1>

            <h1>{count}</h1>
        </>
    )
}

export default Props;    