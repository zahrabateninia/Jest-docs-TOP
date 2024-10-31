import { calculator } from "./calculator";

test('adds two numbers', ()=>{
    expect(calculator.add(3,3)).toBe(6)
})

test('adds two numbers', ()=>{
    expect(calculator.add(3,3)).toBe(6)
})

test('adds a positive and a negative number', () => {
    expect(calculator.add(10, -4)).toBe(6);
  });
  
  test('subtracts two negative numbers', () => {
    expect(calculator.subtract(-5, -2)).toBe(-3);
  });
  

test('divides a number by zero', () => {
    expect(() => calculator.divide(3, 0)).toThrow("Zero Division Error!");
});




// Note to myself:
// Arrow Function in expect(): Wrapping calculator.divide(3, 0) inside an arrow function () => calculator.divide(3, 0)
// is necessary when using toThrow().
// This ensures that Jest evaluates the function call only when running the test, allowing it to catch the thrown error.