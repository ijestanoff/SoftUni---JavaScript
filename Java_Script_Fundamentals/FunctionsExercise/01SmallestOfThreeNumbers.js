function smalestNumbers (a,b,c) {
    function small(x, y, z){
        let smallNumber= x;
        if (smallNumber > y) smallNumber = y;
        if (smallNumber > z) smallNumber = z; 
        return smallNumber;
    }
    console.log(small(a,b,c));
}



smalestNumbers (2,
    5,
    3
    );
smalestNumbers (600,
    342,
    123
    );