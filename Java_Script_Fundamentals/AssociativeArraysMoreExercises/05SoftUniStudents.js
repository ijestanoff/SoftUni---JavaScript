function softUniStudents(input) {
    let coursesCapacity = {};
    let coursesStudents = {};
    let coursesTotCount = {};
    for (let part of input) {
        if (part.includes(': ')) {
            let command = part.split(': ');
            let courseName = command[0];
            let courseCount = Number(command[1]);
            if (!coursesCapacity.hasOwnProperty(courseName)) {
                coursesCapacity[courseName] = courseCount;
                coursesStudents[courseName] = {};
            }
            else coursesCapacity[courseName] += courseCount;
        } else {
            let command = part.split(' ');
            let inx = command[0].indexOf('[');
            let username = command[0].slice(0, inx);
            let credit = command[0].slice(inx + 1, command[0].length - 1);
            let email = command[3];
            let courseName = command[5];
            if (coursesStudents.hasOwnProperty(courseName)) {
                let currFullness = Object.keys(coursesStudents[courseName]).length;
                if (currFullness < coursesCapacity[courseName]) {
                    coursesStudents[courseName][username] = {};
                    coursesStudents[courseName][username]['credit'] = credit;
                    coursesStudents[courseName][username]['email'] = email;
                }
            }
        }
    }

    for (let course in coursesStudents) {
        let totalCount = Object.keys(coursesStudents[course]).length;
        coursesTotCount[course] = totalCount;
    }
    //sort by number of user in course
    let keysSortByValue = Object.entries(coursesTotCount);
    keysSortByValue.sort((a, b) => b[1] - a[1]);
    coursesTotCount = Object.fromEntries(keysSortByValue);

    for (let course in coursesTotCount) {
        let totalCount = Object.keys(coursesStudents[course]).length;
        let countLeft = coursesCapacity[course] - totalCount;
        console.log(`${course}: ${countLeft} places left`);

        let creditSort = {};
        for (let user in coursesStudents[course]) {
            creditSort[user] = Number(coursesStudents[course][user]['credit']);
        }
        //sort by user credit
        let keysSortByValue = Object.entries(creditSort);
        keysSortByValue.sort((a, b) => b[1] - a[1]);
        creditSort = Object.fromEntries(keysSortByValue);

        for (let user in creditSort) {
            console.log(`--- ${coursesStudents[course][user]['credit']}: ${user}, ${coursesStudents[course][user]['email']}`);
        }
    }
}

softUniStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']);
// softUniStudents ([
// 'JavaBasics: 15',
// 'user1[26] with email user1@user.com joins JavaBasics',
// 'user2[36] with email user11@user.com joins JavaBasics',
// 'JavaBasics: 5',
// 'C#Advanced: 5',
// 'user1[26] with email user1@user.com joins C#Advanced',
// 'user2[36] with email user11@user.com joins C#Advanced',
// 'user3[6] with email user3@user.com joins C#Advanced',
// 'C#Advanced: 1',
// 'JSCore: 8',
// 'user23[62] with email user23@user.com joins JSCore']);