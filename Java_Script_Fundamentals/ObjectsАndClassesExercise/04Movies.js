function movies(input) {
    let movies = {};
    for (let part of input) {
        if (part.includes('addMovie ')) {
            let movie = part.slice(9,);
            if (!movies.hasOwnProperty(movie)) {
                movies[movie] = {};
            }
        } else if (part.includes(' directedBy ')){
            let [movie, director] = part.split(' directedBy ');
            if (movies.hasOwnProperty(movie)) {
                movies[movie].director = director;
            }
        } else if (part.includes(' onDate ')){ 
            let [movie, date] = part.split(' onDate ');
            if (movies.hasOwnProperty(movie)) {
                movies[movie].date = date;
            }
        }
    }
    for (let movie in movies) {
        if (movies[movie].hasOwnProperty('director') && movies[movie].hasOwnProperty('date')) {
            let output = `{"name":"${movie}",`;
            for (let [key,value] of Object.entries(movies[movie])) {
                output += `"${key}":"${value}",`
            }
            output = output.slice(0,output.length-1) + '}'
            //console.log(`{"name":"${movie}","date":"${movies[movie].date}","director":"${movies[movie].director}"}`);
            console.log(output);
        }
    }
}

movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);
// movies(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo']);