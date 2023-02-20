// TASK 3
const cardsOnHand = [{figure: '6', color: 'club'}, {figure: '9', color: 'diamond'},
    {figure: '6', color: 'diamond'}, {figure: '8', color: 'diamond'}, {figure: '9', color: 'diamond'}]
let cardsValues;
// const color = ['club', 'diamond', 'spade', 'heart'];
// const values = Array.from(Array(13).keys()).map(i => i + 2)
// const cardsNew = values.reduce((prev, next) => [...prev, ...color.map(color => ({color, value: next}))], []);
// Initialization function
const checkCards = hand => {
    return checkRoyalFlush(hand)
        || checkStraightFlush(hand)
        || checkFourOfAKind(hand)
        || checkFullHouse(hand)
        || checkThreeOrLess();
}

// Helping functions
const getFigure = (value) => {
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
const getValue = (figure) => {
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
const checkCardsValues = hand => {
    cardsValues = [];
    for (let i = 0; i < hand.length; i++) {
        let card = getValue(hand[i].figure)
        cardsValues.push(card)
    }
    return cardsValues;
}
const sumValue = hand => {
    let sum = 0;
    for (let i = 0; i < hand.length; i++) {
        const card = getValue(hand[i].figure)
        sum += card
    }
    return sum
}
const checkSameColor = hand => {
    let firstCardColor = hand[0].color
    let checkColor = hand.every(card => card.color === firstCardColor)
    return checkColor
}
const sortValues = hand => {
    checkCardsValues(hand)
    // let sortedValues = [];
    if (hand === undefined || hand.length === 0) {
        return console.log('Empty array');
    }
    return hand.sort((a, b) => a-b);
    // return sortedValues;
}
const checkStraight = hand => {
    cardsValues = sortValues(hand);
    // return cardsValues.every((item, index, array) => {
    //     if (index === 0) {
    //         return true;
    //     }
    //     const sub = item - array[index - 1];
    //     return Math.abs(sub) === 1;
    // })

    return cardsValues[0] === (cardsValues[1] - 1) &&
        cardsValues[1] === (cardsValues[2] - 1) &&
        cardsValues[2] === (cardsValues[3] - 1) &&
        cardsValues[3] === (cardsValues[4] - 1);
}
const checkPairs = (figureValue) => {
    const restValues = cardsValues.filter(value => value !== figureValue)
    const countedCards = restValues.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    for (const counter in countedCards) {
        if (countedCards[counter] === 2) {
            console.log(`You have Two Pairs of: ${getFigure(figureValue)} and ${getFigure(parseFloat(counter))}`)
            return true
        }
    }
    console.log(`You have One Pair of: ${getFigure(figureValue)}`)
    return true
}

// Main Functions +1
const checkRoyalFlush = hand => {
    const royalHand =
        getValue('A') +
        getValue('K') +
        getValue('Q') +
        getValue('J') +
        getValue('10')
    const cardsOnHandSum = sumValue(hand)
    if (cardsOnHandSum === royalHand && checkSameColor(hand)) {
        console.log('You have a Royal Flush!')
        return true;
    }
}
const checkStraightFlush = hand => {
    if (checkSameColor(hand) && checkStraight(hand)) {
        console.log('You have a Straight Flush!')
        return true;
    } else if (checkSameColor(hand)) {
        console.log('You have a Flush.')
        return true
    } else if (checkStraight(hand)) {
        console.log('You have a Straight.')
        return true
    } else return false
}
const checkFourOfAKind = hand => {
    if ((hand.filter(card => card.figure === hand[0].figure)).length === 4) {
        console.log(`You have Four of a kind : ${hand[0].figure}!`)
        return true
    } else if ((hand.filter(card => card.figure === hand[1].figure)).length === 4) {
        console.log(`You have Four of a kind : ${hand[1].figure}!`)
        return true
    } else return false
}
const checkFullHouse = hand => {
    let firstFigure;
    let secondFigure;
    checkCardsValues(hand)
    for (let i = 1; i < hand.length; i++) {
        if (cardsValues[0] !== cardsValues[i]) {
            firstFigure = cardsValues[0]
            secondFigure = cardsValues[i]
        }
    }
    let checkFirst = cardsValues.filter(card => card === firstFigure)
    let checkSecond = cardsValues.filter(card => card === secondFigure)
    if (checkFirst.length === 3 && checkSecond.length === 2) {
        console.log(`You have FullHouse with: three ${getFigure(firstFigure)} and two ${getFigure(secondFigure)}!`)
        return true
    } else if (checkFirst.length === 2 && checkSecond.length === 3) {
        console.log(`You have FullHouse with: three ${getFigure(firstFigure)} and two ${getFigure(secondFigure)}!`)
        return true
    } else return false
}
const checkThreeOrLess = () => {
    let maxCounter = 0;
    let figureValue;
    const countedCards = cardsValues.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    for (const counter in countedCards) {
        if (countedCards[counter] > maxCounter) {
            maxCounter = countedCards[counter]
        }
    }
    for (const key in countedCards) {
        if (countedCards[key] === maxCounter) {
            figureValue = parseFloat(key)
        }
    }
    if (maxCounter === 3) {
        console.log(`You have a Three of a kind: ${getFigure(figureValue)}.`)
        return true
    } else if (maxCounter === 2) {
        checkPairs(figureValue)
    } else {
        const highestCard = Math.max(...cardsValues)
        console.log(`Highest card is: ${getFigure(highestCard)}!`)
        return true
    }
}
checkCards(cardsOnHand);
