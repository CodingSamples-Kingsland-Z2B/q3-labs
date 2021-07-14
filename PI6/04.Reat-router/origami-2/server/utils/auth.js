const jwt = require('./jwt');
const config = require('../config/config');
const models = require('../models');

module.exports = (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.cookies[config.authCookieName] || '';

        Promise.all([
            jwt.verifyToken(token),
            models.TokenBlacklist.findOne({ token })
        ])
            .then(([data, blacklistToken]) => {
                if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                models.User.findById(data.id)
                    .then((user) => {
                        req.user = user;
                        next();
                    });
            })
            .catch(err => {
                if (!redirectAuthenticated) { next(); return; }

                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    res.status(401).send('UNAUTHORIZED!');
                    return;
                }

                next(err);
            })
    }

};