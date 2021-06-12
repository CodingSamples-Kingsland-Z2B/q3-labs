const homeHandler = require('./home.js');
const staticFile = require('./static-files.js')
const catHandler = require('./cats.js')

module.exports = [homeHandler, staticFile, catHandler]