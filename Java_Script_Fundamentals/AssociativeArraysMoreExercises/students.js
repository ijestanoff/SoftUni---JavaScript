function studentsAndCourses(input) {
  const students = [];
  const courses = [];

  input.forEach((elm) => {
    if (elm.includes(':')) {
      // course
      const [name, capacity] = elm.split(':');
      const existingCourse = courses.find((course) => course.name === name);
      if (existingCourse) {
        existingCourse.capacity += Number(capacity);
      } else {
        courses.push({ name, capacity: Number(capacity) });
      }
    }
  });

  input.forEach((elm) => {
    if (elm.includes('[')) {
      const username = elm.match(/(^.+)\[/i)[1];
      const credits = Number(elm.match(/\[(\d+)\]/)[1]);
      const email = elm.match(/[a-z0-9]+@[a-z]+[.][a-z]+/gi)[0];
      const student = { username, email, credits };
      students.push(student);
      const studentCourse = elm.split(' ').slice(-1)[0];
      const courseMatch = courses.find((course) => course.name === studentCourse);
      if (courseMatch && courseMatch.capacity !== 0) {
        courseMatch.capacity -= 1;
        courseMatch.students = courseMatch.students ? [...courseMatch.students, student] : [student];
        courseMatch.students.sort((a, b) => b.credits - a.credits);
      }
    }
  });

  courses.sort((a, b) => b.students.length - a.students.length);

  return courses
    .map((course) => {
      const header = `${course.name}: ${course.capacity} places left`;
      const stdStudents = course.students
        .map((student) => `--- ${student.credits}: ${student.username}, ${student.email}`)
        .join('\n');
      return `${header}
${stdStudents}`;
    })
    .join('\n');
}

console.log(studentsAndCourses([
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
  'user900[88] with email user900@user.com joins JSCore']));
console.log('--------');
studentsAndCourses([
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
