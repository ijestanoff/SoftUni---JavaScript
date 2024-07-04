const mongoose = require('mongoose');
const Student = require('./models/Student');

mongoose.connect('mongodb://localhost:27017/test1')
    .then(() => console.log('DB Connected successfuly'));



// const student = new Student({
//     age: 17,
//     name: 'Stamat'
// });

// CREATE
// Save model instance to DB
// student.save()
//     .then((createdStudent) => {
//         console.log('Student saved');
//         console.log(createdStudent);
//     });

//Save with static method
// Student.create({
//     name: 'Unreal',
//     age: 12,
// }).then(data => console.log(data));

// READ
// Get all data
Student.find()
    .then(students => {
        students.forEach(student => student.logInfo());
    });

// Get all data with filter
Student.find({ age: { $gte: 19 } })
    .then(result => {
        result.forEach(student => console.log(student.description));
    });

// Get single record
Student.findOne({ name: { $in: ['Stamat', 'Mariyka'] } })
    .then(student => {
        console.log('findOne');
        console.log(student);
    });

// Get by ID
Student.findById('666c5d774ef4938239892712')
    .then(result => {
        console.log('findById');
        console.log(result);
    });

//UPDATE
// Student.updateOne({name: 'Pesho'}, {$set: {age:12}})
//     .then(result => {
//         console.log('updateOne');
//         console.log(result);
//     });

// Student.updateMany({age: 12 }, {$set: {age:20}})
//     .then(result => {
//         console.log('updateMany');
//         console.log(result);
//     });

Student.findByIdAndUpdate('666b31d43ba1dd3d7327514a', { age: 19 })
    .then(result => {
        console.log('findByIdAndUpdate');
        console.log(result);
    });

// DELETE
Student.findByIdAndDelete('666b31d43ba1dd3d7327514a')
    .then(result => {
        console.log('findByIdAndDelete');
        console.log(result);
    });

Student.deleteMany({ _id: { $in: ['666b30644497b015306d9e39', '666c5d774ef4938239892712'] } })
    .then(result => {
        console.log('deleteMany');
        console.log(result);
    });