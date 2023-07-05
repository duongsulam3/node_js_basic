import connection from "../config/connectDB";

let getHomepage = async (req, res) => {
  //Query database
  const [rows] = await (await connection).execute("SELECT * FROM `users`");
  //console.log("Connected database");
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
  //console.log(users);
  return res.send(JSON.stringify(users[0]));
};

let createNewUser = async (req, res) => {
  //console.log(req.body);
  let { firstName, lastName, email, address } = req.body;
  await (
    await connection
  ).execute(
    "INSERT INTO `users`(firstName, lastName, email, address) value (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let userID = req.body.userID;
  await (
    await connection
  ).execute("DELETE FROM `users` WHERE id = ?", [userID]);
  return res.redirect("/");
};

let editUser = async (req, res) => {
  let userID = req.params.id;
  let [user] = await (
    await connection
  ).execute("SELECT * FROM `users` WHERE id = ?", [userID]);
  //console.log(user);
  return res.render("test/editUser.ejs", { dataUser: user[0] });
};

let updateUser = async (req, res) => {
  let userID = req.body.userID;
  //console.log(userID);
  let { firstName, lastName, email, address } = req.body;
  //console.log({ firstName, lastName, email, address });
  await (
    await connection
  ).execute(
    "UPDATE `users` SET  firstName = ? , lastName = ? , email = ? , address = ? WHERE id = ? ",
    [firstName, lastName, email, address, userID]
  );
  return res.redirect("/");
};

export default {
  getHomepage,
  getAboutMe,
  getDetailUser,
  createNewUser,
  deleteUser,
  editUser,
  updateUser,
};
