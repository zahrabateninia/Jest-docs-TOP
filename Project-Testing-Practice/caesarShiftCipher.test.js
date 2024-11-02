import { caesarCipher } from './caesarShiftCipher'

describe('caesarCipher', () => {
    test('shifts lowercase letters forward', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('shifts uppercase letters forward', () => {
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    test('keeps non-alphabet characters unchanged', () => {
        expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
        expect(caesarCipher('123, go!', 2)).toBe('123, iq!');
    });

    test('wraps around the alphabet', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    test('handles negative shift factors', () => {
        expect(caesarCipher('def', -3)).toBe('abc');
        expect(caesarCipher('ABC', -3)).toBe('XYZ');
    });

    test('handles large shift factors correctly', () => {
        expect(caesarCipher('abc', 26)).toBe('abc'); // Full rotation, should remain the same
        expect(caesarCipher('abc', 52)).toBe('abc'); // Double full rotation, should remain the same
    });

    test('returns an empty string if input is empty', () => {
        expect(caesarCipher('', 5)).toBe('');
    });
});
