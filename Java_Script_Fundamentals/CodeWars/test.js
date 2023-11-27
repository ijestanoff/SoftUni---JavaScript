function integerSquareRoot(number) {
	//coding and coding..
  let bigIntValue = BigInt(number);
  let squareRoot = BigInt(Math.floor(Math.sqrt(Number(bigIntValue))));
  return squareRoot;
  
  
  
  
  
  
  
}
console.log(integerSquareRoot('1000000000000'));