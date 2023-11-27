// var theLift = function (queues, capacity) {
//     let [lift, output] = [[], [0]];
//     let maxFloor = queues.length;

//     if (queues[0].length > 0) { //check for people waiting on Ground
//         let idx = 0;
//         while (idx < queues[0].length && lift.length < capacity) { //iterate waiting people
//             let stage = queues[0][idx];
//             if (stage > 0) {        //get only people that going up
//                 if (lift.length < capacity) {
//                     lift.push(stage);               //get person
//                     queues[0].splice(idx--, 1);   //remove person from queues
//                 }
//             }
//             idx++;
//         }
//     }

//     total = arr => arr.reduce((acc, val) => acc + val.reduce((a, v) => a + v, ''), '');
//     let currentFloor = 0;
//     while (total(queues) != '' || lift.length > 0) {
//         for (let floor = currentFloor + 1; floor < maxFloor; floor++) { // going up
//             currentFloor = floor;
//             let stopLift = false;
//             for (let i = lift.length - 1; i > -1; i--) { //discharge lift
//                 if (lift[i] == floor) {
//                     stopLift = true;
//                     lift.splice(i, 1);
//                 }
//             }
//             if (queues[floor].length > 0) { //check for people waiting on floor
//                 let idx = 0;
//                 while (idx < queues[floor].length) { //iterate waiting people
//                     let stage = queues[floor][idx];
//                     if (floor < stage || (total(queues.slice(currentFloor + 1)) == '' && currentFloor > Math.max(...lift))) {        //get only people that going up or if already stop get all
//                         stopLift = true;
//                         if (lift.length < capacity) {
//                             lift.push(stage);               //get person
//                             queues[floor].splice(idx--, 1);   //remove person from queues
//                         } else break;

//                     }
//                     if (floor == stage) queues[floor].splice(idx--, 1);
//                     idx++;
//                 }
//             }
//             if (stopLift) output.push(floor);
//             if (currentFloor > Math.max(...lift) && total(queues.slice(currentFloor + 1)) == '') break;
//         }
//         for (let floor = currentFloor - 1; floor > -1; floor--) { // going down
//             currentFloor = floor;
//             let stopLift = false;
//             for (let i = lift.length - 1; i > -1; i--) { //discharge lift
//                 if (lift[i] == floor) {
//                     stopLift = true;
//                     lift.splice(i, 1);
//                 }
//             }
//             if (queues[floor].length > 0) { //check for people waiting on floor
//                 let idx = 0;
//                 while (idx < queues[floor].length) { //iterate waiting people
//                     let stage = queues[floor][idx];
//                     if (floor > stage || (total(queues.slice(0, currentFloor)) == '' && currentFloor < Math.min(...lift))) { //get only people that going down or all if already stop list
//                         stopLift = true;
//                         if (lift.length < capacity) {
//                             lift.push(stage);               //get person
//                             queues[floor].splice(idx--, 1);   //remove person from queues
//                         } else break;
//                     }
//                     if (floor == stage) queues[floor].splice(idx--, 1);
//                     idx++;
//                 }
//             }
//             if (stopLift) output.push(floor);
//             if (currentFloor < Math.min(...lift) && total(queues.slice(0, currentFloor)) == '') break;
//         }
//     }

//     if (output[output.length - 1] != 0) output.push(0);
//     return output;
// }

// var theLift = function (queues, capacity) {
//     let result = [0];
//     let lift = Array(queues.length).fill(0);
//     let floor = 0;
//     let direction = 1;

//     while (queues.find(x => x.length > 0) || lift.find(x => x > 0)) {
//         if (lift[floor] > 0 || (queues[floor] && queues[floor].findIndex(x => direction * (x - floor) > 0) > -1)) {
//             if (result[result.length - 1] != floor)
//                 result.push(floor);

//             capacity += lift[floor];
//             lift[floor] = 0;


//             while (capacity && queues[floor].findIndex(x => direction * (x - floor) > 0) > -1) {
//                 lift[queues[floor].splice(queues[floor].findIndex(x => direction * (x - floor) > 0), 1)[0]]++;
//                 capacity--;
//             }
//         }

//         floor += direction;
//         if (floor < 0 || floor > queues.length - 1) direction *= -1;
//     }

//     if (result[result.length - 1] > 0)
//         result.push(0);
//     return result
// }

const theLift = (queues, capacity, lift = [], floor = 0, result = [0], up = true) => {

    if ([lift, ...queues].every(arr => !arr.length)) return [...result, 0].filter((floor, idx, arr) => floor !== arr[idx - 1]);

    const shallLiftStop = lift.some(person => person === floor) || queues[floor].some(person => up ? person > floor : person < floor);

    lift = lift.filter(person => person !== floor);
    let freeSpace = capacity - lift.length, offset = 0;
    [...queues[floor]].forEach((person, idx) => (up ? person > floor : person < floor)
        && (freeSpace-- > 0) && lift.push(queues[floor].splice(idx - offset++, 1)[0]));

    shallLiftStop && result.push(floor);
    ((floor = floor + up * 2 - 1) - queues.length + 1) * floor || (up = !up);

    return theLift(queues, capacity, lift, floor, result, up);

}

console.log(theLift([
    [], //G
    [0, 0, 0, 6], //1
    [], //2
    [], //3
    [], //4
    [6, 6, 0, 0, 0, 6], //5
    []  //6
], 5)); // [ 0, 1, 5, 6, 5, 1, 0, 1, 0 ] tricky queues


console.log(theLift([
    [], // G
    [2], // 1
    [3, 3, 3], // 2
    [1], // 3
    [], // 4
    [], // 5
    [], // 6
], 1)); // [ 0, 1, 2, 3, 1, 2, 3, 2, 3, 0 ]

console.log(theLift([
    [], // G
    [], // 1
    [4, 4, 4, 4], // 2
    [], // 3
    [2, 2, 2, 2], // 4
    [], // 5
    [], // 6
], 2)); //[ 0, 2, 4, 2, 4, 2, 0 ]


console.log(theLift([
    [], // G
    [], // 1
    [5, 5, 5], // 2
    [], // 3
    [], // 4
    [], // 5
    [], // 6
], 5)); //[0,2,5,0]
console.log(theLift([
    [], // G
    [], // 1
    [1, 1], // 2
    [], // 3
    [], // 4
    [], // 5
    [], // 6
], 5)); //[0,2,1,0]
console.log(theLift([
    [], // G
    [3], // 1
    [4], // 2
    [], // 3
    [5], // 4
    [], // 5
    [], // 6
], 5)); //[0,1,2,3,4,5,0]

console.log(theLift([
    [], // G
    [0, 0, 0, 0], // 1
    [0, 0, 0, 0], // 2
    [0, 0, 0, 0], // 3
    [0, 0, 0, 0], // 4
    [0, 0, 0, 0], // 5
    [0, 0, 0, 0] // 6
], 5)); //[ 0, 6, 5, 4, 3, 2, 1, 0, 5, 4, 3, 2, 1, 0, 4, 3, 2, 1, 0, 3, 2, 1, 0, 1, 0 ] 

console.log(theLift([
    [], // G
    [0], // 1
    [], // 2
    [], // 3
    [2], // 4
    [3], // 5
    [], // 6
], 5)); //[0,5,4,3,2,1,0]

