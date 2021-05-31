/**
 * Title: Handle Req Res
 * Description: Handling http request and response
 * Author: Jagadish Chakma
 * Date: 30-05-2021
 * Version: 0.1
 */

// dependencies
const routes = require('../routes');
const url = require('url');
const { notFoundController } = require('../controller/notFoundController');


// module scaffolding
const handler = {};

// request and response handler
handler.handleReqRes = (req, res) => {
    const pathParsed = url.parse(req.url);
    const pathname = pathParsed.pathname;
    const trimedPath = pathname.replace('/', '');
    const choosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundController;
    choosenHandler(req, (message) => {
        res.end(message);
    });
};

// module exports 
module.exports = handler;