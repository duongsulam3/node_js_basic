import express from "express";
import { join } from "path";
import req from "express/lib/request";
import res from "express/lib/response";
require("dotenv").config();

import configViewEngine from "./config/ViewEngine";
import initWebRoute from "./routes/web";
import connection from "./config/connectDB";
import initApiRoute from "./routes/api";

const app = express();
const port = process.env.PORT || 8080;

//Cấu hình Express gửi POST request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

//
initWebRoute(app);

//API
initApiRoute(app)

// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, '/index.html'));
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
