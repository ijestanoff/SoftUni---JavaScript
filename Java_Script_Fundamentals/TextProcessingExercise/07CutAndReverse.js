function cutAndReverse (input) {
    console.log(`${input.slice(0,input.length/2).split('').reverse().join('')}\n${input.slice(input.length/2, input.length).split('').reverse().join('')}`);
}

cutAndReverse ('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse ('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');