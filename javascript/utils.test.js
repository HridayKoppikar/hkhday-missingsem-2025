/**
 * Test file for utility functions.
 * Students can practice writing tests and running them with Node.js.
 * 
 * To run tests: node utils.test.js
 */

// Import the functions to test
const { capitalize, isEven, getMax, countVowels, reverseString } = require('./utils.js');

// Simple test framework
function assert(condition, message) {
    if (condition) {
        console.log(`✅ PASS: ${message}`);
    } else {
        console.log(`❌ FAIL: ${message}`);
    }
}

function assertEqual(actual, expected, message) {
    assert(actual === expected, `${message} (expected: ${expected}, got: ${actual})`);
}

function assertArrayEqual(actual, expected, message) {
    const equal = JSON.stringify(actual) === JSON.stringify(expected);
    assert(equal, `${message} (expected: ${JSON.stringify(expected)}, got: ${JSON.stringify(actual)})`);
}

// Test capitalize function
console.log('\n🧪 Testing capitalize function:');
assertEqual(capitalize('hello'), 'Hello', 'capitalize("hello")');
assertEqual(capitalize('WORLD'), 'World', 'capitalize("WORLD")');
assertEqual(capitalize(''), '', 'capitalize("")');
assertEqual(capitalize('a'), 'A', 'capitalize("a")');

// Test isEven function
console.log('\n🧪 Testing isEven function:');
assertEqual(isEven(4), true, 'isEven(4)');
assertEqual(isEven(3), false, 'isEven(3)');
assertEqual(isEven(0), true, 'isEven(0)');
assertEqual(isEven(-2), true, 'isEven(-2)');

// Test getMax function
console.log('\n🧪 Testing getMax function:');
assertEqual(getMax([1, 5, 3, 9, 2]), 9, 'getMax([1, 5, 3, 9, 2])');
assertEqual(getMax([10]), 10, 'getMax([10])');
assertEqual(getMax([]), null, 'getMax([])');
assertEqual(getMax([-1, -5, -2]), -1, 'getMax([-1, -5, -2])');

// Test countVowels function
console.log('\n🧪 Testing countVowels function:');
assertEqual(countVowels('hello'), 2, 'countVowels("hello")');
assertEqual(countVowels('javascript'), 3, 'countVowels("javascript")');
assertEqual(countVowels(''), 0, 'countVowels("")');
assertEqual(countVowels('xyz'), 0, 'countVowels("xyz")');

// Test reverseString function
console.log('\n🧪 Testing reverseString function:');
assertEqual(reverseString('hello'), 'olleh', 'reverseString("hello")');
assertEqual(reverseString('github'), 'buhtig', 'reverseString("github")');
assertEqual(reverseString('a'), 'a', 'reverseString("a")');
assertEqual(reverseString(''), '', 'reverseString("")');

console.log('\n🎉 All tests completed!');