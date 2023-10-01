function weatherForcastPart2 (input) {
    let temperature = Number(input[0]);
    let weather = '';
    if (temperature>=26 && temperature<=35)
        weather = "Hot";
    else if (temperature>=20.1 && temperature<=25.9)
        weather = "Warm";
    else if (temperature>=15 && temperature<=20)
        weather = "Mild";
    else if (temperature >= 12 && temperature <= 14.9)
        weather = "Cool";
    else if (temperature >= 5 && temperature <= 11.9)
        weather = "Cold";
    else
        weather = "unknown";
    console.log(weather);
}