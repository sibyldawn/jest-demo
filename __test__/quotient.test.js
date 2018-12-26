const quotient = require('../calculator/quotient')

let result;

describe('quotient is passing', () => {

    test("quotient is a function", () => {
        expect(typeof quotient).toBe('function')
    })

    test.each([[4, 2, 2], [6, 2, 3], [30, 10, 3]])(
        'quotient of (%i, %i)',
        (a, b, expected) => {
          expect(quotient(a,b)).toBe(expected);
        },
      );

})