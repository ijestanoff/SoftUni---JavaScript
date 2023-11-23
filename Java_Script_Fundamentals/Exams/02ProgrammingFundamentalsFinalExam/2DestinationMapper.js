function destinationMapper(input) {
    let destinations = input.match(/(?<=([\/=]))([A-Z][A-Za-z]{2,})(?=\1)/g) || [];
    let points = destinations.reduce((acc, place) => acc + place.length, 0);
    console.log(`Destinations: ${destinations.join(', ')}\nTravel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");