const functions = require('./functions');
//test('', () => {});

describe('Calculator functions', () => {
	describe('When calling add function', () => {
		test('it should return 3 when adding 1 and 2', () => {
            expect(functions.add(1, 2)).toBe(3);
		});

		test ('it should not return 4 when adding 1 and 2 ', () => {
			expect(functions.add(1, 2)).not.toBe(4);
		});
		test ('it should return the value of the argument when there is one argument', () => {
			expect(functions.add(1)).toBe(1)
		});
		test('adding floating point numbers', () => {
			expect(functions.add(0.1, 0.2)).toBeCloseTo(0.3); 
		});
		test('it should return 0 if no argument is specified', () => {
			expect(functions.add()).toBeFalsy();
		});
	});

	describe('When calling sub function', () => {
		test('it should return 1 when subtract 1 from 2', () => {
			expect(functions.sub(2, 1)).toBe(1);
		});
		test('it should return negative result  when subtract 2 from 1', () => {
			expect(functions.sub(1, 2)).toBeLessThan(1);
		});
		test ('it should return the value of the argument when there is one argument', () => {
			expect(functions.sub(1)).toBe(1)
		});
		test('adding floating point numbers', () => {
  			expect(functions.sub(0.2, 0.1)).toBeCloseTo(0.1); 
		});
		test('it should return 0 if no argument is specified', () => {
			expect(functions.sub()).toBeFalsy();
		});

	});

	describe('When calling multiply function', () => {
		test('it should return 16 when multiply 4 by 4', () => {
			expect(functions.multiply(4, 4)).toBe(16);
		});
		test('it should return positive value when multiply -4 by -4 or 4 by 4', () => {
			expect(functions.multiply(-4, -4)).toBeGreaterThan(0);
			expect(functions.multiply(4, 4)).toBeGreaterThan(0);
		});
		test('it should return negative value when multiply -4 by -4', () => {
			expect(functions.multiply(4, -4)).toBeLessThan(0);
		});
		test('it should return 0 if one argument is equal to zero specified', () => {
			expect(functions.multiply(0, 999)).toBeFalsy();
		});
		test('it should return 0 if no argument is specified', () => {
			expect(functions.multiply()).toBeFalsy();
		});
		test ('it should return the value of the argument when there is one argument', () => {
			expect(functions.multiply(1)).toBe(1)
		});
	});

	describe('When calling divide function', () => {});
});

