'use strict';

/*
 * deepFinder
 * 
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {
	// always assume input in unsanitized
	if (input === null || input.length === 0 || test === null) {
		return null
	}

	/*
	 * When checking the variable type in the array, its good to
	 * note the difference between typeof and instanceof.
	 *
	 * Using typeof(obj) will return a string represention of the object type
	 * while instanceof is a boolean checking operation
	 */

	let arr = []
	function deepFind (obj) {
		if (obj instanceof Array) {
			obj.forEach((item) => { // recurse through each of array's items
				deepFind(item)
			})
		} else if (obj instanceof Object) {
			for (let key in obj) { // recurse through each of object's items
				deepFind(obj[key])
			}
		} else if (test(obj)) { // input is neither an Array or Object
			arr.push(obj)
		}
	}

	deepFind(input)
	return arr
};