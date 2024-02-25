console.log('Hello');

const p = new Promise(executor);
p.then(onSuccess);

console.log('there');

function executor (resolve, reject) {
    console.log('Executing');
    resolve('Bye!');
    console.log('show type:',typeof resolve);
}

function onSuccess (data) {
    console.log(data);
}