import express from 'express';
import { join } from 'path';
import configViewEngine from './config/ViewEngine';
import req from 'express/lib/request';
import res from 'express/lib/response';


const app = express();
const port = 6868

configViewEngine(app);

app.get('/', (req, res) => {
    res.render("test/index.ejs");
})

// app.get('/', (req, res) => {
//     res.sendFile(join(__dirname, '/index.html'));
// })



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})