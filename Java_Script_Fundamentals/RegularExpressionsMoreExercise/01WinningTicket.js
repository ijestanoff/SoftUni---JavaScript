function winningTicket (input) {
    let tickets = input.split(', ');
    let regex = /(?<part>[\@]{6,}|[\$]{6,}|[\^]{6,}|[\#]{6,})/g;
    for (let part of tickets) {
        part = part.trim();
        if (part.length == 20) {
            let first = part.slice (0,10).match(regex);
            let second = part.slice(10,).match(regex);
            if (first && second && (first[0].includes(second[0]) || second[0].includes(first[0]))) {
                let length = 0;
                if (first[0].length < second[0].length) {
                    length = first[0].length;
                } else length = second[0].length;
                
                let symbol = first[0][0];
                if (length < 10) console.log(`ticket "${part}" - ${length}${symbol}`);
                else console.log(`ticket "${part}" - ${length}${symbol} Jackpot!`);
            }
            else console.log(`ticket "${part}" - no match`);
        } else console.log("invalid ticket");
    }
}

winningTicket ('Cash$$$$$$Ca$$$$$$$h');
winningTicket ('$$$$$$$$$$$$$$$$$$$$, aabb ,      th^^^^^^eemo^^^^^^ey       ');
winningTicket ('validticketnomatch:(');