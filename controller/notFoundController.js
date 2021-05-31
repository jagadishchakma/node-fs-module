/**
 * Title: Not Found Controller
 * Description: Handle not found http routes this controller
 * Author: Jagadish Chakma
 * Date: 31-05-2021
 * Version: 0.1
 */

// module scaffolding
const controller = {};

// not found controller handler
controller.notFoundController = (req, callBack) => {
    callBack('Not found controller');
};


// not found controller module exports
module.exports = controller;