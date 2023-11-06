function secretChat(input) {
    let message = input.shift();
    input.forEach(part => {
        let [command, indSub, replacement] = part.split(':|:');
        if (command == 'InsertSpace') {
            message = message.slice(0, indSub) + ' ' + message.slice(indSub);
            console.log(message);
        }
        else if (command == 'Reverse') {
            if (message.includes(indSub)) {
                let inx = message.indexOf(indSub);
                message = message.slice(0, inx) + message.slice(inx + indSub.length) + indSub.split('').reverse().join('');
                console.log(message);
            } else console.log('error');
        } else if (command == 'ChangeAll') {
            message = message.replace(new RegExp(indSub, 'g'), replacement);
            console.log(message);
        }
        if (part == 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            return;
        } 
    });
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);