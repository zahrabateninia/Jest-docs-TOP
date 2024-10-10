// A capitalize function that takes a string and returns it with the first character capitalized.

const capitalize = (str) => {
    if(typeof str !== 'string'){
        return 'Enter a valid input(string)'
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export { capitalize }