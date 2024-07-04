const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    age: {
        type: Number,
        required: true,
        min: [12, 'Minimum age allowed is 12 years old!'],
        max: 120,
    },
});

studentSchema.methods.logInfo = function () {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old`);
};

studentSchema.virtual('description').get(function () {
    return `Name: ${this.name}, Age: ${this.age}.`;
});

//

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;