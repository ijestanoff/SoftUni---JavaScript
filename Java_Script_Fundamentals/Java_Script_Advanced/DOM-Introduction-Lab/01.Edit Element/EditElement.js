function editElement(element, match, replacer) {
    const content = element.textContent;
    element.textContent = content.split(match).join(replacer);
    //element.textContent = 'asdd';
}