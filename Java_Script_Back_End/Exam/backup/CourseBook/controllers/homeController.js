const router = require('express').Router();
const { isAuth } = require('../middleware/authMiddleware');

const courseService = require('../services/courseService');
const userService = require('../services/userService');

router.get('/', async (req, res) => {
    const latestCourses = await courseService.getLatest().lean();
    res.render('home', { latestCourses });
});

router.get('/profile', isAuth, async (req, res) => {
    const user = await userService.getInfo(req.user._id).lean();
    const createdCoursesCount = user.createdCourses?.length || 0;
    console.log(createdCoursesCount);
    const signUpCoursesCount = user.signedUpCourses?.length || 0;
    res.render('profile', { user, createdCoursesCount, signUpCoursesCount });
});

// TODO delete this
// router.get('/authorize-test', isAuth, (req,res) => {
//     console.log(req.user);
//     res.send('You are authorized');
// });

module.exports = router;