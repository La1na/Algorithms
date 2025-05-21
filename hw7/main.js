function buildFrequencyDictionary(text) {
  const frequency = {};
  const lowerText = text.toLowerCase();

  for (const char of lowerText) {
    if (/[a-zäöüß]/.test(char)) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  const sortedFrequency = Object.entries(frequency).sort(([, countA], [, countB]) => countB - countA);

  return sortedFrequency;
}

const germanText = "Die häufigsten Buchstaben in der deutschen Sprache sind E, N, I, S, R, A, T, D, H, U, L, G, O, M, W, F, B, K, Z, Ü, Ä, Ö, J, V, P, Q, Y, X.";
const frequencyDictionary = buildFrequencyDictionary(germanText);

console.log("Частотный словарь букв немецкого алфавита:");
frequencyDictionary.forEach(([letter, count]) => {
  console.log(`${letter}: ${count}`);
});