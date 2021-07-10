const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(cors());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(cookieParser(secret));
};