const forEach = (items, callback) => {
    for (let i=1; i< items.length; i++){
        callback(items[i])
    }
}



// Crate a mock function in Jest: jest.fn()
// const mock = (x) => x + 42

it('mock callback', ()=>{
    const mockCallback = jest.fn(x => x + 42)

    forEach([0,1], mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2)
})