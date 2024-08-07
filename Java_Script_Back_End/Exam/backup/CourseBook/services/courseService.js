const Course = require('../models/Course');
const User = require('../models/User');

exports.getAll = () => Course.find();

exports.getOne = (courseId) => Course.findById(courseId);

exports.getLatest = () => Course.find().sort({createdAt: -1}).limit(3);

exports.getOneDetailed = (courseId) => this.getOne(courseId).populate('owner').populate('signUpList');

exports.signUp = async (courseId, userId) => {
    //await Course.findByIdAndUpdate(courseId, {$push: {signUpList: userId}});
    //await User.findByIdAndUpdate(userId, {$push: {signUpCourses: courseId}}); 
    const course = await Course.findById(courseId);
    const user = await User.findById(userId);

    course.signUpList.push(userId);
    user.signedUpCourses.push(courseId);

    await course.save();
    await user.save();
};

exports.create = async (userId, courseData) => {
    //add owner and spread courseData

    const createdCourse = await Course.create({
        owner: userId,
        ...courseData
    });
    //if program is here course is created!

    //go to user model, find user by userId and push in his createdCourses createdCourse._id
    await User.findByIdAndUpdate(userId, { $push: { createdCourses: createdCourse._id } });

    return createdCourse;
};

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.edit = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData, { runValidators: true });