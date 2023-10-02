function passwordGenerator (input) {
    let password = input[0] + input[1];
    let third = input[2];
    let vowels = 'aAeEiIoOuU';
    let count = 0;
    for (let index = 0; index < password.length; index++) {
        if (vowels.indexOf(password[index]) != -1) {
            password = password.slice(0,index) + third[count].toUpperCase() + password.slice(index+1,password.length);
            count++;
            if (count == third.length) count=0;
        }
    } 
    console.log(`Your generated password is ${password.split('').reverse().join('')}`);
}

passwordGenerator ([ 'ilovepizza', 'ihatevegetables', 'orange' ]);
// passwordGenerator ([ 'easymoneyeazylife', 'atleasttencharacters', 'absolute' ]);
// passwordGenerator ([ 'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed' ]);