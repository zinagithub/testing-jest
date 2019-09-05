const functions = require('./functions');

describe('Calculator functions', () => {
	describe('When calling add function', () => {
		test('it should return 3 when adding 1 and 2', () => {
            expect(functions.add(1, 2)).toBe(3);
		});

		test ('it should not return 4 when adding 1 and 2 ', () => {
			expect(functions.add(1, 2)).not.toBe(4);
		});
		test ('it should return the value of the argument when thre is one argument', () => {
			expect(functions.add(1)).toBe(1)
		});
	});

	describe('When calling sub function', () => {});

	describe('When calling multiply function', () => {});

	describe('When calling divide function', () => {});
});

