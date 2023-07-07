import connection from "../config/connectDB";

let getAllUser = async (req, res) => {
  const [rows] = await (await connection).execute("SELECT * FROM `users`");
  let [totalSize] = await (
    await connection
  ).query("SELECT COUNT(*) FROM `users`");
  (await connection).end;
  return res.status(200).json({
    total_size: totalSize[0],
    users: rows,
  });
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(404).json({
      message: "missing params require",
    });
  }

  await (
    await connection
  ).execute(
    "INSERT INTO `users`(firstName, lastName, email, address) value (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    message: "OK",
  });
};

let updateUser = async (req, res) => {
  //console.log(userID);
  let { firstName, lastName, email, address, id } = req.body;
  //console.log({ firstName, lastName, email, address });
  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(404).json({
      message: "missing params require",
    });
  }
  await (
    await connection
  ).execute(
    "UPDATE `users` SET  firstName = ? , lastName = ? , email = ? , address = ? WHERE id = ? ",
    [firstName, lastName, email, address, id]
  );
  return res.status(200).json({
    message: "OK",
  });
};

let deleteUser = async (req, res) => {
  let userID = req.params.id;
  if (!userID) {
    return res.status(404).json({
      message: "missing params require",
    });
  }
  await (
    await connection
  ).execute("DELETE FROM `users` WHERE id = ?", [userID]);
  return res.status(200).json({
    message: "OK",
  });
};

export default {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
