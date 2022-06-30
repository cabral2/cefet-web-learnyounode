const fs = require("fs");

const filterFiles = (path, extension, callback) => {
  fs.readdir(path, (error, list) => {
    if (error) return callback(error);

    return callback(
      null,
      list.filter((item) => item.includes(`.${extension}`))
    );
  });
};

module.exports = filterFiles;
