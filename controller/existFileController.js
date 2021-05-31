/**
 * Title: Exist File Check Controller
 * Description: Check file is exist or not
 * Author: Jagadish Chakma
 * Date: 31-05-2021
 * Version: 0.1
 */


// dependencies
const fs = require('fs');
const path = require('path');


// module scaffolding
const fileController = {};

// file exist check controller
fileController.fileExistCheckController = (req, callBack) => {
    // get file path
    const pathParsed = path.parse(__dirname);
    const rootPath  = pathParsed.dir;
    const filePath = rootPath + '/data/write.html';

    // asynchronoushly check avoid
    // fs.exists(filePath, (status) => {
    //     if(status){
    //         callBack('File Found');
    //     }else{
    //         callBack('File Not Found');
    //     }
    // });

    // synchronously check
    const fileExistCheck = fs.existsSync(filePath);
    if(fileExistCheck){
        callBack('true');
    }else{
        callBack('false');
    }
};

// file exist check controller module exports
module.exports  = fileController;