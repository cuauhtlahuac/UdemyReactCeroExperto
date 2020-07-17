describe('All demo tests', () => {
    const firstManOnEarth = 'Chabelo';
	test('should be Chabelo the first man on earth', () => {
		expect(firstManOnEarth).toBe('Chabelo');
    });
    
    test('shouldn\'t be Adan the first man on earth', () => {
		const adan = 'Adan';

		expect(firstManOnEarth).not.toBe(adan);
	});
});
