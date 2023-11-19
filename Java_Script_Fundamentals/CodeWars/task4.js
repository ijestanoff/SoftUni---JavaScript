function solve (pin) {
    return (/^\d{4}$|^\d{6}$/).test(pin);
}

console.log(solve("1234"));
console.log(solve("12345"));
console.log(solve("123416"));
console.log(solve("a234"));
console.log(solve("'123"));

// "1234"   -->  true
// "12345" -->  false
// "a234"   -->  false