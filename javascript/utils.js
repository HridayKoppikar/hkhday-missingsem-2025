/**
 * Simple utility functions for demonstrating JavaScript basics.
 * This file serves as an example for students to practice Git operations.
 */

/**
 * Capitalize the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
function capitalize(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Check if a number is even
 * @param {number} num - The number to check
 * @returns {boolean} True if even, false if odd
 */
function isEven(num) {
    return num % 2 === 0;
}

/**
 * Get the maximum value from an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The maximum value
 */
function getMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }
    return Math.max(...numbers);
}

/**
 * Count the number of vowels in a string
 * @param {string} str - The string to analyze
 * @returns {number} Number of vowels found
 */
function countVowels(str) {
    if (!str || typeof str !== 'string') {
        return 0;
    }
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

/**
 * Reverse a string
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
    if (!str || typeof str !== 'string') {
        return '';
    }
    return str.split('').reverse().join('');
}

// Export functions for testing (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        capitalize,
        isEven,
        getMax,
        countVowels,
        reverseString
    };
}

// Demo usage (browser)
if (typeof window !== 'undefined') {
    console.log('JavaScript Utils Demo:');
    console.log('capitalize("hello") =', capitalize("hello"));
    console.log('isEven(4) =', isEven(4));
    console.log('getMax([1, 5, 3, 9, 2]) =', getMax([1, 5, 3, 9, 2]));
    console.log('countVowels("javascript") =', countVowels("javascript"));
    console.log('reverseString("github") =', reverseString("github"));
}