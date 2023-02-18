// EXERCISE 1
// Clean up the array having similar elements nested in the main array.

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const categorizeArray = (array) => {
    let preValue = array[0];
	let arr = [];
	let lst = [];
	array.sort().map( value => {
		if (value === preValue) {
			lst.push(value);
		} else {
			arr.push(lst);
			preValue = value;
			lst = [preValue];
		}
	})
	return arr;
}
const cleanArray = (array) => {
    let arr = [];
	categorizeArray(array).map( item => { 
		item.length === 1 ? item = item[0] : item;
        arr.push(item);
    })
    return arr;
}

console.log(cleanArray(array))

// -----------------------------------------------------------------------------------------------------------
// BONUS
// Clean up the array having elements of similar type nested in the main array.

const array2 = [1,'2',4,'591',392,'391',2,5,'10',2,'1','1',1,'20',20];
let answerArray = [];

const categorizeArrayByType = (array) => {
	let numberArray = [];
	let strArray = [];
	array.sort().map( value => {
		if (typeof value === 'number'){
			console.log('number : ',value);
			numberArray.push(value);
		} else {
			console.log('string : ',value);
			strArray.push(value);
		}
	})
	answerArray.push(numberArray, strArray);
}

categorizeArrayByType(array2);
console.log(answerArray);