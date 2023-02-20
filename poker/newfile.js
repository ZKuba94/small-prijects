const example = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14, // trailing comma
}

console.log(Object.values(example))
console.log(Object.keys(example))
console.log(Object.entries(example))
//
// console.log(0.3 - 0.2)
// console.log(+'2')// Number()
// console.log(!!1) // Boolean()
// console.log(`${1}`) // String() / .toString()

import {getValue, getFigure} from "./helpers/getValue";


const sortByValues = (hand) => hand.sort((a, b) => getValue(a.figure) - getValue(b.figure));

const hasCopies = (hand) => {

}


const checkStraight = (hand) => {
    return hand.every((item, index, array) => {
        if (index === 0) {
            return true;
        }
        const sub = getValue(item) - getValue(array[index - 1]);
        return Math.abs(sub) === 1;
    }) && 'U got Straight'
}

const checkStraightFlush = (hand) => {
    if (checkStraight(hand) && checkSameColor(hand)) {
        return 'U got Straight Flush lucky guy'
    }
    return false;
}

const checkRoyalFlush = (hand) => {
    if(checkStraightFlush(hand) && hand[0].figure === 'A'){
        return 'U got gotRoyalFlush'
    }
    return false;
}

const getPokerResult = (hand) => {
    const sortedHand = sortByValues(hand)
    return checkRoyalFlush(sortedHand)
        || checkStraightFlush(sortedHand)
        || checkSameColor(sortedHand)
        || checkFourOfAKind(sortedHand)
        || checkFullHouse(sortedHand)
        || checkThreeOrLess(sortedHand);
}



const cardsOnHand = [{figure: '6', color: 'club'}, {figure: '6', color: 'diamond'},
    {figure: '6', color: 'diamond'}, {figure: '8', color: 'diamond'}, {figure: '9', color: 'diamond'}]

// console.log(getPokerResult(cardsOnHand));