function readSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        // Increase sentence length for every character
        sentenceLength++;

        const char = sentence[i];
        // Check if the character is a letter
        if (char.match(/[a-zA-Z]/)) {
            // Increase vowel count if the character is a vowel
            if (char.match(/[aeiouAEIOU]/)) {
                vowelCount++;
            }
        }
        // Increase word count if a space is encountered
        else if (char === ' ') {
            wordCount++;
        }
    }

    // Finally add 1 to word count for the last word
    wordCount++;

    return [sentenceLength, wordCount, vowelCount];
}

// Checking:
let checkSentence = "Emmanuel is a software developer.";
let [length, words, vowels] = readSentence(checkSentence);
console.log("The Length of the sentence:", length);
console.log("The Number of words in the sentence:", words);
console.log("The Number of vowels in the sentence:", vowels);
