



function addAndSubtrack(a,b,c) {
    function subtract(x,y) {
        return x-y;
    }

    function sum(x,y) {
        return x+y;
    }

    console.log(subtract(sum(a,b),c));
}

addAndSubtrack(23,
    6,
    10
    );
addAndSubtrack(1,
    17,
    30
    );