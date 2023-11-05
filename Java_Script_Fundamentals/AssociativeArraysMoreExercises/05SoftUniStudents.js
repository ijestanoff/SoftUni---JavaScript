function softUniStudents(input) {
    let courses = {};
    for (let part of input) {
        if (part.includes('@')) {
            let items = part.split(' with email ');
            let [name, credit] = items[0].split('[');
            credit = Number(credit.slice(0, credit.length - 1));
            let [email, course] = items[1].split(' joins ');
            if (course in courses) {
                if (courses[course].capacity > 0) {
                    courses[course].capacity--;
                    courses[course].students.push({name, email, credit});
                }
            }
        } else {
            let [course, capacity] = part.split(': ');
            if (course in courses) courses[course].capacity += Number(capacity);
            else courses[course] = { students: [], capacity: Number(capacity) };
        }
    }
    courses = Object.fromEntries(Object.entries(courses)
    .sort((a, b) => b[1].students.length - a[1].students.length));

    for (let course in courses) {
        console.log(`${course}: ${courses[course].capacity} places left`);
        courses[course].students.sort((a, b) => b.credit - a.credit);
        for (let student in courses[course].students) {
            console.log(`--- ${courses[course].students[student].credit}: ${courses[course].students[student].name}, ${courses[course].students[student].email}`);
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
console.log('--------');
softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']);