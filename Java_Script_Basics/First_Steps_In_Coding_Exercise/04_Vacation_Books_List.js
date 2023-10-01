// total_pages = int(input())
// pages_per_hour = int(input())
// day_for_whole_book = int(input())
// total_hour_per_book = total_pages // pages_per_hour
// hour_per_day = total_hour_per_book / day_for_whole_book
// print (hour_per_day)

function vacantionBookList(inputArea) {
    let total_pages = Number(inputArea[0]);
    let pages_per_hour = Number(inputArea[1]);
    let day_for_whole_book = Number(inputArea[2]);
    let total_hour_per_book = (total_pages / pages_per_hour);
    let hour_per_day = total_hour_per_book / day_for_whole_book;
    console.log(hour_per_day);
}

vacantionBookList (["212","20","2"])