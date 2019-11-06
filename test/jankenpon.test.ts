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
        return 'Unknown'
    }
};

const Scissors = {
    vs: (other: Shape): string => {
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
});