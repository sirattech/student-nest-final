const mongoose = require("mongoose");


// let NewSchedule = new mongoose.Schema({
//     allDay: String,
//     text: String,
//     description: String,
//     startDate: String,
//     EndDate:String,
//     teacherId: String
// })




let NewSchedule = new mongoose.Schema({
    // value: {
        allDay: String,
        text: String,
        description: String,
        startDate: String,
        EndDate: String,
        teacherSelect: String,
        recurrenceRule: String
    // }
})

module.exports = mongoose.model("NewSchedule", NewSchedule)



// let NewSchedule = new mongoose.Schema({
//     allDay: String,
//     text: String,
//     description: String,
//     startDate: String,
//     EndDate:String,
//     teacherId: String
// })