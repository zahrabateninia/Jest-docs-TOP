import { reverseString } from "./reverseString";

test('reverses a simple word', () =>{
    let expected = 'cba';
    let actual = 'abc'
    expect(reverseString(actual)).toBe(expected)
})

test('reverses a single character', () =>{
    let expected = 'a';
    let actual = 'a';
    expect(reverseString(actual)).toBe(expected)
})

test('reverses an empty string', () =>{
    expect(reverseString('')).toBe('')
})

// Edge Cases

test('reverses a string with spaces', () =>{
    let expected = 'hello world';
    let actual = 'dlrow olleh';
    expect(reverseString(actual)).toBe(expected)
})

test('reverses a string with special characters', () =>{
    let expected = 'hello!';
    let actual = '!olleh';
    expect(reverseString(actual)).toBe(expected)
})
