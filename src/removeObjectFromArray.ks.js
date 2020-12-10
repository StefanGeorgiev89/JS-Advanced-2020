let array = [
    {id: 1},
    {id: 2},
    {id: 3},
]

let id = 4;


// console.log(array.slice(2));

let idx = array.findIndex( (obj) =>  obj.id === id);
console.log(idx);