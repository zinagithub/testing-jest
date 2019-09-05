const capy = require('./capitalize');
//test('', () => {});
test('it should return Zina if the argument zina', () => {
	expect(capy('zina')).toEqual('Zina')
});