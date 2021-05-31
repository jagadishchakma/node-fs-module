/**
 * Title: Write File Controller
 * Description: Write file handling controller system
 * Author: Jagadish Chakma
 * Date: 31-05-2021
 * Version: 0.1
 */
// dependencies
const path = require('path');
const fs = require('fs');


// module scaffolding
const fileController = {};

// write file controller method
fileController.writeFileController = (req, callBack) => {
    // get file path
    const pathParsed = path.parse(__dirname);
    const pathName = pathParsed.dir;
    const filePath = pathName+'/data/write.html';

    // file data write
    const data = (`<html>
        <body>
            <h1>This is write file</h1>
        </body>
    </html>`);
    
    // asynchronously file writing
    fs.writeFile(filePath, data, (err, result) => {
        if(err){
            callBack('File write error');
        }else{
            callBack('File Write Successfully');
        }
    });
};


// write file controller module exports
module.exports = fileController;