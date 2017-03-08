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
	if (input === null || input === '') return false

	const stack = []
	let include = false // used to check if string has 

	const pairs = {
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
		console.log('STACK: ', stack)
	}

	return (stack.length === 0) && include
};