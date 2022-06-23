// console.log(process.argv)

let array = process.argv;
let sum = 0

for(let i = 2; i < array.length; i++){
    // console.log(array[i])
    sum += Number(array[i])
}

console.log(sum)