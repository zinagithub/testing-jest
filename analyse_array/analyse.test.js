const myAnalyse = require('./analyse');

describe('Analyse array function', () => {

    it('should returns an object when calling analyse_([1,8,3,4,2,6])', () => {
        expect(typeof myAnalyse([1,8,3,4,2,6])).toBe('object');
    });

    it('should returns 4 as the average of the array [1,8,3,4,2,6]', () => {
       expect(myAnalyse([1,8,3,4,2,6]).average).toEqual(4);
    });
    it('should returns 1 as the minimum value of array [1,8,3,4,2,6]', () => {
       expect(myAnalyse([1,8,3,4,2,6]).min).toEqual(1);
    });

    it('should returns 8 as the maximum of the array [1,8,3,4,2,6]', () => {
       expect(myAnalyse([1,8,3,4,2,6]).max).toEqual(8);
    });

    it('should returns 6 as the length of the array [1,8,3,4,2,6]', () => {
       expect(myAnalyse([1,8,3,4,2,6]).length).toEqual(6);
    });
});