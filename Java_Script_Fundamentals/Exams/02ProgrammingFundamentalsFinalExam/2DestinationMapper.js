function destinationMapper (input) {
    let destinations = [];
    let points = 0;
    let match = input.matchAll(/([\/=])(?<destination>[A-Z][A-Za-z]{2}[A-Za-z]*)\1/g);
    for (let curMatch of match) {
        destinations.push(curMatch.groups.destination);
        points += curMatch.groups.destination.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}\nTravel Points: ${points}`);
}

destinationMapper ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper ("ThisIs some InvalidInput");