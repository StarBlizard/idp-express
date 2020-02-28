const path = require('path');
const fs   = require('fs');

const controllersFolder = path.join(process.cwd(), '/app/controllers/');

fs.readdir(controllersFolder, (err, fileNames) => {
  fileNames.forEach( fileName => {
    require(controllersFolder + fileName);
  });
});
