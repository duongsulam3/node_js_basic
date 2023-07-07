import express from "express";
import apiController from "../controller/apiController";

let router = express.Router();

const initApiRoute = (app) => {
  //Get data users
  router.get("/users", apiController.getAllUser);
  //Post data user
  router.post("/create-user", apiController.createNewUser);
  //Put ( Update ) user
  router.put("/update-user", apiController.updateUser);
  //Delete user
  router.delete("/delete-user/:id", apiController.deleteUser);

  return app.use("/api/v1/", router);
};

export default initApiRoute;
