import { capitalize } from "./capitalize";

test('capitalizes a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  
test('handles words with mixed casing', () => {
    expect(capitalize('hELLo')).toBe('Hello');
});

test('returns an empty string when input is an empty string', () => {
    expect(capitalize('')).toBe('');
});

test('handles non-alphabetic characters at the start', () => {
    expect(capitalize('808bab')).toBe('808bab');
});
