const server = require("express")();
const PORT = 4000;
const HOST = "0.0.0.0";
const routes = require("./routes");

server.use("/", routes);

server.listen(PORT, HOST, () => {
  console.log(`Listening on: http://${HOST}:${PORT}`);
});
