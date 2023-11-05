function melrahShake(input) {
    let [string, patern] = input;
    while (patern.length > 0) {
        let first = string.indexOf(patern);
        let last = string.lastIndexOf(patern);
        if (first != -1 && first != last) {
            string = string.slice(0, first) + string.slice(first + patern.length, last) + string.slice(last + patern.length);
            console.log('Shaked it.');
        } else break;
        patern = patern.slice(0, patern.length / 2) + patern.slice(patern.length / 2 + 1);
    }
    console.log(`No shake.\n${string}`);
}

melrahShake(['asstalavistal bsaby',
    'st']);
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']);