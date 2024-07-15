const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./dbConfig/dbConfig");
const adminRoute = require("./Routes/adminRoutes");
const adminRequestRoute = require("./Routes/adminRequestRoutes");
const developerAuthRoutes = require('./Routes/developerAuth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());

app.use("/api/admin", adminRoute);
app.use("/api/admin-request", adminRequestRoute);
app.use('/api/developer/auth', developerAuthRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Listening on port ${port}, server is running.`)
);
