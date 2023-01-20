// TASK 2
const array2 = [9, 1200, 68, 120, 677, 1340, 2789, 'mcc'];
const array = ['iv', 'xi', 'xl', 'xc', 'cm', 'mc', 'cd', 'CMXX', 60, 920];
const array1 = ['cx', 'cv', 'md', 'mc', 'lx', 'clxxx', 'clvvv']
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
let convertedRomanianNumber = '';
let convertedArabicNumber = 0;
let romanianValue = [];
let convertedNumbers = [];
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
    if (arabicNr > 0 && arabicNr < 4000) {
        const unitsNr = ((arabicNr % 1000) % 100) % 10;
        const tensNr = (((arabicNr % 1000) % 100) - unitsNr) / 10;
        const hundredsNr = ((arabicNr % 1000) - tensNr * 10 - unitsNr) / 100;
        const thousandsNr = (arabicNr - hundredsNr * 100 - tensNr * 10 - unitsNr) / 1000;
        let romanNr = []
        romanNr.unshift(getUnits(unitsNr))
        romanNr.unshift(getTens(tensNr))
        romanNr.unshift(getHundreds(hundredsNr))
        romanNr.unshift(getThousands(thousandsNr))
        return convertedNumbers.push(romanNr.join(''));
    } else return convertedNumbers.push('Out of Romanian numbers scope');
};
const getIndexOfRomanianNumber = arabicNr => {
    if (romanianNumbers.find(digitObject => digitObject.value === arabicNr)) {
        const digitObject = romanianNumbers.find(digitObject => digitObject.value === arabicNr);
        return (convertedRomanianNumber = digitObject.symbol);
    } else return false;
};
const getUnits = arabicNr => {
    convertedRomanianNumber = '';
    if (!getIndexOfRomanianNumber(arabicNr) && arabicNr % 5 < 4 && arabicNr < 4) {
        // Digits from 1 to 3
        return convertedRomanianNumber.padStart(arabicNr, romanianNumbers[0].symbol);
    } else if (arabicNr % 5 < 4 && arabicNr > 4) {
        // Digits from 6 to 8
        return convertedRomanianNumber
            .padStart(1, romanianNumbers[1].symbol)
            .padEnd(arabicNr - 4, romanianNumbers[0].symbol);
    } else if (arabicNr === 4) {
        return convertedRomanianNumber.padStart(1, romanianNumbers[0].symbol).padEnd(2, romanianNumbers[1].symbol);
    } else if (arabicNr === 9) {
        return convertedRomanianNumber.padStart(1, romanianNumbers[0].symbol).padEnd(2, romanianNumbers[2].symbol);
    } else return getIndexOfRomanianNumber(arabicNr);
};
const getTens = arabicNr => {
    convertedRomanianNumber = '';
    if (!getIndexOfRomanianNumber(arabicNr * 10) && arabicNr % 5 < 4 && arabicNr < 4) {
        // Digits from 1 to 3
        return convertedRomanianNumber.padStart(arabicNr, romanianNumbers[2].symbol);
    } else if (arabicNr % 5 < 4 && arabicNr > 4) {
        // Digits from 6 to 8
        return convertedRomanianNumber.padStart(1, romanianNumbers[3].symbol).padEnd(arabicNr - 4, romanianNumbers[2].symbol);
    } else if (arabicNr === 4) {
        return convertedRomanianNumber.padStart(1, romanianNumbers[2].symbol).padEnd(2, romanianNumbers[3].symbol);
    } else if (arabicNr === 9) {
        return convertedRomanianNumber.padStart(1, romanianNumbers[2].symbol).padEnd(2, romanianNumbers[4].symbol);
    } else {
        return getIndexOfRomanianNumber(arabicNr * 10);
    }
}
const getHundreds = arabicNr => {
    convertedRomanianNumber = '';
    if (!getIndexOfRomanianNumber(arabicNr * 100) && arabicNr % 5 < 4 && arabicNr < 4) {
        // Digits from 1 to 3
        return convertedRomanianNumber.padStart(arabicNr, romanianNumbers[4].symbol);
    } else if (arabicNr % 5 < 4 && arabicNr > 4) {
        // Digits from 6 to 8
        return convertedRomanianNumber.padStart(1, romanianNumbers[5].symbol).padEnd(arabicNr - 4, romanianNumbers[4].symbol);
    } else if (arabicNr === 4) {
        return convertedRomanianNumber.padStart(1, romanianNumbers[4].symbol).padEnd(2, romanianNumbers[5].symbol);
    } else if (arabicNr === 9) {
        return convertedRomanianNumber.padStart(1, romanianNumbers[4].symbol).padEnd(2, romanianNumbers[6].symbol);
    } else return getIndexOfRomanianNumber(arabicNr * 100);
};
const getThousands = thousandsNr => {
    convertedRomanianNumber = '';
    if (!getIndexOfRomanianNumber(thousandsNr * 1000) && thousandsNr % 5 < 4) {
        return convertedRomanianNumber.padStart(thousandsNr, romanianNumbers[6].symbol);
    } else return getIndexOfRomanianNumber(thousandsNr * 1000);
};
// Romanian to Arabic converter
const checkRomanianValue = romanNr => {
    checkCorrectSymbol(romanNr) ? checkSymbolOrder(romanNr) : convertedNumbers.push('Invalid Romanian format.')
};
const checkCorrectSymbol = romanNr => {
    for (let i = 0; i < romanNr.length; i++) {
        if (romanianNumbers.some(el => el.symbol !== romanNr.at(i))) {
        } else return false;
    }
    return true;
};
const checkSymbolOrder = romanNr => {
    romanianValue = [];
    for (let i = 0; i < romanNr.length; i++) {
        const romanianDigitValue = romanianNumbers.find(el => el.symbol === romanNr.at(i));
        romanianValue.push(romanianDigitValue.value);
    }
    for (let i = 0; i < romanianValue.length; i++) {
        if (romanianValue[i] < romanianValue[i + 1] || romanianValue[i + 1] === undefined) {
            return checkSubtraction(romanianValue);
        }
    }
    return romanianAdding(romanianValue);
}
const romanianAdding = romanVal => {
    convertedArabicNumber = 0;
    for (let i = 0; i < romanVal.length; i++) {
        const filteredValues = romanVal.filter(value => value === romanVal[i]);
        if (filteredValues.length < 2 && (romanVal[i].toString()).startsWith('5')) {
            convertedArabicNumber += romanVal[i];
        } else if (filteredValues.length <= 3 && (romanVal[i].toString()).startsWith('1')) {
            convertedArabicNumber += romanVal[i];
        } else return convertedNumbers.push('Too many same symbols in a row.');
    }
    convertedNumbers.push(convertedArabicNumber);
};
const checkSubtraction = romanVal => {
    convertedArabicNumber = 0;
    for (let i = 0; i < romanVal.length; i++) {
        const filteredValues = romanVal.filter(value => value === romanVal[i]);
        if (filteredValues.length <= 3
            && (romanVal[i].toString()).startsWith('1')
            && romanVal[i + 1] === romanVal[i] * 10
            && romanVal[i + 1] !== undefined) {
            convertedArabicNumber += romanVal[i + 1] - romanVal[i];
        } else if (filteredValues.length < 2
            && (romanVal[i].toString()).startsWith('1') && romanVal[i + 1] === romanVal[i] * 5
            && romanVal[i + 1] !== undefined && romanVal[i] !== romanianNumbers[6]) {
            convertedArabicNumber += romanVal[i + 1] - romanVal[i];
        } else if (filteredValues.length <= 3 && (romanVal[i].toString()).startsWith('1')
            && romanVal[i + 1] === undefined) {
        } else if (filteredValues.length < 2 && !(romanVal[i].toString()).startsWith('1')
            && romanVal[i + 1] === undefined) {
        } else return convertedNumbers.push('Invalid Romanian format.');
    }
    convertedNumbers.push(convertedArabicNumber);
}
converterRomanianArabicNumbers(array);