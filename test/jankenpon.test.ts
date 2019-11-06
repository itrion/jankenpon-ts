import {jankenpon} from "../src/jankenpon";

describe('jankenpon', () => {
    test('Rock vs Rock', () => {
        expect(jankenpon('Rock', 'Rock')).toBe('Draw')
    });

    test('Rock vs Paper', () => {
        expect(jankenpon('Rock', 'Paper')).toBe('Paper')
    });

    test('Rock vs Scissors', () => {
        expect(jankenpon('Rock', 'Scissors')).toBe('Rock')
    });

    test('Paper vs Rock', () => {
        expect(jankenpon('Paper', 'Rock')).toBe('Paper')
    });

    test('Paper vs Paper', () => {
        expect(jankenpon('Paper', 'Paper')).toBe('Draw')
    });

    test('Paper vs Scissors', () => {
        expect(jankenpon('Paper', 'Scissors')).toBe('Scissors')
    });

    test('Scissors vs Rock', () => {
        expect(jankenpon('Scissors', 'Rock')).toBe('Rock')
    });

    test('Scissors vs Paper', () => {
        expect(jankenpon('Scissors', 'Paper')).toBe('Scissors')
    });

    test('Scissors vs Scissors', () => {
        expect(jankenpon('Scissors', 'Scissors')).toBe('Draw')
    });
});