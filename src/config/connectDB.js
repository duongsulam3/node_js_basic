// get the client
//import mysql from "mysql2";
import mysql from "mysql2/promise";

// create the connection to database

console.log("Executing database...................");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

// simple query
// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     //console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

export default connection;
