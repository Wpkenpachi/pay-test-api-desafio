const server = require("express")();
const routes = require("../routes");

server.use("/", routes);

module.exports = server;
