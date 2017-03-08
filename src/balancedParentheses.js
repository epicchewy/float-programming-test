'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
	// assume unsanitized input
	if (input === null || input === '') return false

	/*
	 * My solution utlizes a stack and a dictionary of valid pairings
	 * It also has an extra boolean to check if any parantheses have been checked
	 * When it encounters the left-hand side, it will insert it into the stack
	 * When it encounters its counterpart, pop the stack and check if its the correct pairing
	 */

	const stack = []
	let include = false // used to check if string has pairings at all

	const pairs = { // Be sure to account for all types of pairings
		'(' : ')',
		'{' : '}',
		'[' : ']',
	}

	for (let i = 0; i < input.length; i++) {
		let curr = input[i]
		if (pairs[curr]) {
			stack.push(curr)
			include = true
		} else if (curr === ')' || curr === '}' || curr === ']') {
			let top = stack.pop()
			if (curr !== pairs[top]) {
				return false
			}
		}
	}

	return (stack.length === 0) && include
};