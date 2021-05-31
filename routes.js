/**
 * Title: All routes handler file
 * Description: All http reques and response routes hanler here
 * Author: Jagadish Chakma
 * Date: 31-05-2021
 * Version: 0.1
 */

// dependencies
const { deleteFileController } = require('./controller/deleteFileController');
const { fileExistCheckController } = require('./controller/existFileController');
const {readFileController} = require('./controller/readFileController');
const { renameFileController } = require('./controller/renameFileController');
const { writeFileController } = require('./controller/writeFileController');

// routes declare are here
const routes = {
    read: readFileController,
    write: writeFileController,
    rename: renameFileController,
    delete: deleteFileController,
    exists: fileExistCheckController,
};


// routes module exports
module.exports = routes;