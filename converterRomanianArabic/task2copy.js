// TASK 2
const array = ['cm', 'mmcdlxxxiv', 'mdcclix', 'MCDXLIX', 'xi', 'clxxx', 'mmccd', 'xcv', 'cmxx',9, 1200, 68, 120,
    677, 1340, 2789, 'mcc','iv', 'xi', 'L', 'xc', 'cm', 'mc', 'cd', 'CMXX', 60, 920,'mmmxi', 'cccm']
const array2 = ['cccm']
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
    checkCorrectSymbol(romanNr) ? checkSymbolValues(romanNr) : convertedNumbers.push('Invalid Romanian format.')
};
const checkCorrectSymbol = romanNr => {
    for (let i = 0; i < romanNr.length; i++) {
        if (romanianNumbers.some(el => el.symbol !== romanNr.at(i))) {
        } else return false;
    }
    return true;
};
const checkSymbolValues = romanNr => {
    convertedArabicNumber = 0
    romanianValue = [];
    for (let i = 0; i < romanNr.length; i++) {
        const romanianDigitValue = (romanianNumbers.find(el => el.symbol === romanNr.at(i))).value;
        romanianValue.push(romanianDigitValue);
    }
    checkSubtraction(romanianValue)
}
const romanianAdding = (romanVal) => {
    for (let i = 0; i < romanVal.length; i++) {
        const checkValue = romanVal.slice(i+1)
        console.log(checkValue.every(value => romanVal[i] < value))
        const filteredValuesAll = romanVal.filter(value => value === romanVal[i]);
        if (filteredValuesAll.length >= 5) {return convertedNumbers.push('Too many same symbols in a row.')}
        const filteredValues = (romanVal.slice(i,i+4)).filter(value => value === romanVal[i]);
        if (romanVal[i] < romanVal[i + 1] && filteredValues.length === 1) {
            const arr = romanVal.splice(i)
            return checkSubtraction(arr)
        } else if (!checkValue.every(value => romanVal[i] >= value) && filteredValues.length !== 1) {
            return convertedNumbers.push('Invalid Romanian number format...')
        } else if (filteredValues.length < 2 && (romanVal[i].toString()).startsWith('5')) {
            convertedArabicNumber += romanVal[i];
        } else if (filteredValues.length <= 3 && (romanVal[i].toString()).startsWith('1')) {
            convertedArabicNumber += romanVal[i];
        } else return convertedNumbers.push('Too many same symbols in a row.');
    }
    convertedNumbers.push(convertedArabicNumber);
};
const checkSubtraction = (romanVal) => {
    for (let i = 0; i < romanVal.length; i++) {
        if (romanVal[i] >= romanVal[i + 1] || romanVal[i + 1] === undefined) {
            const arr = romanVal.splice(i)
            return romanianAdding(arr)
        } else if ((romanVal[i].toString()).startsWith('1')
            && (romanVal[i + 1] === romanVal[i] * 10 || romanVal[i + 1] === romanVal[i] * 5)
            && romanVal[i + 1] !== undefined
            && romanVal[i] !== romanianNumbers[6]) {
            convertedArabicNumber += romanVal[i + 1] - romanVal[i];
            i++
        } else return convertedNumbers.push('Invalid Romanian format.');
    }
    convertedNumbers.push(convertedArabicNumber);
}
converterRomanianArabicNumbers(array);