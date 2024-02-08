function requestValidator(request) {
    //let pattern = /^[A-Za-z.]+$/;
    let pattern = /^[\w.]+$/g;

    let availableMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let availableVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let specialChar = ["<", ">", "\\", "&", `"`, `'`];
    if (!availableMethods.includes(request.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    //if ((request.uri != "*" && !pattern.test(request.uri)) || !request.hasOwnProperty("uri")) {
    if (!request.uri || !request.uri === "*" || !request.uri.match(pattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!availableVersion.includes(request.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (!request.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    } 
    // else {
    //     request.message.split('').forEach(char => {
    //         if (specialChar.includes(char)) {
    //             throw new Error("Invalid request header: Invalid Message");
    //         }
    //     });
    // }
    for (let el of request.message) {
        if (specialChar.includes(el)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }
    return request;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
console.log("-----------");
//   requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   });
console.log("-----------");
// requestValidator({
//     method: 'POST',
//     uri: '*',
//     message: 'rm -rf /*'
// });