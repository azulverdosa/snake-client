const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", 
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    setTimeout(() => {
      conn.write("Move: right")}, 300);
      setTimeout(() => {
        conn.write("Move: up")}, 600);
        setTimeout(() => {
          conn.write("Move: up")}, 900);
          setTimeout(() => {
            conn.write("Name: Ava")}, 1200);
  });
  
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;

