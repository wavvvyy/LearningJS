// EXERCISE 3
// Write a function that converts rgb into hex format.
function numToHex(num){
	let hex = num.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

const RgbToHex = (r, g, b) => "#" + numToHex(r) + numToHex(g) + numToHex(b);

const HexToRgb = (hex) => {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? 
	`(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

console.log(RgbToHex(56, 55, 12)) // #38370c
console.log(HexToRgb("#38370c")) // (56, 55, 12)

// .exec(str) : it executes a search for a match of <str> in a specified string and returns a result array, or null.
// parseInt(a, 16) :  parses a value as a string and returns the first integer. 
// 				^ Radix parameter specifies the number system to use: 2 = binary, 8 = octal, 10 = decimal, 16 = HexaDecimal
