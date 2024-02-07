function calculator() {
    
    let num1Ref;
    let num2Ref;
    let resultRef;
    //debugger

    return {
        init: function (selector1, selector2, resultSelector) {
            num1Ref = document.querySelector(selector1);
            num2Ref = document.querySelector(selector2);
            resultRef = document.querySelector(resultSelector);
        },
        add: function () {
            resultRef.value = Number(num1Ref.value) + Number(num2Ref.value);
        },
        subtract: function () {
            resultRef.value = Number(num1Ref.value) - Number(num2Ref.value);
        }
    }
}

//const calculate = calculator ();
//calculate.init ('#num1', '#num2', '#result'); 




