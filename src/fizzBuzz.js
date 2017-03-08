'use strict';

/*
 * fizzBuzz
 * 
 * Takes an input length and returns an array of the specified length
 * where the values are:
 *  1) the index + 1, eg: [ 1, 2 ], array[ 0 ] === 1, array[ 1 ] === 2
 *  2) values that would be multiples of 3 are replaced with 'fizz', eg: [ 1, 2, 'fizz' ]
 *  3) values that would be multiples of 5 are replaced with 'buzz', eg: [ 1, 2, 'fizz', 4, 'buzz' ]
 *  4) values that would be multiples of both 3 and 5 are replaced with 'fizzbuzz', eg: [ 1, 2, 'fizz', ... 14, 'fizzbuzz' ] 
 *
 * Eg:
 * 
 *   input: 10
 *   returns: [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ]
 * 
 */
module.exports = ( length ) => {
	if (length < 0) return null
	let arr = []

	for (let i = 1; i <=length; i++) {
		if (i % 15 == 0) {
			arr.push('fizzbuzz')
		} else if (i % 3 == 0) {
			arr.push('fizz')
		} else if (i % 5 == 0) {
			arr.push('buzz')
		} else {
			arr.push(i)
		}
	}

	return arr
};