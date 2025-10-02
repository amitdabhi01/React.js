// spread

const fruits = ["orange", "apple", "banana", "mango"]

const vegetables = ["potato", "carrot", "tomato"]

const totalItem = [...fruits, ...vegetables]

console.log(totalItem)


// object

const person1 = {
    name : "amit",
    age : 19,
    city : "bvn"
}

const person2 = {
    name1 : "jay",
    age1 : 21,
    city1 : "palitn",
}

const totalPersons = {...person1, ...person2}

console.log(totalPersons)

// another example

const item1 = {
    number1 : "one",
    number2 : "two",
}

const item2 = {
    ...item1,
    number3 : "three",
}

console.log(item2)