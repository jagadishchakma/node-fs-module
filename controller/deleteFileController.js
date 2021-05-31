/**
 * Title: Delete File Controller
 * Description: Delete existing file controller
 * Author: Jagadish Chakma
 * Date: 31-05-2021
 * Version: 0.1
 */

// dependencies
const fs = require('fs');
const path = require('path');

// module scaffolding
const fileController = {};

// deleteFile controller
fileController.deleteFileController = (req, callBack) => {
    // get the deleting file
    const pathParsed = path.parse(__dirname);
    const rootPath = pathParsed.dir;
    const filePath = rootPath + '/data/test.html';

    // asynchronously file deleting
    // fs.unlink(filePath, (err) => {
    //     if(!err){
    //         callBack('File deleting success');
    //     }else{
    //         callBack('File deleting failed');
    //     }
    // });

    // synchronously file deleting
    const fielDeleteError = fs.unlinkSync(filePath);
    if(!fielDeleteError){
        callBack('File deleting success');
    }else{
        callBack('File deleting failed');
    }
};

// delete file controller exports
module.exports = fileController;