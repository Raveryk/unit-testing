const translateToPigLatin = require('./piglatin');

// Write a test to make sure if we get a blank string in,
// we give a blank string back

describe('Testing translating to pig-latin...', () => {

    test('If empty string goes in, empty string comes out', () => {
        expect( translateToPigLatin('')).toBe('');
    })

    test('starting consonant moves to end with \'ay\'... ', () => {
        expect( translateToPigLatin('pig')).toBe('igpay');
    })

    // TODO - write a test case for string starts with a vowel
    test('starting vowel sound stays and add \'ay\' to end', () => {
        expect( translateToPigLatin('island')).toBe('islanday');
    })

})