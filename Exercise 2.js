// EXERCISE 2
// Make a function that takes an array of numbers and a target number. It gives out
// all the possible combinations of numbers from the array whose sum is the target number.

const array = [1,2,3,4,5,6,7];

const answerArray = (array, targetNumber) => {
    let lst = [];
    array.map(num => array.includes(targetNumber - num) ? lst.push([num, targetNumber - num]) : num)
    return lst
}

console.log(answerArray(array,8))