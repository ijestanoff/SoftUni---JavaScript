// function sumIntervals(intervals) {
//     let row = [intervals.shift()];
//     intervals.forEach(interval => {
//         let start = 0, end = row.length;
//         while (start != end)
//             [start, end] = put(start, end, interval);
//     })

//     function put(start, end, newInt) {
//         let mid = Math.floor((end + start) / 2);
//         let topMid = row[mid][1] - 1;
//         let topNewInt = newInt[1] - 1;
//         if (row[row.length - 1][1] - 1 < newInt[0]) { //top position
//             row.push(newInt);
//             start = end;
//         } else if (row[0][0] > topNewInt) {//bottom position
//             row.unshift(newInt);
//             start = end;
//         } else if (topMid < newInt[0] && topNewInt < row[mid + 1][0]) {//center position
//             row.splice(mid + 1, 0, newInt);
//             start = end;
//         } else if (topMid < newInt[0]) { //top half position
//             start = mid;
//         } else if (row[mid][0] > topNewInt) {//bottom half position
//             end = mid;
//         } else if (topMid >= topNewInt && newInt[0] >= row[mid][0]) {//inside position -> clear interval
//             start = end;
//         } else if (row[mid][0] <= newInt[0] && row[mid][1] < newInt[1]) {//extend mid interval up
//             row[mid][1] = newInt[1];
//             while (true) {
//                 if (mid + 1 == row.length) break;
//                 if (row[mid][1] >= row[mid + 1][0]) {
//                     if (row[mid][1] < row[mid + 1][1]) row[mid][1] = row[mid + 1][1];
//                     row.splice(mid + 1, 1);
//                 } else break;
//             }
//             start = end;
//         } else if (row[mid][1] >= newInt[1] && row[mid][0] > newInt[0]) {//extend mid interval down
//             row[mid][0] = newInt[0];
//             while (true) {
//                 if (mid == 0) break;
//                 if (row[mid][0] <= row[mid - 1][1]) {
//                     if (row[mid][0] > row[mid - 1][0]) row[mid][0] = row[mid - 1][0];
//                     row.splice(--mid, 1);
//                 } else break;
//             }
//             start = end;
//         } else if (row[mid][0] >= newInt[0] && row[mid][1] <= newInt[1]) {//extend mid interval up and down
//             row[mid][1] = newInt[1];
//             while (true) {
//                 if (mid + 1 == row.length) break;
//                 if (row[mid][1] >= row[mid + 1][0]) {
//                     if (row[mid][1] < row[mid + 1][1]) row[mid][1] = row[mid + 1][1];
//                     row.splice(mid + 1, 1);
//                 } else break;
//             }
//             row[mid][0] = newInt[0];
//             while (true) {
//                 if (mid == 0) break;
//                 if (row[mid][0] <= row[mid - 1][1]) {
//                     if (row[mid][0] > row[mid - 1][0]) row[mid][0] = row[mid - 1][0];
//                     row.splice(--mid, 1);
//                 } else break;
//             }
//             start = end;
//         }
//         return [start, end];
//     }
//     return row.reduce((acc, val) => acc + val[1] - val[0], 0);
// }

function sumIntervals(xs) {
    let ys = xs.sort((a, b) => a[0] - b[0]);
    let current = -Number.MAX_VALUE;
    let result = 0;
    for (let [start, end] of ys) {
        current = Math.max(current, start);
        result += Math.max(0, end - current);
        current = Math.max(current, end);
    }
    return result;
}

//console.log(sumIntervals([[1, 4], [-100, -98], [8, 10], [-5, -3], [5, 6], [-2, 0], [-20,-17], [11,12], [-30,-32],[90,91],[-110,500]]));// 7
//console.log(sumIntervals([[1, 4], [8, 10], [-5, -3], [5, 6], [-2, 0]]));// 7
//console.log(sumIntervals([[1, 5], [1, 5]]));// 4
console.log(sumIntervals([
    [10, 13],
    [13, 15],
    [12, 16],
    [2, 9],
]));// 13
// console.log(sumIntervals([
//     [-65, -28],
//     [425, 450],
//     [181, 360],
//     [-460, -415],
//     [398, 474],
//     [-75, 211],
//     [-425, 234],
//     [34, 495],
//     [91, 461]
// ]));// 7