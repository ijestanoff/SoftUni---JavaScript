function justify(text, width) {
    let words = text.match(/[\S]+/gi) || [];
    let output = '';
    while (words.length) {
        let row = [], count = 0;
        while (words.length) {
            if (words[0].length + count + row.length <= width) {
                let current = words.shift();
                count += current.length;
                row.push(current);
            } else break;
        }
        if (!words.length) return output += row.join(' ');
        let total = width - count;
        let spaceCnt = row.length - 1;
        output += row.shift();
        row.forEach (word => {
            let space = ' '.repeat(Math.ceil(total / spaceCnt--));
            output +=  space + word;
            total -= space.length;
        });
        output += '\n'
    }
    return output;
}


// console.log(justify('123 45 6', 7));//'123  45\n6'
// console.log(justify('12 45 1234 12', 6));//'12  45\n1234\n12'
// console.log(justify('123', 7));//'123'
// console.log(justify('', 10));//''
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
console.log(justify(lorem, 30));