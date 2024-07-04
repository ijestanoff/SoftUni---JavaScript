exports.errorHandler = (err, req, res, next) => {
    const message = err.message || 'Something went wrong!';
    const status = err.status || 500;

    res.status(status).json({ message });
};