const server = require("./server");
const PORT = 4000 || 4001;
const HOST = "0.0.0.0";

server.listen(PORT, HOST, () => {
  console.log(`Listening on: http://${HOST}:${PORT}`);
});
