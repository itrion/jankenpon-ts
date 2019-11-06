function jankenpon(one: string, other: string) {
    return other === one ?
        'Draw' :
        'Paper';
}

describe('jankenpon', () => {
    test('Rock vs Rock', () => {
        expect(jankenpon('Rock', 'Rock')).toBe('Draw')
    });

    test('Rock vs Paper', () => {
        expect(jankenpon('Rock', 'Paper')).toBe('Paper')
    });
});