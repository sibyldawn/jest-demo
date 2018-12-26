const houseForSale = require('../object/houseForSale')

test('this house has my desired features', () => {
    // Simple Referencing
    expect(houseForSale).toHaveProperty('bath');
    expect(houseForSale).toHaveProperty('bedrooms', 4);
  
    expect(houseForSale).not.toHaveProperty('pool');
  
    // Deep referencing using dot notation
    expect(houseForSale).toHaveProperty('kitchen.area', 20);
    expect(houseForSale).toHaveProperty('kitchen.amenities', [
      'oven',
      'stove',
      'washer',
    ]);
  
    expect(houseForSale).not.toHaveProperty('kitchen.open');
  
    // Deep referencing using an array containing the keyPath
    expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
    expect(houseForSale).toHaveProperty(
      ['kitchen', 'amenities'],
      ['oven', 'stove', 'washer'],
    );
    expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
    expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
    expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
  
    // Referencing keys with dot in the key itself
    expect(houseForSale).toHaveProperty(['ceiling.height'], 2);
  });