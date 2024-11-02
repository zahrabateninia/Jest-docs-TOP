import { caesarCipher } from './caesarShiftCipher'

test("shifts abc to bcd if key is one", () =>{
    let actual= 'abc'
    let expected = 'bcd'
    expect(caesarCipher(actual, 1)).toBe(expected)
})

