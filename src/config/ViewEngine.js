import express from "express";

const configViewEngine = ( app ) => {
    //Cấu hình Static File Express
    app.use(express.static('./src/public/'))

    // cấu hình EJS
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

export default configViewEngine