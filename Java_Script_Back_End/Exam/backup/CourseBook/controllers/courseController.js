const router = require('express').Router();
const { isAuth } = require('../middleware/authMiddleware');
const courseService = require('../services/courseService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/', async (req, res) => {
    const courses = await courseService.getAll().lean();

    res.render('courses/catalog', { courses });
});

router.get('/:courseId/details', async (req, res) => {
    const course = await courseService.getOneDetailed(req.params.courseId).lean();

    const signUpUsers = course.signUpList.map(user => user.username).join(', ');
    const isOwner = course.owner._id && course.owner._id == req.user?._id;
    const isSigned = course.signUpList.some(user => user._id == req.user?._id)
    //spread used to simplify presentation on .hbs files
    res.render('courses/details', { ...course, signUpUsers, isOwner, isSigned });
});

router.get('/:courseId/sign-up', async (req, res) => {
    await courseService.signUp(req.params.courseId, req.user._id);

    res.redirect(`/courses/${req.params.courseId}/details`);
});

router.get('/create', isAuth, (req, res) => {
    res.render('courses/create');
});

router.post('/create', isAuth, async (req, res) => {
    const courseData = req.body;
    // console.log(courseData);
    try {
        //service create relation btw courseData & user
        await courseService.create(req.user._id, courseData);

        res.redirect('/courses');
    } catch (error) {
        res.render('courses/create', { ...courseData, error: getErrorMessage(error) });
    }

});

router.get('/:courseId/edit', isCourseOwner, async (req, res) => {
    res.render('courses/edit', { ...req.course });
});

router.post('/:courseId/edit', isCourseOwner, async (req, res) => {
    //take data from form (body)
    const courseData = req.body;

    try {
        await courseService.edit(req.params.courseId, courseData);

        res.redirect(`/courses/${req.params.courseId}/details`);

    } catch (err) {
        res.render('courses/edit', { ...courseData, error: getErrorMessage(err) });
    }

});

router.get('/:courseId/delete', isCourseOwner, async (req, res) => {
    await courseService.delete(req.params.courseId);

    res.redirect('/courses');
});

async function isCourseOwner(req, res, next) {
    const course = await courseService.getOne(req.params.courseId).lean();

    if (course.owner != req.user?._id) {
        return res.redirect(`/courses/${req.params.courseId}/details`);
    }

    //save course to req because we will use it in Edit
    req.course = course;

    next();
}

module.exports = router;