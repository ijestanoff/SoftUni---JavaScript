function oddOccurrences(input) {
    let words = {};
    input.toLowerCase().split(' ').forEach(word => word in words ? words[word]++ : words[word] = 1);
    console.log(Object.keys(words).filter(tuple => words[tuple] % 2 != 0).join(' '));
}

// function oddOccurrences(arr) {
//     let words = arr.toLowerCase().split(' ');
//     let object = {};

//     for (let word of words) {
//       if (word in object) {
//         object[word]++;
//       } else {
//         object[word] = 1;
//       }
//     }
//     let oddOccur = Object.keys(object)
//       .filter((word) => object[word] % 2 === 1)
//       .sort((a, b) => a.localeCompare(b));

//     console.log(oddOccur);
//   }

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');