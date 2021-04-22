const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const compression = require('compression')
const PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/one", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// routes
app.use(require("./routes/api-routes"));
app.use(require('./routes/html-routes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
//// if running locally change line 15 to mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {  

// it is currently configured to work on heroku
