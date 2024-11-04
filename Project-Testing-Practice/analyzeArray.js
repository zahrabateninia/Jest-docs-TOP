/**
 * Analyzes an array of numbers and returns an object with statistical properties.
 * 
 * @param {number[]} arr - The array of numbers to analyze.
 * @return {Object} An object containing the average, min, max, and length of the array.
 * @property {number} average - The average of all numbers in the array.
 * @property {number} min - The smallest number in the array.
 * @property {number} max - The largest number in the array.
 * @property {number} length - The total number of elements in the array.
 *
 * @example
 * const result = analyzeArray([1, 2, 3, 4, 5]);
 * // result: { average: 3, min: 1, max: 5, length: 5 }
 */


const analyzeArray = (arr) => {
    let result = {}
    let arrLen = arr.length

    // Calculate the average of numbers in the array
    let sum = 0
    arr.forEach(num => {
        sum += num;
    })
    let sumOfArrayElements  = sum / arrLen;
    
    // Calculate the min element of the array
    



}