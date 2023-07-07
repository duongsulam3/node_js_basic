import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  //Trang Home
  router.get("/", homeController.getHomepage);
  //Trang About Me
  router.get("/about", homeController.getAboutMe);
  //Detail User
  router.get("/detailUser/:id", homeController.getDetailUser);
  //Create New User
  router.post("/createNewUser", homeController.createNewUser);
  //Delete User
  router.post("/deleteUser", homeController.deleteUser);
  //Edit User
  router.get("/editUser/:id", homeController.editUser);
  //Update User
  router.post("/updateUser", homeController.updateUser);

  router.get("/upload-file", homeController.uploadFIle)
  router.post("/upload-singlefile", homeController.uploadSingleFile)

  return app.use("/", router);
};

export default initWebRoute;
