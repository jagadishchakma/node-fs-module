/**
 * Title: fs module deeply learning
 * Description: node file system module practice
 * Author: Jagadish Chakma
 * Date: 30-05-2021
 * Version: 0.1
 */

// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// module scaffolding
const app = {};

// configuration
const config = {};
config.port = 5000;


// create server
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(config.port, () => {
        console.log(`server is running on port ${config.port}`);
    });
};

// server start
app.createServer();