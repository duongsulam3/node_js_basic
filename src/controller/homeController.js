import connection from "../config/connectDB";

let getHomepage = async (req, res) => {
  //Query database
  //let data = [];
  // connection.query("SELECT * FROM `users`", function (err, results, fields) {
  //   console.log(results); // results contains rows returned by server
  //   data = results.map((rows) => {
  //     return rows;
  //   });
  //   return res.render("test/index.ejs", { dataUser: data });
  // });

  const [rows] = await (await connection).execute("SELECT * FROM `users`");
  console.log("Connected database");
  return res.render("test/index.ejs", { dataUser: rows });
};

let getAboutMe = (req, res) => {
  return res.send("I'm Dương");
};

let getDetailUser = async (req, res) => {
  let userID = req.params.id;
  let [users] = await (
    await connection
  ).execute("SELECT * FROM `users` WHERE id = ?", [userID]);
  console.log(users);
  return res.send(JSON.stringify(users[0]));
};

export default {
  getHomepage,
  getAboutMe,
  getDetailUser,
};
