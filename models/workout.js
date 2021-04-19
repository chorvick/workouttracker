const mongoose = require("mongoose");
const logger = require("morgan");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(

    {
        day: {
            type: Date,
            default: Date.now,
        },


        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter exercise type",
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter name of exercise",
                },
                duration: {
                    type: Number,
                    required: "Please enter minutes of exercise duration",
                },
                weight: {
                    type: Number,

                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },

            }
        ]
    },





    ///////// why does the databaase show april 17 2021 in robo 3t for a crazy run I just added when the date on my computer says april 19th
    // r{
    //     "_id" : ObjectId("607d76f4f7f22c20d8d59b7a"),
    //     "day" : ISODate("2021-04-17T12:26:28.209Z"),
    //     "exercises" : [ 
    //         {
    //             "type" : "resistance",
    //             "name" : "Military Press",
    //             "duration" : 20,
    //             "weight" : 300,
    //             "reps" : 10,
    //             "sets" : 4
    //         }, 
    //         {
    //             "_id" : ObjectId("607d773d345106314c39fa1f"),
    //             "type" : "cardio",
    //             "name" : "Running",
    //             "distance" : 55,
    //             "duration" : 199
    //         }
    //     ]
    // }



)


const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;