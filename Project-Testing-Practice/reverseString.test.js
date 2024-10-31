import { reverseString } from "./reverseString";

test('abc should be cba', () =>{
    let expected = 'cba';
    let actual = 'abc'
    expect(reverseString(actual)).toBe(expected)
})