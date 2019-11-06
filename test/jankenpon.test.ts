interface Shape {
    vs(other: Rock): string;
}

type Rock = Shape;
type Paper = Shape;
type Scissors = Shape;

const Rock: Rock = {
    vs: (other: Shape): string => {
        switch (other) {
            case Rock: {
                return 'Draw';
            }
            case Paper: {
                return 'Paper'
            }
            case Scissors: {
                return 'Rock'
            }
        }
        return 'Unknown'
    }
};

const Paper = {
    vs: (other: Shape): string => {
        switch (other) {
            case Rock: {
                return 'Paper';
            }
            case Paper: {
                return 'Draw'
            }
            case Scissors: {
                return 'Scissors'
            }
        }
        return 'Unknown'
    }
};

const Scissors = {
    vs: (other: Shape): string => {
        switch (other) {
            case Rock: {
                return 'Rock';
            }
            case Paper: {
                return 'Scissors'
            }
            case Scissors: {
                return 'Draw'
            }
        }
        return 'Unknown'
    }
};

const shapes = {
    'Rock': Rock,
    'Paper': Paper,
    'Scissors': Scissors
};

type ShapeName = 'Rock' | 'Paper' | 'Scissors'

function shape(shapeName: ShapeName): Shape {
    return shapes[shapeName]
}

function jankenpon(one: ShapeName, other: ShapeName) {
    return shape(one).vs(shape(other))
}

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