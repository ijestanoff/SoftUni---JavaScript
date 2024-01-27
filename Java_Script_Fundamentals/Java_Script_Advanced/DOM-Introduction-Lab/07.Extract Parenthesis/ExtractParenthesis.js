function extract(content) {
    let text = document.getElementById('content').textContent;
    let matchAll = text.matchAll(/\(([^\)]*)\)/g);
    let result = [];
    for (let match of matchAll) {
        result.push(match[1]);
    } 
    return result.join('; ');
}