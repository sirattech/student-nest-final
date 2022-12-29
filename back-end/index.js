const express = require("express");
const app = express()
const cors = require('cors')
require("./config/config")
app.use(express.json())
app.use(cors())




// ........................Agency data add .......................//
const Agency = require("./Schema/AgencySchema")
app.post("/agency", async(req, res)=>{
    console.log("req", req.body);
    
    let agencies = new Agency(req.body)
    let result = await agencies.save();
    console.log(result);
    res.send(result);
})

// get Agency data
app.get("/agency", async(req,res)=>{
    let agencyData = await Agency.find()
    if (agencyData.length) {
        res.send(agencyData)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})

// delete Agency data
app.delete("/ageny_data_delete/:id", async(req,res)=>{
    console.log(req.params.id);
    let result = await Agency.deleteOne({_id: req.params.id})
    res.send(result)
})

// Find Single Agency Data
app.get("/single_person_agency_data/:id",async(req,res)=>{
    let result = await Agency.findOne({_id: req.params.id})
    res.send(result);
})

//  Update Agency Data 
app.put("/update_single_person_agency_data/:id",async (req, res) => {
    let result = await Agency.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})

// ........................Programs data add .......................//

const Programs = require("./Schema/ProgramsSchema")

app.post("/programs", async(req, res)=>{
    console.log("req", req.body);
    
    let Program = new Programs(req.body)
    let result = await Program.save();
    console.log(result);
    res.send(result);
})
// get programs data
app.get("/programs", async(req,res)=>{
    let agencyData = await Programs.find()
    if (agencyData.length) {
        res.send(agencyData)
    } else {
        res.send({ result: "No agency Data Found" })
    }
})

// delete programs data
app.delete("/programs_data_delete/:id", async(req,res)=>{
    console.log(req.params.id);
    let result = await Programs.deleteOne({_id: req.params.id})
    res.send(result)
})

// Find Single programs Data
app.get("/single_person_programs_data/:id",async(req,res)=>{
    let result = await Programs.findOne({_id: req.params.id})
    res.send(result);
})

//  Update programs Data 
app.put("/update_single_person_programs_data/:id",async (req, res) => {
    let result = await Programs.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
})



































app.get("/", (req, res)=>{
    try {
        res.status(200).send("server 🏃🏻‍♂️ good")
    } catch (error) {
        console.error("error while get method", error);
    }
  });

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});