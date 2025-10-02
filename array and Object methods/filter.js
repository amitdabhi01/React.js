const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even  = number.filter((num) => num%2 == 0);

console.log(even);

const personData = [
    {
        name : "amit",
        age : 19,
        city : "bvn",
    },
    {
        name : "jay",
        age : 21,
        city : "palitn",
    },
    {
        name : "krunal",
        age : 21,
        city : "surt",
    },
];

const eligiblePerson = personData.filter((person) => person.age > 18);

console.log(eligiblePerson)