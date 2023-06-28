import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  //Trang Home
  router.get("/", homeController.getHomepage);
  //Trang About Me
  router.get("/about", homeController.getAboutMe);
  //Detail User
  router.get("/detail/user/:id", homeController.getDetailUser)

  return app.use("/api/test", router);
};

export default initWebRoute;
