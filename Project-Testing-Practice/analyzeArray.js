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
    const arrLen = arr.length

    if(arrLen === 0){
        return {average: 0, min: 0, max:0, length: 0 };
    }

    // Calculate the sum and initialize min and max 
    let sum = 0
    let minElement = arr[0]
    let maxElement = arr[0]

    for (const num of arr){
        sum += num;
        if (num < minElement) minElement = num;
        if (num > maxElement) maxElement = num;
    }

    const average = sum / arrLen;

    return {
        average,
        min: minElement,
        max: maxElement,
        length: arrLen, 
    }
}

export { analyzeArray }