var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "donkey.crqjqr5nokgx.us-east-1.rds.amazonaws.com",
  user: "donkey",
  password: "donkey123",
  database: "donkeycargo"
  /*host: "localhost",
  user: "root",
  password: "",
  database: "donkey"*/
});

module.exports = connection;
