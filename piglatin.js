// For words that begin with consonant sounds, 
// all letters before the initial vowel are placed at the end of the word sequence. 
// Then, "ay" is added, as in "pig" = "igpay"

// TODO - didn't do this one yet!
// When words begin with consonant clusters (multiple consonants that form one sound), 
// the whole sound is added to the end when speaking or writing.
// "trash" = "ashtray"

// For words that begin with vowel sounds, the vowel is left alone, and most commonly 
// 'ay' is added to the end. 
// "eat" = "eatay"

const translateToPigLatin = ( string ) => {
    let result = string;
    if (string.length === 0) {
        return result;
    }

    let firstCharacter = string[0];
    if ( isVowel( firstCharacter ) === false ) {
        // Remove first character from result
        result = string.substring(1, string.length) + firstCharacter + 'ay';
    } else {
        // Add 'ay' to end
        result = string + 'ay';
    }
    return result;
}

// TODO - should probably be in its own module with its own unit tests!
const isVowel = ( char ) => {
    let lowerCase = char.toLowerCase();

    if( lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' || 
        lowerCase === 'o' || lowerCase === 'u' ) {
            return true;
        }
        return false;
}

module.exports = translateToPigLatin;