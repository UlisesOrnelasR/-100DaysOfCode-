const sum = require('./../app/sum.js');

describe('Test para contexto',() => {
    
    test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    });
    
    
    test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    });
})