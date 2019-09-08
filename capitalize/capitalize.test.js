const capy = require('./capitalize');

describe('Capitalize function', () => {
	test('it should return Microverse when the argument is microverse', () => {
		expect(capy('microverse')).toEqual('Microverse')
	});

	test('it should capitalize the first charactere different of space', () => {
		expect(capy('   microverse')).toEqual('   Microverse')
	});

	test('it should return 123 when the argument is 123', () => {
		expect(capy('123')).toEqual('123')
	});

	test('it should return 123A when the argument is 123a', () => {
		expect(capy('123a')).toEqual('123A')
	});

	test('it should return nothing  when the argument is nothing', () => {
		expect(capy()).toEqual('')
	});
});

