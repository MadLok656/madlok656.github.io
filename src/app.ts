// src/app.ts

import express from "express";
import config from "./config.js";
import ejs from 'ejs';
import { fileURLToPath } from "node:url";
import path from 'node:path';

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.join( path.dirname(__filename), "/.." );

const app = express();
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + "/public"))


app.get("/", (request, response) => {
    response.render(__dirname + '/html/index.html', {});
});

app.listen(config.port, function () {
    console.log(`Listening at port ${config.port}`);
})