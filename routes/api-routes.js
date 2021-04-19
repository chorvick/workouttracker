//// we require the models and express 

const router = require("express").Router();
const db = require("../models/");

////

/// get previous workouts

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

/// add a workout to db

router.post('api/workouts', ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res / status(400).json(err);
    });
});










module.exports = router;
