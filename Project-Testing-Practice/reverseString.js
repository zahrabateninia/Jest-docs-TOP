// A reverseString function that takes a string and returns it reversed.

// two-pointers technique:  It has a time complexity of O(n), which is optimal for this kind of reversal task,
// since each element is visited only once.

const reverseString = (str) => {
    let strArray = str.split(''); 
    let left = 0;
    let right = strArray.length - 1;

    while (left < right) {
        let temp = strArray[left];
        strArray[left] = strArray[right];
        strArray[right] = temp;

        left++;  
        right--;
    }
    return strArray.join('');
}


export { reverseString }