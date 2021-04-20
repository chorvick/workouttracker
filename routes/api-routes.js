//// we require the models and express 

const router = require('express').Router();
const db = require('../models/');

////

/// get previous workouts

router.get('/api/workouts', (req, res) => {
  db.Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: "$exercises.duration"
      }
    }
  }]).then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
    .catch(err => {
      res.status(400).json(err);
    });
});

/// add a workout to db

router.post('/api/workouts', ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res / status(400).json(err);
    });
});


//// put route used to update excerise by id number 

router.put('/api/workouts/:id', (req, res) => {
  db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

/// get 7 workouts for stats pag

router.get('/api/workouts/range', (req, res) => {
  db.Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: "$exercises.duration"
      }
    }
  }]).limit(7).then(response => {
    res.json({ data: response })
  }).catch(err => {
    console.log(err)
    res.json({ error: err })
  })
});








module.exports = router;
