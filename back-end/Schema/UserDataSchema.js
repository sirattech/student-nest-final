const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
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
            language: String,
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
    active: String,
    activeStatus: String,
    mondayStartTime: String,
    mondayEndTime: String,
    tuesdayStartTime: String,
    tuesdayEndTime: String,
    wednesdayStartTime: String,
    wednesdayEndTime: String,
    thursdayStartTime: String,
    thursdayEndTime: String,
    fridayStartTime: String,
    fridayEndTime: String,
    saturdayStartTime: String,
    saturdayEndTime: String,
    sundayStartTime: String,
    sundayEndTime: String
})


// encrypting password before saving
UserData.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
 });

// verify password
UserData.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
}

module.exports = mongoose.model("UserData", UserData)