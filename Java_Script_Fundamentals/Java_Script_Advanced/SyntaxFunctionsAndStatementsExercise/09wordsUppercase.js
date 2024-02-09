wordsUppercase = (input) => console.log(input.match(/[A-Za-z0-9]+/g).join(', ').toUpperCase());

wordsUppercase ('Hi, how are you?');
wordsUppercase ('hello');