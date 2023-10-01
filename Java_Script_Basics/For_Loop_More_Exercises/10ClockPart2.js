function clockPart2 (input) {
    for (let hour=0; hour<24; hour++)
        for (let minute=0; minute<60; minute++)
            for (let seconds=0; seconds<60; seconds++)
                console.log(`${hour} : ${minute} : ${seconds}`);
}