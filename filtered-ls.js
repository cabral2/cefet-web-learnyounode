const fs = require("fs");

const path = process.argv[2];
const extension = process.argv[3];

fs.readdir(path, (error, list) => {
  if (error) return 0;

  list
    .filter((item) => item.includes(`.${extension}`))
    .forEach((file) => console.log(file));
});
