function theLimitationGame(input) {
    let message = input.shift();
    input.forEach(part => { 
        if (part == 'Decode') {
            console.log(`The decrypted message is: ${message}`);
            return;
        }
        let commands = part.split('|');
        let command = commands[0];
        if (command == 'Move') {
            let number = Number(commands[1]);
            message = message.slice(number) + message.slice(0, number);
        } else if (command == 'Insert') {
            let index = Number(commands[1]);
            let value = commands[2];
            message = message.slice(0, index) + value + message.slice(index);
        } else if (command == 'ChangeAll') {
            let substring = commands[1];
            let replacment = commands[2];
            let currentIndex = -1;
            while ((currentIndex = message.indexOf(substring, currentIndex + 1)) !== -1) {
                message = message.slice(0, currentIndex) + replacment + message.slice(currentIndex + substring.length);
            }
        }
    });
}

theLimitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
theLimitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);
