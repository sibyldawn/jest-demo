const product = require('../calculator/product');

let result;

describe('product is passing', () => {

    beforeAll( () => {
        result = product(5,10)
    })

    test("product is a function", () => {
        expect(typeof product).toBe('function')
    })

    test("result to be defined", () => {
        expect(result).toBeDefined()
    })

    test("result is equal to 50", () => {
        expect(result).toEqual(50)
    })

    test("result not to equal 100", () => {
        expect(result).not.toEqual(100)
    })

    afterAll( () => {
        console.log("This is the result:", result)
    })

})
