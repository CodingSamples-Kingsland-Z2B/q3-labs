const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://alfred:alfred00@cluster0.efrmq.mongodb.net/origami',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];