const functions = require('./functions');

test('Adds 1 + 2 to equal 3', () => {
  expect(functions.add(1, 2)).toBe(3);
});

test ('Adds 1 + 2 to not equal 4', () => {
	expect(functions.add(1, 2)).not.toBe(4);
})
test ('return the value of the argument when thre is one argument', () => {
	expect(functions.add(1)).toBe(1)
})