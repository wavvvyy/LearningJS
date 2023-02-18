// EXERCISE 1
// JS Program to display the current day and time

const currentDayTime = () => {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const date = new Date();
	console.log(`Today is ${days[date.getDay()]}, ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
	console.log(`Current Time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// EXERCISE 2
// JS Program to calculate the area of a triangle with sides 5, 6, 7.

const areaOfTriangle = (a, b, c) => {
	const s = (a + b + c)/2
	return Math.round(((s*(s - a)*(s - b)*(s - c))**.5)*100)/100;
}

// EXERCISE 3
// Write a JavaScript program to rotate the string 'w3resource' in right direction 
// by periodically removing one letter from the end of the string and attaching it 
// to the front.

const rotateStr = (str) => {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		str = str.replace(str[0],'') + str[0];
		console.log(str)
	}
}

// EXERCISE 4
// Write a JavaScript program to determine whether a given year is a 
// leap year in the Gregorian calendar.

const checkLeapYear = (year) => {
	debugger
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				// console.log('Leap Year')
				return true;
			} else {
				// console.log('Not a Leap Year')
				return false;
			}
		} else {
			// console.log('Leap Year')
			return true;
		}
	} else {
		// console.log('Not a Leap Year')
		return false;
	}
}

// EXERCISE 5
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Well I added more

const celciusToFahrenheit = (c) => (9*(c/5))+32;
const celciusToKelvin = (c) => c + 273;
const fahrenheitToCelcius = (f) => ((f-32)/9)*5;
const fahrenheitToKelvin = (f) => fahrenheitToCelcius(f) + 273;
const kelvinToCelcius = (k) => k - 273;
const kelvinTofahrenheit = (k) => celciusToFahrenheit(kelvinToCelcius(k));