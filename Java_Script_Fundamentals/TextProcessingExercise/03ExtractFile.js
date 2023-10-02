function extractFile (fullPath) {
    let filename = fullPath.split('\\').pop().split('.');
    let extension = filename.pop();
    console.log(`File name: ${filename.join('.')}\nFile extension: ${extension}`);
}

extractFile ('C:\\Internal\\training-internal\\Template.pptx');
extractFile ('C:\\Projects\\Data-Structures\\LinkedList.cs');