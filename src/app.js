const server = require("express")();
const PORT = 4040;
const routes = require("./routes");

server.use("/", routes);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
