const houseForSale = require('../object/houseForSale')

describe('this house has my desired features', () => {

    it('should be an object', () => {
        expect(typeof houseForSale).toBe('object')
    })
    
    it("should have the desired properties", () => {
       expect(houseForSale).toHaveProperty('bath');
       expect(houseForSale).toHaveProperty('bedrooms', 4);
       expect(houseForSale).not.toHaveProperty('pool');
    })
    
    it("should have desired kitchen", () => {
        // Deep referencing using dot notation
        expect(houseForSale).toHaveProperty('kitchen.area', 20);
        expect(houseForSale).toHaveProperty('kitchen.amenities', [
         'oven',
         'stove',
         'washer',
        ]);
    })
    
    it("should not have a property kitchen.open", () => {
        expect(houseForSale).not.toHaveProperty('kitchen.open');
    })
    
    it("should have desired property values", () => {
         // Deep referencing using an array containing the keyPath
        expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
        expect(houseForSale).toHaveProperty(
          ['kitchen', 'amenities'],
          ['oven', 'stove', 'washer'],
        );
        expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
        expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
        expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
    })
   
    it("should have a ceiling height of high", () => {
          
        // Referencing keys with dot in the key itself
        expect(houseForSale).toHaveProperty(['ceiling.height'], 'high');
    })

  });