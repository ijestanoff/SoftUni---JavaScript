function hand(holeCards, communityCards) {
    let type = 'nothing';
    let ranks = [...holeCards,...communityCards];
    return { type, ranks };
}


console.log(hand(['K♠','A♦'],['J♣','Q♥','9♥','2♥','3♦'])); //{type:'nothing', ranks:['A','K','Q','J','9']}
console.log(hand(['K♠','Q♦'],['J♣','Q♥','9♥','2♥','3♦'])); //{type:'pair', ranks:['Q','K','J','9']}
console.log(hand(['K♠','J♦'],['J♣','K♥','9♥','2♥','3♦'])); //{type:'two pair', ranks:['K','J','9']}
console.log(hand(['4♠','9♦'],['J♣','Q♥','Q♠','2♥','Q♦'])); //{type:'three-of-a-kind', ranks:['Q','J','9']}
console.log(hand(['Q♠','2♦'],['J♣','10♥','9♥','K♥','3♦']));//{type: 'straight', ranks:['K','Q','J','10','9']}
console.log(hand(['A♠','K♦'],['J♥','5♥','10♥','Q♥','3♥']));//{type:'flush', ranks:['Q','J','10','5','3']}
console.log(hand(['A♠','A♦'],['K♣','K♥','A♥','Q♥','3♦'])); //{type:'full house', ranks:['A','K']}
console.log(hand(['2♠','3♦'],['2♣','2♥','3♠','3♥','2♦'])); //{type:'four-of-a-kind', ranks:['2','3']}
console.log(hand(['8♠','6♠'],['7♠','5♠','9♠','J♠','10♠']));//{type:'straight-flush', ranks:['J','10','9','8','7']}