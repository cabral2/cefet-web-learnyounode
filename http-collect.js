const http = require("http");
const bl = require("bl");

http.get(process.argv[2], (res) => {
  res.pipe(
    bl((error, data) => {
      if (error) return 0;

      console.log(data.toString().length);
      console.log(data.toString());
    })
  );
});
