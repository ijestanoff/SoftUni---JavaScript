function destinationMapper (input) {
    //let points = 0;
    let destinations = input.match(/(?<=([\/=]))([A-Z][A-Za-z]{2,})(?=\1)/g) || [];
    if (destinations) points = destinations.reduce((acc, val) => acc + val.length, 0);
    console.log(`Destinations: ${destinations.join(', ')}\nTravel Points: ${points}`);
}

destinationMapper ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper ("ThisIs some InvalidInput");