function numbers(input) {
    let nums = input.shift().split(' ').map(Number);
    for (let part of input) {
        let commands = part.split(' ');
        let command = commands[0];
        let value = Number(commands[1]);
        if (command == 'Finish') break;
        let index = nums.indexOf(value);
        if (command == 'Add') {
            nums.push(value);
        } else if (command == 'Remove') {
            if (index != -1) {
                nums.splice(index, 1);
            }
        } else if (command == 'Replace') {
            let replacment = Number(commands[2]);
            if (index != -1) {
                nums.splice(index, 1, replacment);
            }
        } else if (command == 'Collapse') {
            for (let i = nums.length - 1; i >= 0; i--) {
                if (nums[i] < value) {
                    nums.splice(i, 1);
                }
            }
        }
    }
    console.log(nums.join(' '));
}

numbers(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"]);
numbers(["1 20 -1 10",
    "Collapse 8",
    "Finish"]);
numbers(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"]);

