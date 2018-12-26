const sum = require('../calculator/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('adds 3 + 4 to not equal 5', () => {
    expect(sum(3,4)).not.toBe(5)
})

test('sum should be a function', () => {
    expect(typeof sum).toBe('function');
})

