const difference = require('../calculator/difference');

describe('difference function is passing', () => {

    it("should be a function", () => {
        expect(typeof difference).toBe('function')
    });

    it("should give a result of 7 given 17 and 10", () => {
        let result = difference(17,10)
        expect(result).toBe(7)
    })

    it("should not give a result of 9 given 20 and 10", () => {
        let result = difference(20,10)
        expect(result).not.toBe(9)
    })
})