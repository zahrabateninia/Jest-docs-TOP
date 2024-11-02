// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

const caesarCipher = (str, shiftFactor) =>{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabet.toUpperCase();
    let result = ''

    for (let char of str){
        if(alphabet.includes(char)){
            let newIndex = (alphabet.indexOf(char) + shiftFactor) % 26;
            if (newIndex < 0) newIndex += 26; // Handle negative shifts
            result += alphabet[newIndex]
        }
        // if the character wasn't lowercase and was uppercase
        else if(alphabetUpper.includes(char)){
            let newIndex = (alphabetUpper.indexOf(char) + shiftFactor)% 26;
            if (newIndex<0) newIndex += 26;
            result += alphabetUpper[newIndex]
        }
        else{
            //  if the char was not a letter, it was a space or a punctuation let it be the same
            result += char;
        }
    }
    // final shifted string 
    return result;


}

export { caesarCipher }


// Note to myself
// use the modulo operator % to wrap the index around the alphabet.