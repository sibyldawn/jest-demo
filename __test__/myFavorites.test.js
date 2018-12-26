const myFavorites = require('../object/myFavorites');


//We do fill in the test titles
//You do write the expects
describe('I completed my favorites list', () => {

    test('It should be an object', () => {
        expect(typeof myFavorites).toBe('object')
    })

    test('It should have my first name.', () => {
        expect(myFavorites).toHaveProperty('firstName')
    })

    test('It should have my last name.', () => {
        expect(myFavorites).toHaveProperty('lastName')
    })

    test('It should have my an object with my favorites.', () => {
        expect(myFavorites).toHaveProperty('favorites')
        expect(typeof myFavorites.favorites).toBe('object')
    })

    test('It should have an array of favorite foods.', () => {
        expect(Array.isArray(myFavorites.favorites.food)).toBe(true)
    })

    test('It should have favorite color as a string', () => {
        expect(typeof myFavorites.favorites.color).toBe('string')
    })

    test("It should have an array of at least 3 favorite cuisines",() => {
        let cuisine = myFavorites.favorites.cuisine
        expect(cuisine.length).toBeGreaterThanOrEqual(3)
    })

    test("Favorite.diet should be defined", () => {
        expect(myFavorites.favorites.diet).toBeDefined()
    })

    test("It should have a property favorite holiday.", () => {
        expect(myFavorites.favorites).toHaveProperty('holiday')
    })

    test("It should have a valid favorite.number from 1-100.", () => {
        let num = myFavorites.favorites.number
        expect(num.toString()).toMatch(/^([1-9]|[1-9]\d|100)$/)
    })

})