const fs = require("fs");

if (!process.argv[2]) return 0;

const file = fs.readFile(process.argv[2], "utf8", (error, data) => {
  if (error) return 0;
  console.log(data.split("\n").length - 1);
});
