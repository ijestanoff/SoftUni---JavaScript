function pascalCaseSplitter (input) {
    let pascalWords = [];
    let index = input.length - 1;
    do {
        if (input[index] >= 'A' && input[index] <= 'Z') {
            pascalWords.unshift(input.slice(index,input.length));
            input = input.slice(0,index);
        }
        index --;
    } while (index >=0);
    console.log(pascalWords.join(', '));
}

pascalCaseSplitter ('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter ('HoldTheDoor');
pascalCaseSplitter ('ThisIsSoAnnoyingToDo');