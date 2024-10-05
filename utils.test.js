const { sum, shoppingList, compileAndroidCode, fetchData } = require('./utils');

test('adds 1 + 2 equals 3', () =>{
    expect(sum(1,2)).toBe(3)
});


test("adding positive numbers is not zero", () => {
    for(let a=1; a<10; a++){
        for(let b=1; b<10; b++){
            expect(a+b).not.toBe(0)
        }
    }
})

// Truthiness

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });


//   Compare Numbers 

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

//   Floating Numbers : Use toBeCloseTo matcher

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });


//   Strings

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });


//  Arrays and Iterables

test('shopping list has milk on it', () =>{
    expect(shoppingList).toContain('milk')
})

// Test whether a particular function throws an error when it's called

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // Or you can match an exact error message using a regexp like below
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });


// Test for asynchronous code
 
// Promises

test('the data is Mr Peanut Butter', () =>{
    return fetchData().then(data =>{
      expect(data).toBe('Mr Peanut Butter')
    })
})

// Async/Await

test('the data is Mr Peanut Butter', async () => {
  const data = await fetchData();
  expect(data).toBe('Mr Peanut Butter');
});

// If you expect a promise to be rejected, use the .catch method. Make sure to add expect.assertions
//  to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test.

test('the fetch fails with an error', async () => {
  expect.assertions(1);  // ensures that exactly one assertion(check) is called during the test.
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch('error');
  }
});
