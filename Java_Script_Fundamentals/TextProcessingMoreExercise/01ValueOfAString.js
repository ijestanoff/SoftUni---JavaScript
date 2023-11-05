function valueOfAString (input) {
    let sum = 0;
    input[0].split('').forEach (symbol => {
        if ((symbol >= 'a' && symbol <= 'z' && input[1] == 'LOWERCASE') || 
        (symbol >= 'A' && symbol <= 'Z' && input[1] == 'UPPERCASE')) sum+= symbol.charCodeAt(0);
    });
    console.log(`The total sum is: ${sum}`);
}

valueOfAString (['HelloFromMyAwesomePROGRAM',
'LOWERCASE']);
valueOfAString (['AC/DC',
'UPPERCASE']);