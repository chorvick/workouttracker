const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes"));
app.use(require('./routes/html-routes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
// (node:10604) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
// (Use `node --trace-warnings ...` to show where the warning was created)
// App running on port 3000!
// GET / 200 2.950 ms - 1381
// GET /style.css 200 1.896 ms - 7022
// GET /workout.js 200 1.283 ms - 2300
// GET /index.js 200 1.400 ms - 295
// GET /api.js 200 1.550 ms - 938
// GET /api/workouts 404 1.497 ms - 151
// GET /api/workouts 404 0.635 ms - 151
// GET /favicon.ico 404 0.433 ms - 150
// GET /exercise? 404 0.378 ms - 147
// GET /exercise 404 0.366 ms - 147
// GET / 304 0.676 ms - -
// GET /style.css 304 0.460 ms - -
// GET /index.js 304 1.129 ms - -
// GET /api.js 304 0.836 ms - -
// GET /workout.js 304 0.281 ms - -
// GET /api/workouts 404 0.781 ms - 151
// GET /api/workouts 404 1.153 ms - 151
// GET /stats 404 0.398 ms - 144
// GET /exercise? 404 0.354 ms - 147
// GET /stats 404 0.378 ms - 144
// GET / 304 0.296 ms - -
// GET /style.css 304 0.375 ms - -
// GET /index.js 304 0.766 ms - -
// GET /workout.js 304 0.381 ms - -
// GET /api.js 304 0.527 ms - -
// GET /api/workouts 404 0.530 ms - 151
// GET /api/workouts 404 0.746 ms - 151