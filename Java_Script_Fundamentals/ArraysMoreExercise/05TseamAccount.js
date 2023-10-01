function tseamAccount (input) {
    let games = input[0].split(' ');
    for (let index = 1; index < input.length; index ++){
        let commands = input[index].split(' ');
        let command = commands[0];
        let game = commands[1];
        if (command == 'Play!') {
            break;
        } else if (command == 'Install' && (!games.includes(game))) {
            games.push(game);
        } else if (command == 'Uninstall' && games.includes(game)) {
            let i = games.indexOf(game);
            games.splice(i,1);
        } else if (command == 'Update' && games.includes(game)) {
            let i = games.indexOf(game);
            games.splice(i,1);
            games.push(game); 
        } else if (command == 'Expansion') {
            let expansion = game.split('-');
            let gameExpansion = expansion[0];
            let expansionExpansion = expansion[1];
            if (games.includes(gameExpansion)) {
                for (let i=0; i<games.length; i++){
                    if (games[i] == gameExpansion) {
                        games.splice(i+1,0, gameExpansion + ':' + expansionExpansion);
                    }
                }
            }
        }
    }
    console.log(games.join(' '));
}

tseamAccount (['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);
tseamAccount (['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);
