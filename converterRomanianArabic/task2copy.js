// TASK 2
const array2 = [9, 15, 68, 120, 677, 1340, 2789, 'mcc'];
const array = ['iv', 'xi', 'xl','xc','cm', 'mc','cd',60];
const romanianNumbers = [
    {
        symbol: 'I',
        value: 1,
    },
    {
        symbol: 'V',
        value: 5,
    },
    {
        symbol: 'X',
        value: 10,
    },
    {
        symbol: 'L',
        value: 50,
    },
    {
        symbol: 'C',
        value: 100,
    },
    {
        symbol: 'D',
        value: 500,
    },
    {
        symbol: 'M',
        value: 1000,
    },
];
let convertedNumbers = [];
let units = [];
let tens = [];
let hundreds = [];
let thousands = [];
let convertedRomanianNumber = '';
let romanianValue = [];
let convertedArabicNumber = 0;
const converterRomanianArabicNumbers = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            checkArabicValue(arr[i]);
        } else if (typeof arr[i] === 'string') {
            checkRomanianValue(arr[i].toUpperCase());
        }
    }
    return console.log(array, convertedNumbers);
};
// Arabic to Romanian converter
const checkArabicValue = arabicNr => {
    if (arabicNr <= 10 && arabicNr > 0) {
        getUnits(arabicNr);
        return convertedNumbers.push(...units);
    } else if (arabicNr > 10 && arabicNr < 100) {
        const unitsNumber = arabicNr % 10;
        const tensNumber = (arabicNr - unitsNumber) / 10;
        getTens(tensNumber);
        getUnits(unitsNumber);
        const twoDigitsRoman = tens.concat(units);
        return convertedNumbers.push(twoDigitsRoman.join(''));
    } else if (arabicNr >= 100 && arabicNr < 1000) {
        const unitsNumber = (arabicNr % 100) % 10;
        const tensNumber = ((arabicNr % 100) - unitsNumber) / 10;
        const hundredsNumber = (arabicNr - tensNumber - unitsNumber) / 100;
        getHundreds(hundredsNumber);
        getTens(tensNumber);
        getUnits(unitsNumber);
        const threeDigitsRoman = hundreds.concat(tens.concat(units));
        return convertedNumbers.push(threeDigitsRoman.join(''));
    } else if (arabicNr >= 1000 && arabicNr < 4000) {
        const unitsNumber = ((arabicNr % 1000) % 100) % 10;
        const tensNumber = (((arabicNr % 1000) % 100) - unitsNumber) / 10;
        const hundredsNumber = ((arabicNr % 1000) - tensNumber * 10 - unitsNumber) / 100;
        const thousandsNumber = (arabicNr - hundredsNumber * 100 - tensNumber * 10 - unitsNumber) / 1000;
        getThousands(thousandsNumber);
        getHundreds(hundredsNumber);
        getTens(tensNumber);
        getUnits(unitsNumber);
        const fourDigitsRoman = thousands.concat(hundreds.concat(tens.concat(units)));
        return convertedNumbers.push(fourDigitsRoman.join(''));
    } else return convertedNumbers.push('Out of Romanian numbers scope');
};
const getIndexOfRomanianNumber = arabicNr => {
    if (romanianNumbers.find(digitObject => digitObject.value === arabicNr)) {
        const digitObject = romanianNumbers.find(digitObject => digitObject.value === arabicNr);
        return (convertedRomanianNumber = digitObject.symbol);
    } else return false;
};
const getUnits = arabicNumber => {
    units = [];
    convertedRomanianNumber = '';
    if (getIndexOfRomanianNumber(arabicNumber) === false) {
        if (arabicNumber % 5 < 4 && arabicNumber < 4)
            // Digits from 1 to 3
            return units.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[0].symbol));
        else if (arabicNumber % 5 < 4 && arabicNumber > 4)
            // Digits from 6 to 8
            return units.push(
                convertedRomanianNumber
                    .padStart(1, romanianNumbers[1].symbol)
                    .padEnd(arabicNumber - 4, romanianNumbers[0].symbol)
            );
        else if (arabicNumber === 4)
            return units.push(
                convertedRomanianNumber.padStart(1, romanianNumbers[0].symbol).padEnd(2, romanianNumbers[1].symbol)
            );
        else if (arabicNumber === 9)
            return units.push(
                convertedRomanianNumber.padStart(1, romanianNumbers[0].symbol).padEnd(2, romanianNumbers[2].symbol)
            );
    } else {
        units.push(getIndexOfRomanianNumber(arabicNumber));
    }
};
const getTens = arabicNumber => {
    tens = [];
    convertedRomanianNumber = '';
    if (getIndexOfRomanianNumber(arabicNumber * 10) === false) {
        if (arabicNumber % 5 < 4 && arabicNumber < 4)
            // Digits from 1 to 3
            return tens.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[2].symbol));
        else if (arabicNumber % 5 < 4 && arabicNumber > 4)
            // Digits from 6 to 8
            return tens.push(
                convertedRomanianNumber
                    .padStart(1, romanianNumbers[3].symbol)
                    .padEnd(arabicNumber - 4, romanianNumbers[2].symbol)
            );
        else if (arabicNumber === 4)
            return tens.push(
                convertedRomanianNumber.padStart(1, romanianNumbers[2].symbol).padEnd(2, romanianNumbers[3].symbol)
            );
        else if (arabicNumber === 9)
            return tens.push(
                convertedRomanianNumber.padStart(1, romanianNumbers[2].symbol).padEnd(2, romanianNumbers[4].symbol)
            );
    } else {
        tens.push(getIndexOfRomanianNumber(arabicNumber * 10));
    }
};
const getHundreds = arabicNumber => {
    hundreds = [];
    convertedRomanianNumber = '';
    if (getIndexOfRomanianNumber(arabicNumber * 100) === false) {
        if (arabicNumber % 5 < 4 && arabicNumber < 4)
            // Digits from 1 to 3
            return hundreds.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[4].symbol));
        else if (arabicNumber % 5 < 4 && arabicNumber > 4)
            // Digits from 6 to 8
            return hundreds.push(
                convertedRomanianNumber
                    .padStart(1, romanianNumbers[5].symbol)
                    .padEnd(arabicNumber - 4, romanianNumbers[4].symbol)
            );
        else if (arabicNumber === 4)
            return hundreds.push(
                convertedRomanianNumber.padStart(1, romanianNumbers[4].symbol).padEnd(2, romanianNumbers[5].symbol)
            );
        else if (arabicNumber === 9)
            return hundreds.push(
                convertedRomanianNumber.padStart(1, romanianNumbers[4].symbol).padEnd(2, romanianNumbers[6].symbol)
            );
    } else {
        hundreds.push(getIndexOfRomanianNumber(arabicNumber * 100));
    }
};
const getThousands = arabicNumber => {
    thousands = [];
    convertedRomanianNumber = '';
    if (getIndexOfRomanianNumber(arabicNumber * 1000) === false) {
        if (arabicNumber % 5 < 4 && arabicNumber < 4)
            // Digits from 1 to 3
            return thousands.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[6].symbol));
    } else {
        thousands.push(getIndexOfRomanianNumber(arabicNumber * 1000));
    }
};
// Romanian to Arabic converter
const checkRomanianValue = romanNr => {
    checkCorrectSymbol(romanNr)?checkSymbolOrder(romanNr):convertedNumbers.push('Invalid Romanian format.')
};
const checkCorrectSymbol = romanNr => {
    for (let i = 0; i < romanNr.length; i++) {
        if (romanianNumbers.some(el => el.symbol !== romanNr.at(i)));
        else return false;
    }
    return true;
};
const checkSymbolOrder = romanNr => {
    romanianValue = [];
    for (let i = 0; i < romanNr.length; i++) {
        const romanianNumberValue = romanianNumbers.find(el => el.symbol === romanNr.at(i));
        romanianValue.push(romanianNumberValue.value);
    }
    for (let i = 0; i < romanianValue.length; i++) {
        if (romanianValue[i] >= romanianValue[i + 1] || romanianValue[i + 1] === undefined) {
        } else return checkSubtraction(romanianValue);
    }
    return romanianAdding(romanianValue);
};
const romanianAdding = romanVal => {
    convertedArabicNumber = 0;
    for (let i = 0; i < romanVal.length; i++) {
        const filteredValues = romanVal.filter(value => value === romanVal[i]);
        if (
            filteredValues.length < 2 &&
            (romanVal[i] === romanianNumbers[1].value ||
                romanVal[i] === romanianNumbers[3].value ||
                romanVal[i] === romanianNumbers[5].value)
        ) {
            convertedArabicNumber += romanVal[i];
        } else if (
            filteredValues.length <= 3 &&
            (romanVal[i] === romanianNumbers[0].value ||
                romanVal[i] === romanianNumbers[2].value ||
                romanVal[i] === romanianNumbers[4].value ||
                romanVal[i] === romanianNumbers[6].value)
        ) {
            convertedArabicNumber += romanVal[i];
        } else return convertedNumbers.push('Too many same symbols in a row.');
    }
    convertedNumbers.push(convertedArabicNumber);
};
const checkSubtraction = romanVal => {
    convertedArabicNumber = 0;
    for (let i = 0; i < romanVal.length; i++) {
        const filteredValues = romanVal.filter(value => value === romanVal[i]);
        if (
            filteredValues.length <= 3 &&
            // why this condition doesn't work ?
            // romanVal[i] === romanianNumbers[0||2||4||6].value &&
            (romanVal[i] === romanianNumbers[0].value ||
                romanVal[i] === romanianNumbers[2].value ||
                romanVal[i] === romanianNumbers[4].value ||
                romanVal[i] === romanianNumbers[6].value) &&
            romanVal[i + 1] === romanVal[i] * 10 &&
            romanVal[i + 1] !== undefined)
        {
            convertedArabicNumber += romanVal[i + 1] - romanVal[i];
        } else if (filteredValues.length < 2 &&
            (romanVal[i] === romanianNumbers[0].value ||
                romanVal[i] === romanianNumbers[2].value ||
                romanVal[i] === romanianNumbers[4].value) &&
            romanVal[i + 1] === romanVal[i] * 5 &&
            romanVal[i + 1] !== undefined)
        {
            convertedArabicNumber += romanVal[i + 1] - romanVal[i];
        } else if (
            filteredValues.length <= 3 &&
            (romanVal[i] === romanianNumbers[0].value ||
                romanVal[i] === romanianNumbers[2].value ||
                romanVal[i] === romanianNumbers[4].value ||
                romanVal[i] === romanianNumbers[6].value) &&
            romanVal[i + 1] === undefined
        ) {}
        else if (
            filteredValues.length <2 &&
            (romanVal[i] !== romanianNumbers[0].value ||
                romanVal[i] !== romanianNumbers[2].value ||
                romanVal[i] !== romanianNumbers[4].value ||
                romanVal[i] !== romanianNumbers[6].value) &&
            romanVal[i + 1] === undefined
        ) {}
        else return convertedNumbers.push('Invalid Romanian format.');
    }
    convertedNumbers.push(convertedArabicNumber);
}
converterRomanianArabicNumbers(array);