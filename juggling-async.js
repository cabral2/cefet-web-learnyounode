const http = require("http");
const bl = require("bl");

const params = process.argv.slice(2);

const result = [];
for (let i = 0; i < params.length; i++) {
  http.get(params[i], (res) => {
    res.pipe(
      bl((error, data) => {
        if (error) return 0;

        result[i] = data.toString();

        if (result.length === params.length)
          result.forEach((item) => console.log(item));
      })
    );
  });
}
