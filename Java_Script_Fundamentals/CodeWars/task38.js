function sumIntervals(intervals) {
    let row = [intervals.shift()];
    intervals.forEach(interval => {
        let start = 0, end = row.length;
        while (start != end)
            [start, end] = put(start, end, interval);

    })

    function put(start, end, newInt) {
        let mid = Math.floor((end - start) / 2);
        let topMid = row[mid][1] - 1;
        let topRow = row[row.length - 1][1] - 1;
        let topNewInt = newInt[1] - 1;
        if (topRow < newInt[0]) { //top position
            row.push(newInt);
            start = end;
        } else if (row[0][0] > topNewInt) {//bottom position
            row.unshift(newInt);
            start = end;
        } else if (topMid < newInt[0] && topNewInt < row[mid + 1][0]) {//center position
            row.splice(mid + 1, 0, newInt);
            start = end;
        } else if (topMid < newInt[0]) { //top half position
            start = mid;
        } else if (row[mid][0] > topNewInt) {//bottom half position
            end = mid;
        } else if (topMid >= topNewInt && newInt[0] >= row[mid][0]) {//inside position -> clear interval
            start = end;
        } //else if (row[mid][0] <= newInt[0] && row[mid][1] < newInt[1]) {//extend mid interval up
        //     row[mid][1] = newInt[1];
        //     let count = 1;
        //     while ()
        //     start = end;
        // }
        return [start, end];
    }
    return row;
    //return row.reduce((acc, val) => acc + val[1] - val[0], 0);
}

console.log(sumIntervals([[1, 4], [-100, -98], [8, 10], [-5, -3], [5, 6], [-2, 0], [-20,-17], [11,12], [-30,-32],[90,91],[1,4]]));// 7
//console.log(sumIntervals([[1, 4], [8, 10], [-5, -3], [5, 6], [-2, 0]]));// 7
//console.log(sumIntervals([[1, 5], [1, 5]]));// 4
//console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]));// 7