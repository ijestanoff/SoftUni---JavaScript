const text = 'abc 123 def 456';
const regex = /\d+/g; // Matches one or more digits globally

let match;
while ((match = regex.exec(text)) !== null) {
  console.log(`Match: ${match[0]} at index ${match.index}`);
}