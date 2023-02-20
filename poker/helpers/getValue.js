export const getValue = (figure) => {
    switch (figure) {
        case 'J':
            return 11
        case 'Q':
            return 12
        case 'K':
            return 13
        case 'A':
            return 14
        default:
            return  +figure; //Number(figure);
    }
}

export const getFigure = (value) => {
    switch (value) {
        case 11:
            return 'J'
        case 12:
            return 'Q'
        case 13:
            return 'K'
        case 14:
            return 'A'
        default:
            return value.toString();
    }
}