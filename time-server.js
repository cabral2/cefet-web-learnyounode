const net = require("net");

const format = (value) => {
  return value < 10 ? `0${value}` : value;
};

net
  .createServer((socket) => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    socket.end(
      `${year}-${format(month)}-${format(day)} ${format(hour)}:${format(
        minute
      )}\n`
    );
  })
  .listen(process.argv[2]);
