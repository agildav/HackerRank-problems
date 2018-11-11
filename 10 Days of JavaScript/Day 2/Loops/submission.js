/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    switch (element) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowels.push(element);
        break;
      default:
        consonants.push(element);
        break;
    }
  }

  vowels.forEach(vowel => {
    console.log(vowel);
  });

  consonants.forEach(consonant => {
    console.log(consonant);
  });
}
