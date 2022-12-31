const mongoose = require("mongoose")

let UserData = new mongoose.Schema({
    role : String,
    timeZone: [
        {
        _id: String,
        timezone: String
    }
],
    personNameEnter: [
        {
        _id : String,
        title: String,
        active: String,
    }
],
    selectProgramsEnter: [
        {
            _id : String,
            title: String,
            active: String,
        }
    ],
    selectSchoolsEnter: [
        {
            _id : String,
            title: String,
            active: String,
        }
    ],
    selectGradesEnter: [
        {
            _id : String,
            title: String,
            active: String,
        }
    ],
    selectSubjectsEnter: [
        {
            _id : String,
            title: String,
            active: String,
        }
    ],
    selectLanguagesEnter: [
        {
            _id : String,
            title: String,
            active: String,
        }
    ],
    consortiumId: String,
    gender: String,
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: String,
    address: String,
    password: String,
    reTypePassword: String,
    active: String,
    activeStatus: String
})

module.exports = mongoose.model("UserData", UserData)