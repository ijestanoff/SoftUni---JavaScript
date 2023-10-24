function extractEmails(input) {
    //let regex = /\b[\w]+[.\_-]?[\w]*@[\w]+[.-]?[\w]*[.-]?[\w]*[.-]?[\w]+[.][\w]+\b/g;
    let regex = /(^|\s)([\w]+[\.\-_]?[\w]+@([A-Za-z]+([\-_]?[A-Za-z]+(\.[A-Za-z]+)+)+))(\b|(?=\s))/g;
    let match = input.matchAll(regex);
    for (let curMatch of match) {
        let email = curMatch[0];
        if (email[0] != '_' && email[0] != '-' && email[0] != '.') {
            console.log(email);
        }
    }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');
console.log('----');
extractEmails('Examples of invalid emails: --123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft., s.johnson@invalid-.');