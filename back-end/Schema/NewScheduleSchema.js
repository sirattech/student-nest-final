const mongoose = require("mongoose");


let NewSchedule = new mongoose.Schema({
    allDay: String,
    text: String,
    description: String,
    startDate: String,
    EndDate:String,
    teacherId: String
})

module.exports = mongoose.model("NewSchedule", NewSchedule)



// let NewSchedule = new mongoose.Schema({
//     allDay: String,
//     values:[ {
//             allDay: String,
//     text: String,
//     description: String,
//     startDate: String,
//     EndDate:String,
//     }]
// })




// let NewSchedule = new mongoose.Schema({
//     allDay: String,
//     text: String,
//     description: String,
//     startDate: String,
//     EndDate:String,
//     teacherId: String
// })