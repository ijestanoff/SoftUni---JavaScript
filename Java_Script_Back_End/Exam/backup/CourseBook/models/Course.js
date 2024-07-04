const mongoose = require('mongoose');

const courseShema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 5,
        required: [true, 'Title is required']
    },
    type: {
        type: String,
        minLength: 3,
        required: [true, 'Type is required']
    },
    certificate: {
        type: String,
        minLength: 2,
        required: [true, 'Certificate is required']
    },
    image: {
        type: String,
        match: /^https?:\/\//,
        required: [true, 'Image is required']
    },
    description: {
        type: String,
        minLength: 10,
        required: [true, 'Description is required']
    },
    price: {
        type: Number,
        min: 0,
        required: [true, 'Price is required']
    },
    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: Date,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

courseShema.pre('save', function() {
    if (!this.createdAt) {
        this.createdAt = Date.now();
    }
});

const Course = mongoose.model('Course', courseShema);

module.exports = Course;