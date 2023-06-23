import express from 'express';
import { join } from 'path';
import req from 'express/lib/request';
import res from 'express/lib/response';
require('dotenv').config()




import configViewEngine from './config/ViewEngine';
import initWebRoute from './routes/web';
import connection from './config/connectDB';



const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoute(app);


// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, '/index.html'));
// })



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})