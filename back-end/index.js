const express = require("express");
const app = express()
const cors = require('cors')
require("./config/config")
app.use(express.json())
app.use(cors())
const https = require('https');
var fs = require('fs')
const sendEmail = require("./sendEmail.js");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/rktutoring.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/rktutoring.com/fullchain.pem')
};

const bcrypt = require('bcryptjs');

// ........................Agency data add .......................//
const Agency = require("./Schema/AgencySchema")
app.post("/agency", async (req, res) => {
    console.log("req", req.body);

    let agencies = new Agency(req.body)
    let result = await agencies.save();
    console.log(result);
    res.send(result);
})

// get Agency data
app.get("/agency", async (req, res) => {
    let agencyData = await Agency.find()
    if (agencyData.length) {
        res.send(agencyData)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})

// delete Agency data
app.put("/ageny_data_delete/:id", async (req, res) => {
    console.log(req.params.id);
    let result = await Agency.updateOne({ _id: req.params.id }, {
        $set: req.body
    })
    res.send(result)
})

// Find Single Agency Data
app.get("/single_person_agency_data/:id", async (req, res) => {
    let result = await Agency.findOne({ _id: req.params.id })
    res.send(result);
})

//  Update Agency Data 
app.put("/update_single_person_agency_data/:id", async (req, res) => {
    let result = await Agency.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// ........................Programs data add .......................//

const Programs = require("./Schema/ProgramsSchema")

app.post("/programs", async (req, res) => {
    console.log("req", req.body);

    let Program = new Programs(req.body)
    let result = await Program.save();
    console.log(result);
    res.send(result);
})
// get programs data
app.get("/programs", async (req, res) => {
    let agencyData = await Programs.find()
    if (agencyData.length) {
        res.send(agencyData)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})

// delete programs data
app.put("/programs_data_delete/:id", async (req, res) => {
    console.log(req.params.id);
    let result = await Programs.updateOne({ _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// Find Single programs Data
app.get("/single_person_programs_data/:id", async (req, res) => {
    let result = await Programs.findOne({ _id: req.params.id })
    res.send(result);
})

//  Update programs Data 
app.put("/update_single_person_programs_data/:id", async (req, res) => {
    let result = await Programs.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})


// ........................Schools data add .......................//
const Schools = require("./Schema/SchoolSchema")
app.post("/schools", async (req, res) => {
    console.log("req", req.body);

    let school = new Schools(req.body)
    let result = await school.save();
    console.log(result);
    res.send(result);
})
// get Schools data
app.get("/schools", async (req, res) => {
    let school = await Schools.find()
    if (school.length) {
        res.send(school)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})

// delete Schools data
app.put("/schools_data_delete/:id", async (req, res) => {
    console.log(req.params.id);
    let result = await Schools.updateOne({ _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// Find Single Schools Data
app.get("/single_person_schools_data/:id", async (req, res) => {
    let result = await Schools.findOne({ _id: req.params.id })
    res.send(result);
})

//  Update Schools Data 
app.put("/update_single_person_schools_data/:id", async (req, res) => {
    let result = await Schools.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// ........................Grade data add .......................//
const Grades = require("./Schema/GradeSchema")
app.post("/grades", async (req, res) => {
    console.log("req", req.body);

    let school = new Grades(req.body)
    let result = await school.save();
    console.log(result);
    res.send(result);
})
// get grades data
app.get("/grades", async (req, res) => {
    let school = await Grades.find()
    if (school.length) {
        res.send(school)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})

// delete grades data
app.put("/grades_data_delete/:id", async (req, res) => {
    console.log(req.params.id);
    let result = await Grades.updateOne({ _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// Find Single grades Data
app.get("/single_person_grades_data/:id", async (req, res) => {
    let result = await Grades.findOne({ _id: req.params.id })
    res.send(result);
})

//  Update grades Data 
app.put("/update_single_person_grades_data/:id", async (req, res) => {
    let result = await Grades.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// ........................Subjects data add .......................//
const Subjects = require('./Schema/SubjectSchema')

app.post("/subjects", async (req, res) => {
    console.log("req", req.body);

    let school = new Subjects(req.body)
    let result = await school.save();
    console.log(result);
    res.send(result);
})
// get Subjects data
app.get("/subjects", async (req, res) => {
    let school = await Subjects.find()
    if (school.length) {
        res.send(school)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})

// delete Subjects data
app.put("/subjects_data_delete/:id", async (req, res) => {
    console.log(req.params.id);
    let result = await Subjects.updateOne({ _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// Find Single Subjects Data
app.get("/single_person_subjects_data/:id", async (req, res) => {
    let result = await Subjects.findOne({ _id: req.params.id })
    res.send(result);
})

//  Update Subjects Data 
app.put("/update_single_person_subjects_data/:id", async (req, res) => {
    let result = await Subjects.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result)
})


// ................... Time Zone Add ....................../
const TimeZone = require("./Schema/TimeZoneSchema")
app.post("/timezone", async (req, res) => {
    let timezone = new TimeZone(req.body);
    let result = await timezone.save();
    console.log(result);
    res.send(result);
})
app.get('/timezone', async (req, res) => {
    let timezones = await TimeZone.find()
    if (timezones.length) {
        res.send(timezones)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})


// .........................Language APi ..................//
const Language = require("./Schema/LanguageSchema")
app.post("/language", async (req, res) => {
    let language = new Language(req.body);
    let result = await language.save();
    console.log(result);
    res.send(result);
})

app.get("/language", async (req, res) => {
    let lan = await Language.find();
    if (lan.length) {
        res.send(lan)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})


// ............................. User Data Add .................//
const UserData = require("./Schema/UserDataSchema")
app.post("/User_Data", async (req, res) => {

    const userDataSUbmit = new UserData(req.body);
    let result = await userDataSUbmit.save()
    // console.log(req.body);
    res.send(result)
})

app.get("/User_Data", async (req, res) => {
    let use = await UserData.find();

    if (use.length) {
        res.send(use)
    } else {
        res.send({ result: "No agency Data Found" })
    }

})

// single value Change active => Inactive

app.put("/user_Single_Data_Delete/:id", async (req, res) => {

    // console.log(req.body);
    let result = await UserData.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
})

app.get("/User_Data_Filter/:key", async (req, res) => {
    
    try {
        let myARR = [];
        let data = req.params.key
        let query = new URLSearchParams(data);
        let personName = query.get("personName")
        let selectPrograms = query.get("selectPrograms")
        // selectPrograms = selectPrograms.split(",");
        console.log("hhhhh",selectPrograms);
        let selectLanguages = query.get("selectLanguages")
        // selectLanguages = selectLanguages.split(",");
        let selectSchools = query.get("selectSchools");
        // selectSchools = selectSchools.split(",")
        let selectGrades = query.get("selectGrades");
        let selectSubjects = query.get("selectSubjects")
        // selectSubjects = selectSubjects.split(",")
        let day = query.get("Day")
        let startTime = query.get("StartTime")
        let endTime = query.get("EndTime")
        let dbStartTime;
        let dbEndTime;
        if (day === "Monday") {
            dbStartTime = { "mondayStartTime": { $lte: startTime } };
            dbEndTime = { "mondayEndTime": { $gte: endTime } }
        } else if (day === "Tuesday") {
            dbStartTime = { "tuesdayStartTime": { $lte: startTime } };
            dbEndTime = { "tuesdayEndTime": { $gte: endTime } }
        } else if (day === "Wednesday") {
            dbStartTime = { "wednesdayStartTime": { $lte: startTime } };
            dbEndTime = { "wednesdayEndTime": { $gte: endTime } }
        } else if (day === "Thursday") {
            dbStartTime = { "thursdayStartTime": { $lte: startTime } };
            dbEndTime = { "thursdayEndTime": { $gte: endTime } }
        } else if (day === "Friday") {
            dbStartTime = { "fridayStartTime": { $lte: startTime } };
            dbEndTime = { "fridayEndTime": { $gte: endTime } }
        } else if (day === "Saturday") {
            dbStartTime = { "saturdayStartTime": { $lte: startTime } };
            dbEndTime = { "saturdayEndTime": { $gte: endTime } }
        } else if (day === "Sunday") {
            dbStartTime = { "sundayStartTime": { $lte: startTime } };
            dbEndTime = { "sundayEndTime": { $gte: endTime } }
        }

         if(personName.length > 0){
            myARR.push({ "personNameEnter": { $all: personName } }) 
         }
console.log("selectPrograms", selectPrograms.length);
         if(selectPrograms.length > 0){
            // agency =  { "personNameEnter": { $all: personName } },
            // program=  { "selectProgramsEnter": { $all: selectPrograms } },
            // school=  { "selectSchoolsEnter": { $all: selectSchools } },
            // grade =  { "selectGradesEnter": { $all: selectGrades } },
            // subject=  { "selectSubjectsEnter": { $all: selectSubjects } },
            // language=   { "selectLanguagesEnter": { $all: selectLanguages } }
            myARR.push({ "selectProgramsEnter": { $all: selectPrograms } })
           
         }
         console.log("selectSchools", selectSchools.length);
         if(selectSchools.length > 0){
            myARR.push({ "selectSchoolsEnter": { $all: selectSchools } })
           
         }
         console.log("selectGrades", selectGrades.length);
         if(selectGrades.length > 0){
            myARR.push({ "selectGradesEnter": { $all: selectGrades } }) 
         }
         console.log("selectSubjects", selectSubjects.length);
         if(selectSubjects.length > 0){
            myARR.push({ "selectSubjectsEnter": { $all: selectSubjects } })
         }
         console.log("selectLanguages", selectLanguages.length);
         if(selectLanguages.length > 0){
            myARR.push({ "selectLanguagesEnter": { $all: selectLanguages } })
           
         }
         myARR.push(dbStartTime);
         myARR.push(dbEndTime);
        // console.log("personName", myARR);
        
        let result = await UserData.find({
            $and :myARR
            // $and: [
            //     agency,
            //     language,
            //     subject,
            //     grade,
            //     school,
            //     program,
            //     dbStartTime,
            //     dbEndTime,
            // ]
        })
        res.send(result)
    } catch (e) {
        console.log("e", e);
    }
 
})
// Find user Single data
app.get("/user_single_data_find/:id", async (req, res) => {
    let result = await UserData.findOne({ _id: req.params.id })
    res.send(result)
})

app.put("/user_single_data_Update/:id", async (req, res) => {
    // console.log(req.body);
    let { password, role, timeZone, personNameEnter, selectProgramsEnter, selectSchoolsEnter, selectGradesEnter, selectSubjectsEnter, selectLanguagesEnter,
        consortiumId, gender, firstName, lastName, email, mobileNumber, address, mondayStartTime, mondayEndTime, tuesdayStartTime, tuesdayEndTime, wednesdayStartTime,
        wednesdayEndTime, thursdayStartTime, thursdayEndTime, fridayStartTime, fridayEndTime, saturdayStartTime, saturdayEndTime, sundayStartTime, sundayEndTime
    } = req.body
    const passwordss = await bcrypt.hash(password, 10);
    let withoutpassword = ({
        role: role, timeZone: timeZone, personNameEnter: personNameEnter, selectProgramsEnter: selectProgramsEnter, selectSchoolsEnter: selectSchoolsEnter,
        selectGradesEnter: selectGradesEnter, selectSubjectsEnter: selectSubjectsEnter, selectLanguagesEnter: selectLanguagesEnter, consortiumId: consortiumId, gender: gender,
        firstName: firstName, lastName: lastName, email: email, mobileNumber: mobileNumber, address: address, mondayStartTime: mondayStartTime, mondayEndTime: mondayEndTime,
        tuesdayStartTime: tuesdayStartTime, tuesdayEndTime: tuesdayEndTime, wednesdayStartTime: wednesdayStartTime, wednesdayEndTime: wednesdayEndTime, thursdayStartTime: thursdayStartTime,
        thursdayEndTime: thursdayEndTime, fridayStartTime: fridayStartTime, fridayEndTime: fridayEndTime, saturdayStartTime: saturdayStartTime, saturdayEndTime: saturdayEndTime, sundayStartTime: sundayStartTime, sundayEndTime: sundayEndTime
    })
    let withpassword = ({
        role: role, timeZone: timeZone, personNameEnter: personNameEnter, selectProgramsEnter: selectProgramsEnter, selectSchoolsEnter: selectSchoolsEnter,
        selectGradesEnter: selectGradesEnter, selectSubjectsEnter: selectSubjectsEnter, selectLanguagesEnter: selectLanguagesEnter, consortiumId: consortiumId, gender: gender,
        firstName: firstName, lastName: lastName, email: email, mobileNumber: mobileNumber, address: address, mondayStartTime: mondayStartTime, mondayEndTime: mondayEndTime,
        tuesdayStartTime: tuesdayStartTime, tuesdayEndTime: tuesdayEndTime, wednesdayStartTime: wednesdayStartTime, wednesdayEndTime: wednesdayEndTime, thursdayStartTime: thursdayStartTime,
        thursdayEndTime: thursdayEndTime, fridayStartTime: fridayStartTime, fridayEndTime: fridayEndTime, saturdayStartTime: saturdayStartTime, saturdayEndTime: saturdayEndTime, sundayStartTime: sundayStartTime, sundayEndTime: sundayEndTime, password: passwordss
    })
    console.log("password", password.length);

    console.log("password", passwordss);
    if (password.length <= 0) {
        let result = await UserData.updateOne(
            { _id: req.params.id },
            {
                $set: withoutpassword
            }
        )
        console.log("resultOk", result);
        res.send(result);
    } else {

        let result = await UserData.updateOne(
            { _id: req.params.id },
            {
                $set: withpassword
            }
        )
        console.log("resultNot", result);
        res.send(result);
    }

})

// ........................... Schedule api ................//
const Schedule = require("./Schema/ScheduleSchema")
app.post("/schedule", async (req, res) => {

    let scheduless = new Schedule(req.body)

    let result = await scheduless.save()
    res.send(result)
})

app.get("/schedule", async (req, res) => {
    let result = await Schedule.find();
    if (result.length) {
        res.send(result)
    } else {
        res.send({ result: "No agency Data Found" })
    }

})

// ................... Schedule google api .................//
const NewSchedule = require("./Schema/NewScheduleSchema")
app.post("/schedule_google", cors(), async (req, res) => {
    let new_schedule = new NewSchedule(req.body);
    let result = await new_schedule.save();
    res.send(result)
})
app.get("/schedule_googles_filter/:key", cors(), async (req, res) => {
    let data = req.params.key
    console.log("data", data);
    let query = new URLSearchParams(data);
    let day = query.get("Day")
    let startTime = query.get("StartTime")
    let endTime = query.get("EndTime")
    let teacherId = query.get("teacherId")

    let dayWeek;

    if (day === "Monday") {
        dayWeek = "MO"
    } else if (day === "Tuesday") {
        dayWeek = "TU"
    } else if (day === "Wednesday") {
        dayWeek = "WE"
    } else if (day === "Thursday") {
        dayWeek = "TH"
    } else if (day === "Friday") {
        dayWeek = "FR"
    } else if (day === "Saturday") {
        dayWeek = "SA"
    } else if (day === "Sunday") {
        dayWeek = "SU"
    }
    let result = await NewSchedule.find({
        $expr: {
            $cond: {
                if: { "recurrenceRule": { regex: "WEEKLY" } },
                then: { "recurrenceRule": { regex: /dayWeek$/ } },
                else: { "day": { all: day } }
            }
        },
        $and: [
            { "teacherSelect": { $all: teacherId } },
            { "startTime": { $all: startTime } },
            { "endTIme": { $all: endTime } }

        ]

    })
    console.log(result);
    res.send(result)
})
app.get("/schedule_googles/:id", cors(), async (req, res) => {
    let result = await NewSchedule.find({ teacherSelect: req.params.id })
    res.send(result)
})
app.put(("/schedule_google/:id"), async (req, res) => {
    let result = await NewSchedule.updateOne(
        { _id: req.body._id },
        {
            $set: req.body
        }
    )
    res.send(result);
})
app.get("/schedule_googles_Data", cors(), async (req, res) => {
    let teacherId = "teacherSelect"
    const distinctValues = await NewSchedule.distinct(teacherId);
    res.send(distinctValues)
})
app.delete(("/schedule_google/:id"), async (req, res) => {
    let result = await NewSchedule.deleteOne({ _id: req.params.id })
    res.send(result)
})
app.get("/", (req, res) => {
    try {
        res.status(200).send("server 🏃🏻‍♂️ good")
    } catch (error) {
        console.error("error while get method", error);
    }
});
app.delete("/delete_Student_All_Data/:id", async(req,res)=>{
    console.log(req.params.id);
    let result = await NewSchedule.deleteMany({ teacherSelect: req.params.id })
    res.send(result)
})
//..............................login ...........................//
const Admin = require("./Schema/AdminSchema")
app.post("/admin_data", async (req, res) => {
    let admin = new Admin(req.body);
    let result = await admin.save();
    // console.log(result);
    res.send(req.body)
})
app.get("/admin_data", async (req, res) => {
    let use = await UserData.find();
    if (use.length) {
        res.send(use)
    } else {
        res.send({ result: "No Admin Data Found" })
    }
})
app.get("/admin_data_show/:id", async (req, res) => {
    let result = await UserData.findOne({ _id: req.params.id })
    res.send(result);
})
app.put("/admin_update_data/:id", async (req, res) => {
    let result = await UserData.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result)
})
app.put("/reset_password/:id", async (req, res) => {
    try {
        let { oldPassword, password } = req.body
        let result = await UserData.findOne({ _id: req.params.id })
        const isMatched = await result?.comparePassword(oldPassword);
        if (!isMatched) {

            return res.send({ result: "Old password not exist! please enter correct old password" })
        }
        if (isMatched == true) {
            const passwordss = await bcrypt.hash(password, 10);
            let resultsss = await UserData.updateOne(
                { _id: req.params.id },
                {
                    $set: { password: passwordss }

                }
            )
            res.send(resultsss)

        }

    } catch (e) {
        console.log("e", e);
    }
})
app.post("/login", async (req, res) => {
    let { email, password } = req.body
    if (!email || !password) {
        return res.send({ result: "E-mail and password are required" })
    }
    let checklogin = await UserData.findOne({ email: email })
    if (!checklogin) {
        return res.send({ result: "Invalid credentials" })
    }
    const isMatched = await checklogin.comparePassword(password);
    if (!isMatched) {

        return res.send({ result: "Invalid credentials password" })
    }
    res.send({ result: "Login Successfully", status: checklogin })
})


// ...........................mail send .................//
const EmailRecordSchema = require("./Schema/EmailRecordSchema")


app.post("/send_Reservation_Data", async (req, res) => {
    // console.log("hhhhh", req.body);
    let { mailSTartTime, mailEndTime, email, description, text, day, recurrenceRule } = req.body
    // let {dropOff,date,time,service,passengerSelect,firstName,lastName,email,phone,returnDate,returnTime,pickUp} = req.body
    try {

        const send_to = email;
        const sent_from = "muhmdbilal3333@gmail.com"
        // process.env.SEND_From;
        const reply_to = email;
        const subject = "Thank You Message From StudentNest";
        const message = `
        <div style="font-size: .8rem; margin: 0 30px">
                <p>Start Time: <b>${mailSTartTime}</b></p>
                <p>End Time: <b>${mailEndTime}</b></p>
                <p>Subject: <b>${text}</b></p>
                <p>Day <b>${day}</b></p>
                <p>Description <b>${description}</b></p>
                <pWeekly Repeat <b>${recurrenceRule}</b></p>

              </div>
        `;
        await sendEmail(subject, message, send_to, sent_from, reply_to);
        let emailRecord = new EmailRecordSchema(req.body)
        let result = await emailRecord.save();
        res.send({ success: true, message: "Email Sent", result: result });
    } catch (error) {
        res.send(error.message);
    }
})

app.get("/get_Email_Data", async (req, res) => {
    let use = await EmailRecordSchema.find();
    if (use.length) {
        res.send(use)
    } else {
        res.send({ result: "No Email Data Found" })
    }
})
app.post("/send_Reservation_Update_Data", async (req, res) => {
    console.log("hhhhh", req.body);
    let { startTime, endTIme, email, description, text, day, recurrenceRule } = req.body
    // let {dropOff,date,time,service,passengerSelect,firstName,lastName,email,phone,returnDate,returnTime,pickUp} = req.body
    try {

        const send_to = email;
        const sent_from = "muhmdbilal3333@gmail.com"
        // process.env.SEND_From;
        const reply_to = email;
        const subject = "Upadte Teacher Scheduler";
        const message = `
        <div style="font-size: .8rem; margin: 0 30px">
                <p>Start Time: <b>${startTime}</b></p>
                <p>End Time: <b>${endTIme}</b></p>
                <p>Subject: <b>${text}</b></p>
                <p>Day <b>${day}</b></p>
                <p>Description <b>${description}</b></p>
                <pWeekly Repeat <b>${recurrenceRule}</b></p>

              </div>
        `;
        await sendEmail(subject, message, send_to, sent_from, reply_to);
        
        res.send({ success: true, message: "Email Sent" });
    } catch (error) {
        res.send(error.message);
    }
})

const port = process.env.PORT || 8000
https.createServer(options, app).listen(port, () => {
    console.log(`Server Running at ${port}`)
});


// const port = process.env.PORT || 8000
// app.listen(port, () => {
//     console.log(`Server Running at ${port}`)
// });

