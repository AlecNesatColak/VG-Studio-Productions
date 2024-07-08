const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./dbConfig/dbConfig");

app.use(express.json());

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on port ${port}, server is running.`));
