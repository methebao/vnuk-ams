module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({ error: 'You must log in!' });
    }
    next();
};
