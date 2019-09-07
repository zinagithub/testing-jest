const reverse = require('./reverse');
//test('', () => {});
describe('Reverse function', () => {
	test('it should return esrevorcim when the argument is microverse', () => {
		expect(reverse('microverse')).toEqual('esrevorcim')
	});

	test('it should return a when the argument is a', () => {
		expect(reverse('a')).toEqual('a')
	});

	test('it should return nothing  when the argument is nothing', () => {
		expect(reverse()).toEqual('')
	});
});
