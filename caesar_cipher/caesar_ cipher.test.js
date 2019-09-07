const caesar = require('./caesar_ cipher');
//i took these tests from the challenge caesar cipher of hackerrank.com
describe('caesar cipher function', () => {
	test('it should return "Lipps_Asvph!" when argument are ("Ciphering.",4)', () => {
		expect(caesar('Hello_World!',4)).toEqual('Lipps_Asvph!')
	});
	test('it should return "Ciphering." when argument are ("Ciphering.",26)', () => {
		expect(caesar('Ciphering.',26)).toEqual('Ciphering.')
	});
	test('it should return "fff.jkl.gh" when argument are ("www.abc.xy",87)', () => {
		expect(caesar('www.abc.xy',87)).toEqual('fff.jkl.gh')
	});
	test('it should return "159357fwzx" when argument are ("159357lcfd",98)', () => {
		expect(caesar('159357lcfd',98)).toEqual('159357fwzx')
	});
	test('it should return "D3q4" when argument are ("D3q4",0)', () => {
		expect(caesar('D3q4',0)).toEqual('D3q4')
	});
	test('it should return "okffng-Qwvb" when argument are ("middle-Outz",0)', () => {
		expect(caesar('middle-Outz',2)).toEqual('okffng-Qwvb')
	});
});