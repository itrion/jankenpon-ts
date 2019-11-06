function jankenpon(one: string, other: string) {
    return 'Draw'
}

describe('jankenpon', () => {
    test('Rock vs Rock', () => {
        expect(jankenpon('Rock', 'Rock')).toBe('Draw')
    });
});