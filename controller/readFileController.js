/**
 * Title: About route controller 
 * Description: About http route controller here
 * Author: Jagadish Chakma
 * Date: 31-05-2021
 * Version: 0.1
 */

// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const fileController = {};

// about get home controller
fileController.readFileController = (req, callBack) => {
    const pathParsed  = path.parse(__dirname);
    const pathName = pathParsed.dir + '/data/home.html';

    // asynchronous way
    fs.readFile(pathName, (error, data) => {
        if(error){
            callBack(error);
        }else{
            callBack(data);
        }
    });

    // synchronous way
    // const fileData = fs.readFileSync(pathName);
};

// aboutController module exports
module.exports = fileController;