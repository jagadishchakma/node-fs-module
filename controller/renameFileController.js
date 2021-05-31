/**
 * Title: File Rename Controller
 * Description: File renaming controller file
 * Author: Jagadish Chakma
 * Date: 31-05-2021
 * Verson: 0.1
 */

// dependencies
const fs = require("fs");
const path = require("path");

// module scaffolding
const fileController = {};

// rename file
fileController.renameFileController = (req, callBack) => {
  // get file path with file name
  const pathParsed = path.parse(__dirname);
  const filePath = pathParsed.dir;

  // asynchronously file renaming
//   fs.rename(
//     filePath + "/data/rename.html",
//     filePath + "/data/newRename.html",
//     (err) => {
//       if (!err) {
//         callBack("File renaming success");
//       } else {
//         callBack("File rename failed");
//       }
//     }
//   );

  // synchronously file renaming
  const fileRenameErro = fs.renameSync(filePath + "/data/rename.html", filePath + "/data/newRename.html");
  if (!fileRenameErro) {
    callBack("File renaming success");
  } else {
    callBack("File rename failed");
  }
};

// rename file controller exports
module.exports = fileController;
