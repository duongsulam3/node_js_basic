import connection from "../config/connectDB";

let getHomepage = async (req, res) => {
  let data = [];

  //Query database
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    data = results.map((rows) => {
      return rows;
    });
    return res.render("test/index.ejs", { dataUser: data });
  });
};

let getAboutMe = (req, res) => {
  return res.send("I'm Dương");
};

export default {
  getHomepage,
  getAboutMe,
};
