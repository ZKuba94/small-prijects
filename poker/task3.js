// TASK 3
const cardsOnHand = [{figure: 'J', color:'diamond'},{figure: 'K', color:'diamond'},
    {figure: 'Q', color:'diamond'},{figure: '10', color:'diamond'}, {figure: 'A', color:'diamond'}]
const cards = [
    {figure: '2',
    color: 'spade',
    value: 2,},
    {figure: '2',
        color: 'heart',
        value: 2,},
    {figure: '2',
        color: 'diamond',
        value: 2,},
    {figure: '2',
        color: 'club',
        value: 2,},
    {figure: '3',
        color: 'spade',
        value: 3,},
    {figure: '3',
        color: 'heart',
        value: 3,},
    {figure: '3',
        color: 'diamond',
        value: 3,},
    {figure: '3',
        color: 'club',
        value: 3,},
    {figure: '4',
        color: 'spade',
        value: 4,},
    {figure: '4',
        color: 'heart',
        value: 4,},
    {figure: '4',
        color: 'diamond',
        value: 4,},
    {figure: '4',
        color: 'club',
        value: 4,},
    {figure: '5',
        color: 'spade',
        value: 5,},
    {figure: '5',
        color: 'heart',
        value: 5,},
    {figure: '5',
        color: 'diamond',
        value: 5,},
    {figure: '5',
        color: 'club',
        value: 5,},
    {figure: '6',
        color: 'spade',
        value: 6,},
    {figure: '6',
        color: 'heart',
        value: 6,},
    {figure: '6',
        color: 'diamond',
        value: 6,},
    {figure: '6',
        color: 'club',
        value: 6,},
    {figure: '7',
        color: 'spade',
        value: 7,},
    {figure: '7',
        color: 'heart',
        value: 7,},
    {figure: '7',
        color: 'diamond',
        value: 7,},
    {figure: '7',
        color: 'club',
        value: 7,},
    {figure: '8',
        color: 'spade',
        value: 8,},
    {figure: '8',
        color: 'heart',
        value: 8,},
    {figure: '8',
        color: 'diamond',
        value: 8,},
    {figure: '8',
        color: 'club',
        value: 8,},
    {figure: '9',
        color: 'spade',
        value: 9,},
    {figure: '9',
        color: 'heart',
        value: 9,},
    {figure: '9',
        color: 'diamond',
        value: 9,},
    {figure: '9',
        color: 'club',
        value: 9,},
    {figure: '10',
        color: 'spade',
        value: 10,},
    {figure: '10',
        color: 'heart',
        value: 10,},
    {figure: '10',
        color: 'diamond',
        value: 10,},
    {figure: '10',
        color: 'club',
        value: 10,},
    {figure: 'J',
        color: 'spade',
        value: 11,},
    {figure: 'J',
        color: 'heart',
        value: 11,},
    {figure: 'J',
        color: 'diamond',
        value: 11,},
    {figure: 'J',
        color: 'club',
        value: 11,},
    {figure: 'Q',
        color: 'spade',
        value: 12,},
    {figure: 'Q',
        color: 'heart',
        value: 12,},
    {figure: 'Q',
        color: 'diamond',
        value: 12,},
    {figure: 'Q',
        color: 'club',
        value: 12,},
    {figure: 'K',
        color: 'spade',
        value: 13,},
    {figure: 'K',
        color: 'heart',
        value: 13,},
    {figure: 'K',
        color: 'diamond',
        value: 13,},
    {figure: 'K',
        color: 'club',
        value: 13,},
    {figure: 'A',
        color: 'spade',
        value: 14,},
    {figure: 'A',
        color: 'heart',
        value: 14,},
    {figure: 'A',
        color: 'diamond',
        value: 14,},
    {figure: 'A',
        color: 'club',
        value: 14,},
]

const checkCards = cardsOnHand => {

    if (checkRoyalFlush(cardsOnHand) !== false) {
        return
    } else if (checkStraightFlush(cardsOnHand) !== false) {
        return
    } else if (checkFourOfAKind(cardsOnHand) !== false) {
        return
    } else if (checkFullHouse(cardsOnHand)!== false) {
        return
    } else if (checkThreeOrLess(cardsOnHand) !== false) {
        return
    }
}
// Helping functions
const sumValue = cardsOnHand => {
    let sum = 0;
    for (let i =0; i<5; i++) {
        const card = cards.find(card => card.figure === cardsOnHand[i].figure);
        sum += card.value
    }
    return sum
}
const checkSameColor = cardsOnHand => {
    let firstCardColor = cardsOnHand[0].color
    let checkColor = cardsOnHand.every(function(card) {
        return card.color === firstCardColor
    })
    return checkColor
    }
const sortValues = cardsValues => {
    let sortedValues = [];
    const arrayLength = cardsValues.length;
    for (let i = 0; i < arrayLength; i++) {
        let x = Math.min(...cardsValues);
        cardsValues.indexOf(x);
        cardsValues.splice(cardsValues.indexOf(x), 1);
        sortedValues.push(x);
    }
    return sortedValues;
}
const checkStraight = cardsOnHand => {
    let cardsValues = []
    for (let i=0;i<cardsOnHand.length; i++) {
        let card = cards.find(card => card.figure === cardsOnHand[i].figure)
        cardsValues.push(card.value)
    }
    cardsValues = sortValues(cardsValues)
    if (cardsValues[0]===(cardsValues[1]-1) && cardsValues[1]===(cardsValues[2]-1) &&
        cardsValues[2]===(cardsValues[3]-1) && cardsValues[3]===(cardsValues[4]-1)) {
    return true
    } return false
}
const checkPairs = (cardsValues, figure) => {
    const restValues = cardsValues.filter(value => value !== figure.value)
    const result = restValues.reduce((acc,currentValue)=> {
        if (acc[currentValue]) {
            acc[currentValue]++
        } else {
            acc[currentValue] = 1
        }
        return acc
    }, {})
    for (const counter in result) {
        if (result[counter]===2) {
            let secondPair = cards.find(card=>card.value === Number.parseFloat(counter))
            return console.log(`You have Two Pairs of: ${figure.figure} and ${secondPair.figure}`)
        }
    }
    return console.log(`You have One Pair of: ${figure.figure}`)
}
// Main Functions
const checkRoyalFlush = cardsOnHand => {
    const royalHand = (cards.find(card => card.value === 14).value + cards.find(card => card.value === 13).value +
        cards.find(card => card.value === 12).value + cards.find(card => card.value === 11).value +
        cards.find(card => card.value === 10).value)
    const cardsOnHandSum = sumValue(cardsOnHand)
    if (cardsOnHandSum === royalHand) {
        if (checkSameColor(cardsOnHand)) {
            console.log('You have a Royal Flush!')
        } else return false
    } else return false
}
const checkStraightFlush = cardsOnHand => {
    if (checkSameColor(cardsOnHand)) {
      if (checkStraight(cardsOnHand)) {
          return console.log('You have a Straight Flush!')
      } else {
          return console.log('You have a Flush.')
      }
    } else if (checkStraight(cardsOnHand)) {
        return console.log('You have a Straight.')
    }
    return false
}
const checkFourOfAKind = cardsOnHand => {
    let checkFour = cardsOnHand.filter(card=> card.figure === cardsOnHand[0].figure)
    if (checkFour.length === 4) {
        return console.log(`You have Four of a kind : ${cardsOnHand[0].figure}!`)
    }
    checkFour = cardsOnHand.filter(card=> card.figure === cardsOnHand[1].figure)
    if (checkFour.length === 4) {
        return console.log(`You have Four of a kind : ${cardsOnHand[1].figure}!`)
    }
    return false
}
const checkFullHouse = cardsOnHand => {
    let cardsValues = []
    let firstFigure;
    let secondFigure;
    for (let i=0;i<cardsOnHand.length; i++) {
        let card = cards.find(card => card.figure === cardsOnHand[i].figure)
        cardsValues.push(card.value)
    }
    for (let i=1;i<cardsOnHand.length;i++) {
        if (cardsValues[0]!==cardsValues[i]) {
            firstFigure = cardsValues[0]
            secondFigure = cardsValues[i]
        }
    }
    let checkFirst = cardsValues.filter(card=> card === firstFigure)
    let checkSecond = cardsValues.filter(card=> card === secondFigure)
    if (checkFirst.length === 3 && checkSecond.length === 2) {
        const firstCard = cards.find(card => card.value === firstFigure)
        const secondCard = cards.find(card => card.value === secondFigure)
        return console.log(`You have FullHouse with: three ${firstCard.figure} and two ${secondCard.figure}!`)
    } else if (checkFirst.length ===2 && checkSecond.length===3) {
        const firstCard = cards.find(card => card.value === secondFigure)
        const secondCard = cards.find(card => card.value === firstFigure)
        return console.log(`You have FullHouse with: three ${firstCard.figure} and two ${secondCard.figure}!`)
    }
    return false
}
const checkThreeOrLess = cardsOnHand => {
    let cardsValues =[]
    let maxValue=0;
    let figureValue;
    for (let i=0;i<cardsOnHand.length; i++) {
        let card = cards.find(card => card.figure === cardsOnHand[i].figure)
        cardsValues.push(card.value)
    }
    const result = cardsValues.reduce((acc,currentValue)=> {
        if (acc[currentValue]) {
            acc[currentValue]++
        } else {
            acc[currentValue] = 1
        }
        return acc
    }, {})
    for (const counter in result) {
        if (result[counter]>maxValue) {
            maxValue = result[counter]
        }}
    for (const key in result) {
        if (result[key] === maxValue) {
            figureValue = parseFloat(key)
        }
    }
    const figure = cards.find(card=>card.value===figureValue)
    if (maxValue === 3) {
        return console.log(`You have a Three of a kind: ${figure.figure}.`)
    } else if (maxValue === 2) {
       checkPairs(cardsValues, figure)
    } else {
        const highestCard = Math.max(...cardsValues)
        return console.log(`Highest card is: ${cards.find(card=>card.value===highestCard).figure}!`)
    }
    return false
}
checkCards(cardsOnHand);
