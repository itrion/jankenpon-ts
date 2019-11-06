interface Shape {
    vs(other: Shape): string;
}

const Rock = {
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

export type ShapeName = 'Rock' | 'Paper' | 'Scissors'

export function shape(shapeName: ShapeName): Shape {
    return shapes[shapeName]
}