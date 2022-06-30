const fs = require("fs");

if (!process.argv[2]) return 0;

const file = fs.readFileSync(process.argv[2]);
// The count of "\n"s will be the (number of lines) - 1
console.log(file.toString().split("\n").length - 1);
