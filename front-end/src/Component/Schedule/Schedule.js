import React, { useState, useEffect } from "react";
// import "./User.css"
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { BACKEND_URI } from "../../config/config";
import Form from "react-bootstrap/Form";
import { element } from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import TimePicker from "rc-time-picker";
// import {getTime} from "./data"
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStylesone(name, selectLanguages, theme) {
  return {
    fontWeight:
      selectLanguages.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStylesTwo(name, selectPrograms, theme) {
  return {
    fontWeight:
      selectPrograms.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStylesThree(name, selectSchools, theme) {
  return {
    fontWeight:
      selectSchools.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStylesFour(name, selectGrades, theme) {
  return {
    fontWeight:
      selectGrades.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function getStylesFive(name, selectSubjects, theme) {
  return {
    fontWeight:
      selectSubjects.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Schedule({ setTeacherSelect, teacherSelect, setSessionData,sessionData }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [selectLanguages, setSelectLanguages] = useState([]);
  const [selectPrograms, setSelectProgram] = useState([]);
  const [selectSchools, setSelectSchool] = useState([]);
  const [selectGrades, setSelectGrades] = useState([]);
  const [selectSubjects, setSelectSubjects] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  const [agencyData, setAgencyData] = useState([]);
  const [programData, setProgramData] = useState([]);
  const [schoolsData, setSchoolData] = useState([]);
  const [gradeData, setGradeData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [timeZoneGet, setTimeZoneGet] = useState([]);
  const [languageGet, setLanguageGet] = useState([]);
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openTeacher, setOpenTeacher] = useState(false);
  const [teacherId, setTeacherId] = useState([]);
  const [scheduleTable, setscheduleTable] = useState([]);
  const [scheduleTableData, setScheduleTableData] = useState([]);
  const [mondayStartTime, setMondayStartTime] = useState("00:00");
  const [mondayEndTime, setMondayEndTime] = useState("");
  
  const handleChange = (event) => {
    // console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeOne = (event) => {
    console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setSelectLanguages(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeTwo = (event) => {
    // console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setSelectProgram(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeThree = (event) => {
    // console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setSelectSchool(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeFour = (event) => {
    // console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setSelectGrades(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeFive = (event) => {
    // console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setSelectSubjects(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const mondayTimeChange = (value) => {
    console.log("e.target.value", value && value.format("HH:mm"));
    setMondayStartTime(value && value.format("HH:mm"));
  };
  const mondayendTimeChange = (value) => {
    console.log("e.target.value", value && value.format("HH:mm"));
    setMondayEndTime(value && value.format("HH:mm"));
  };

  const userDataGet = async () => {
    try {
      await axios.get(`${BACKEND_URI}/User_Data`).then((resdata) => {
        let arr = [];
        for (var i = 0; i <= resdata.data.length; i++) {
          if (resdata?.data[i]?.role == "Teacher") {
            // console.log(resdata?.data[i]);
            arr.push(resdata?.data[i]);
          }
        }
        setTeacherId(arr);
      });
    } catch (e) {
      console.log("e", e);
    }
  };
  const handleChangetTeacher = (event) => {
    try {
      let techerid = event.target.value;
      localStorage.setItem("teacherSelect", JSON.stringify(techerid));
      setTeacherSelect(event.target.value);
    } catch (e) {
      console.log("e", e);
    }
  };
  const handleData = async () => {
    try {
      let teacherSelectssss = JSON.parse(localStorage.getItem("teacherSelect"));
      // console.log("teacherSelectssss", teacherSelectssss);
      // teacherSelect("")
      await axios.get(`${BACKEND_URI}/User_Data`).then((resss) => {
        resss.data.forEach((element) => {
          if (teacherSelectssss == element._id) {
            teacherId.forEach((text) => {
              if (teacherSelectssss == text._id) {
                console.log("element.ids", text);
                localStorage.setItem("teacherName", JSON.stringify(text));
              }
            });
            //  alert("good")
            // getTime()
            navigate("/newschedule");
            window.location.reload();
          } else {
            toast.error("please enter Schedule from User");
          }
          //    else {
          //
          //    }
        });
        //   for(var i = 0; i< resss.data.length;i++){
        //     console.log("resss", resss.data[i].ids);
        //    if(resss.data[i].ids == teacherSelectssss){
        //      alert("good")
        //     navigate("/newschedule")
        //    } else {
        //     alert("please enter Schedule from User")
        //    }
        // }
      });
    } catch (e) {
      console.log("e", e);
    }
  };
  const handleChangesix = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseTeacher = () => {
    setOpenTeacher(false);
  };
  const handleOpenTeacher = () => {
    setOpenTeacher(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const allApiData = async () => {
    try {
      await axios.get(`${BACKEND_URI}/agency`).then((agencyRes) => {
        // console.log("agencyRes", agencyRes.data);
        setAgencyData(agencyRes.data);
      });
      await axios.get(`${BACKEND_URI}/programs`).then((programsRes) => {
        // console.log("programsRes", programsRes.data);
        setProgramData(programsRes.data);
      });
      await axios.get(`${BACKEND_URI}/schools`).then((schoolsRes) => {
        // console.log("schoolsRes", schoolsRes.data);
        setSchoolData(schoolsRes.data);
      });
      await axios.get(`${BACKEND_URI}/grades`).then((gradesRes) => {
        // console.log("gradesRes", gradesRes.data);
        setGradeData(gradesRes.data);
      });
      await axios.get(`${BACKEND_URI}/subjects`).then((subjectsRes) => {
        // console.log("subjectsRes", subjectsRes.data);
        setSubjectData(subjectsRes.data);
      });
      await axios.get(`${BACKEND_URI}/timezone`).then((timezoneres) => {
        // console.log("timezoneres", timezoneres.data);
        setTimeZoneGet(timezoneres.data);
      });
      await axios.get(`${BACKEND_URI}/language`).then((languageRes) => {
        // console.log("languageRes", languageRes.data);
        setLanguageGet(languageRes.data);
      });
    } catch (e) {
      console.log("e", e);
    }
  };
  useEffect(() => {
    userDataGet();
  }, []);

  const scheduleShowData = async () => {
    try {
      let newscheduledata = await axios.get(
        `${BACKEND_URI}/schedule_googles_Data`
      );
      let UserData = await axios.get(`${BACKEND_URI}/User_Data`);
      let resSchedule = await axios.get(`${BACKEND_URI}/schedule`);
      let arr = [];
      let arryData = [];
      newscheduledata.data.forEach((element) => {
        console.log("element", element);
        UserData.data.forEach((dataElement) => {
          if (element == dataElement._id) {
            console.log("dataElement", dataElement);
            arr.push( dataElement);
           
          }
        });
      });
      setSessionData(arr.length)
      setScheduleTableData(arr);
    } catch (e) {
      console.log("e", e);
    }
  };
  
  const filterData = async()=>{
    try{
      // let resSchedule = await axios.get(`${BACKEND_URI}/User_Data`);
      // console.log("resSchedule", resSchedule.data);
     await axios.get(`${BACKEND_URI}/User_Data_Filter/personName=${personName}&selectPrograms=${selectPrograms}&selectLanguages=${selectLanguages}&selectSchools=${selectSchools}&selectGrades=${selectGrades}&selectSubjects=${selectSubjects}&Day=${age}&StartTime=${mondayStartTime}&EndTime=${mondayEndTime}`).then((filtersss)=>{
       console.log("filtersss", filtersss?.data);
      //  filtersss?.data.forEach((userAAA)=>{
      //     console.log("userAAA", userAAA);
      //     resSchedule.data.forEach(())
       })


    // })

      // let newscheduledata = await axios.get(
      //   `${BACKEND_URI}/schedule_googles_Data`
      // );
      // console.log("newscheduledata", newscheduledata);
    }catch(e){
      console.log("e", e);
    }
  }

  useEffect(() => {
    scheduleShowData();
  }, []);
  useEffect(() => {
    allApiData();
  }, []);

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="row user-box-1">
        <div className="col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3">
          <h4 className="user-h4 mt-2">Schedule</h4>
          <div>
            <button className="btn btn-dangerpdf me-md-3 mt-2">
              EXPORT TO PDF
            </button>

            <button className="btn btn-dangerexcel mt-2">
              EXPORT TO EXCEL
            </button>
          </div>
        </div>
      </div>
      <div
        className="row d-flex justify-content-center justify-content-between pt-3 pb-3 align-items-center"
        style={{ background: "white" }}
      >
        <div className="col-lg-5 text-md-start mt-2">
          <button
            className="btn btn-primaryadd me-md-3 mt-2"
            onClick={() => setModalShow(true)}
          >
            {/* <Link to="/newschedule" style={{ textDecoration: "none", color: "white" }}> */}
            <i className="fa-solid fa-plus"></i> Add New Session
            {/* </Link> */}
          </button>
          {/* <button className="btn  mt-2">
            <i class="fa-solid fa-upload"></i> Bulk Upload
          </button> */}
        </div>
        <div className="col-lg-7  ">
          <div className="row  d-flex justify-content-lg-end ">
            <div className="col-lg-3 mt-2">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Active</option>
                <option value="1">Inactive</option>
              </select>
            </div>
            <div className="col-lg-8 mt-2">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="search here"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row " style={{ background: "#F5F5F5" }}>
        <div className="col-lg-4 mt-3">
          <FormControl className="select-width">
            <InputLabel id="demo-multiple-name-label">Select Agency</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Select Agency" />}
              MenuProps={MenuProps}
              className="text-start"
            >
              {agencyData.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.title}
                  style={getStyles(name, personName, theme)}
                >
                  {name.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-4 mt-3">
          <FormControl className="select-width">
            <InputLabel id="demo-multiple-name-label-one">
              Select Language
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label-one"
              id="demo-multiple-name-one"
              multiple
              value={selectLanguages}
              onChange={handleChangeOne}
              input={<OutlinedInput label=" Select Language" />}
              MenuProps={MenuProps}
              className="text-start"
            >
              {languageGet.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.language}
                  style={getStylesone(name, selectLanguages, theme)}
                >
                  {name.language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-4 mt-3">
          <FormControl className="select-width">
            <InputLabel id="demo-multiple-name-label-two">
              Select Program
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label-two"
              id="demo-multiple-name-two"
              multiple
              value={selectPrograms}
              onChange={handleChangeTwo}
              input={<OutlinedInput label=" Select Program" />}
              MenuProps={MenuProps}
              className="text-start"
            >
              {programData.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.title}
                  style={getStylesTwo(name, selectPrograms, theme)}
                >
                  {name.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-4 mt-3">
          <FormControl className="select-width">
            <InputLabel id="demo-multiple-name-label-two">
              Select School
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label-two"
              id="demo-multiple-name-two"
              multiple
              value={selectSchools}
              onChange={handleChangeThree}
              input={<OutlinedInput label=" Select School" />}
              MenuProps={MenuProps}
              className="text-start"
            >
              {schoolsData.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.title}
                  style={getStylesThree(name, selectSchools, theme)}
                >
                  {name.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-4 mt-3">
          <FormControl className="select-width">
            <InputLabel id="demo-multiple-name-label-two">
              Select Grade
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label-two"
              id="demo-multiple-name-two"
              multiple
              value={selectGrades}
              onChange={handleChangeFour}
              input={<OutlinedInput label=" Select Grade" />}
              MenuProps={MenuProps}
              className="text-start"
            >
              {gradeData.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.title}
                  style={getStylesFour(name, selectGrades, theme)}
                >
                  {name.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-4 mt-3">
          <FormControl className="select-width">
            <InputLabel id="demo-multiple-name-label-two">
              Select Subject
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label-two"
              id="demo-multiple-name-two"
              multiple
              value={selectSubjects}
              onChange={handleChangeFive}
              input={<OutlinedInput label=" Select Subject" />}
              MenuProps={MenuProps}
              className="text-start"
            >
              {subjectData.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.title}
                  style={getStylesFive(name, selectSubjects, theme)}
                >
                  {name.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="col-lg-4 mt-3">
          <FormControl className="select-width">
            <InputLabel id="demo-controlled-open-select-label">Days</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={age}
              label="Days"
              className="text-start"
              onChange={handleChangesix}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday ">Sunday </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-3 mt-3">
          <TimePicker
            placeholder="Start Time"
            defaultValue={0}
            showSecond={false}
            onChange={mondayTimeChange}
          />
        </div>
        <div className="col-lg-4 mt-3">
          <TimePicker
            placeholder="End Time"
            defaultValue={0}
            showSecond={false}
            onChange={mondayendTimeChange}
          />
        </div>
        <div className="col-lg-4 col-11 mt-3 mb-3">
          <div className="d-grid gap-2">
            <button
              className="btn btn-info"
              size="lg"
              onClick={filterData}
              style={{ color: "white" }}
            >
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
        </div>
      </div>

      <div
        className="row d-flex justify-content-center"
        style={{ background: "white" }}
      >
        <p className="text-start mt-3 ">Total Sessions: {sessionData}</p>

        <div className="col-lg-12 border ">
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <thead className="text-start">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Teacher</th>
                  <th scope="col">Mon</th>
                  <th scope="col">Tue</th>
                  <th scope="col">Wed</th>
                  <th scope="col">Thu</th>
                  <th scope="col">Fri</th>
                  <th scope="col">Sat</th>
                  <th scope="col">Sun</th>
                  <th scope="col">Control</th>
                </tr>
              </thead>
              <tbody className="text-start">
                {scheduleTableData.length > 0 ? (
                  scheduleTableData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{`${item.firstName} ${item.lastName}`}</td>
                        <td>{`${item.mondayStartTime} - ${item.mondayEndTime}`}</td>
                        <td>{`${item.tuesdayStartTime} - ${item.tuesdayEndTime}`}</td>
                        <td>{`${item.wednesdayStartTime} - ${item.wednesdayEndTime}`}</td>
                        <td>{`${item.thursdayStartTime} - ${item.thursdayEndTime}`}</td>
                        <td>{`${item.fridayStartTime} - ${item.fridayEndTime}`}</td>
                        <td>{`${item.saturdayStartTime} - ${item.saturdayEndTime}`}</td>
                        <td>{`${item.sundayStartTime} - ${item.sundayEndTime}`}</td>
                        <td>
                          {/* <Link
                                to={`/view_single_User_Data/${items._id}`}
                                style={{ textDecoration: "none" }}
                              > */}
                          <button
                            className="btn btn-xs btn-info me-2 mt-1"
                            style={{ paddibg: "0" }}
                            title="View"
                          >
                            <i
                              className="fa-solid fa-eye"
                              style={{ color: "white" }}
                            ></i>
                          </button>
                          {/* </Link>
                              <Link
                                to={`/update_single_user_data/${items._id}`}
                                style={{ textDecoration: "none" }}
                              > */}
                          <button
                            className="btn btn-xs btn-warning me-2 mt-1"
                            style={{ paddibg: "0" }}
                            title="Update"
                          >
                            <i
                              className="fa-solid fa-pencil"
                              style={{ color: "white" }}
                            ></i>
                          </button>
                          {/* </Link> */}
                          <button
                            className="btn btn-xxs btn-danger mt-1"
                            title="Delete"
                            // onClick={() => UserDataDelete(items._id)}
                          >
                            <i
                              className="fa-solid fa-xmark"
                              style={{ color: "white" }}
                            ></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colspan="10" className="text-center fs-4">No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modalShow ? (
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Select Teacher
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select
              aria-label="Default select example"
              value={teacherSelect}
              onChange={handleChangetTeacher}
              required
            >
              <option>Open this select menu</option>
              {teacherId.map((name, index) => {
                return (
                  <>
                    <option
                      key={index}
                      value={name._id}
                    >{`${name.firstName} ${name.lastName}`}</option>
                  </>
                );
              })}
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" onClick={handleData}>
              {" "}
              {/* <Link
                to="/newschedule"
                style={{ textDecoration: "none", color: "white" }}
              > */}
              Done
              {/* </Link> */}
            </button>
          </Modal.Footer>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Schedule;
