var mymodule = require("./mymodule.js");

var directory = process.argv[2];
var ext = process.argv[3];

mymodule(directory, ext, function (error, list) {
  if (error) return 0;

  list.forEach((item) => {
    console.log(item);
  });
});
