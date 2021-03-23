const sayHelloWorld = (param) => {
    return param
}

test('Should say hello word!', () => {
    expect(sayHelloWorld('hello word!')).toBe('hello word!')
})
