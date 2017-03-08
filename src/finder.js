'use strict';

/*
 * finder
 * 
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 * 
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 * 
 */
module.exports = ( input, test ) => {
	// always assume input in unsanitized
	if (input === null || input.length === 0 || test === null) {
		return null
	}

	let arr = []
	input.forEach((item) => {
		if (item instanceof Array || item instanceof Object) {
			return
		}

		if (test(item)) {
			arr.push(item)
		}
	})

	return arr
};