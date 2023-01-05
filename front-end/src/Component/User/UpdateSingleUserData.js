import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
// import axios from 'axios';
// import { BACKEND_URI } from "../../config/config"
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BACKEND_URI } from "../../config/config"
// import Table from 'react-bootstrap/Table';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Table from '../Table/Table';
import axios from 'axios';
import { Link } from "react-router-dom"
import InputAdornment from '@mui/material/InputAdornment';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
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
function getStylesAgency(name, personNameEnter, theme) {
    return {
        fontWeight:
            personNameEnter.indexOf(name) === -1
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
function UpdateSingleUserData() {
    const theme = useTheme();
    const navigate = useNavigate();
    const params = useParams();
    const [role, setRole] = useState("");
    const [roleOpen, setRoleOpen] = useState(false)
    const [timeZone, setTimeZone] = useState([])
    const [timeZoneOpen, setTimeZoneOpen] = useState(false)
    const [timeZoneGet, setTimeZoneGet] = useState([]);
    const [personNameEnter, setPersonNameEnter] = useState([]);
    const [agencyData, setAgencyData] = useState([]);
    const [programData, setProgramData] = useState([]);
    const [selectProgramsEnter, setSelectProgramEnter] = useState([]);
    const [selectSchoolsEnter, setSelectSchoolEnter] = useState([]);
    const [schoolsData, setSchoolData] = useState([]);
    const [selectGradesEnter, setSelectGradesEnter] = useState([]);
    const [gradeData, setGradeData] = useState([]);
    const [selectSubjectsEnter, setSelectSubjectsEnter] = useState([])
    const [subjectData, setSubjectData] = useState([])
    const [selectLanguagesEnter, setSelectLanguagesEnter] = useState([]);
    const [languageGet, setLanguageGet] = useState([]);
    const [consortiumId, setConsortiumId] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEMail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState("")
    const [genderOpen, setGenderOpen] = useState(false)
    const [timeStatus, checkTimeStatus] = useState();

    const [mondayStartTime, setMondayStartTime] = useState()
    const [mondayEndTime, setMondayEndTime] = useState("")
    const [tuesdayStartTime, setTuesdayStartTime] = useState('')
    const [tuesdayEndTime, setTuesdayEndTime] = useState('');
    const [wednesdayStartTime, setWednesdayStartTime] = useState('');
    const [wednesdayEndTime, setWednesdayEndTime] = useState('');
    const [thursdayStartTime, setThursdayStartTime] = useState('');
    const [thursdayEndTime, setThursdayEndTime] = useState('');
    const [fridayStartTime, setFridayStartTime] = useState("");
    const [fridayEndTime, setFridayEndTime] = useState("");
    const [saturdayStartTime, setSaturdayStartTime] = useState('');
    const [saturdayEndTime, setSaturdayEndTime] = useState('');
    const [sundayStartTime, setSundayStartTime] = useState('');
    const [sundayEndTime, setSundayEndTime] = useState('');

    const [peragencyName,setAgencyPerNameSingle] = useState([])
    const [slectagencydata,setSelectAgencyData] = useState([])
    const [scheduleId,setScheduleId] = useState()
    // ........Time Pick .................//
    const mondayTimeChange = (value) => {
        // console.log("e.target.value", value && value.format('HH:mm'));
        setMondayStartTime(value && value.format('HH:mm'))
    }

    const mondayendTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setMondayEndTime(value && value.format('HH:mm'))
    }

    const tuesdayStartTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setTuesdayStartTime(value && value.format('HH:mm'))
    }
    const tuesdayEndTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setTuesdayEndTime(value && value.format('HH:mm'))
    }
    const wednesdayStartTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setWednesdayStartTime(value && value.format('HH:mm'))
    }
    const wednesdayEndTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setWednesdayEndTime(value && value.format('HH:mm'))
    }
    const thursdayStartTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setThursdayStartTime(value && value.format('HH:mm'))
    }
    const thursdayEndTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setThursdayEndTime(value && value.format('HH:mm'))
    }
    const fridayStartTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setFridayStartTime(value && value.format('HH:mm'))
    }
    const fridayEndTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setFridayEndTime(value && value.format('HH:mm'))
    }
    const saturdayStartTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setSaturdayStartTime(value && value.format('HH:mm'))
    }
    const saturdayEndTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setSaturdayEndTime(value && value.format('HH:mm'))
    }
    const sundayStartTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setSundayStartTime(value && value.format('HH:mm'))
    }
    const sundayEndTimeChange = (value) => {
        console.log("e.target.value", value && value.format('HH:mm'));
        setSundayEndTime(value && value.format('HH:mm'))
    }





    const handleChangeRole = (event) => {
        setRole(event.target.value);
        console.log(event.target.value);
    };
    const handleCloseRole = () => {
        setRoleOpen(false);
    };
    const handleOpenRole = () => {
        setRoleOpen(true);
    };
    const handleChangeTimeZone = (event) => {
        setTimeZone(event.target.value);
        console.log(event.target.value);
    };

    const handleCloseTimeZone = () => {
        setTimeZoneOpen(false);
    };

    const handleOpenTimeZone = () => {
        setTimeZoneOpen(true);
    };
    const handleChangeAgency = (event) => {
        // console.log("dataagency", {[event.target.getAttribute('data-value')]: event.target.value});
        
        const {
            target: { value },
        } = event;
        setPersonNameEnter(
            // [...personNameEnter, typeof value === 'string' ? value.split(',') : value,]
            typeof value === 'string' ? value.split(',') : value
        );
    };
    console.log("personNameEnter", personNameEnter);
    const handleChangePrograms = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectProgramEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeSchool = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectSchoolEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeGrade = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectGradesEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeSubjects = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectSubjectsEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeLanguage = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectLanguagesEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeGender = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    };

    const handleCloseGender = () => {
        setGenderOpen(false);
    };

    const handleOpenGender = () => {
        setGenderOpen(true);
    };
    const allApiData = async () => {
        try {
            await axios.get(`${BACKEND_URI}/agency`).then((agencyRes) => {
                // console.log("agencyRes", agencyRes.data);
                setAgencyData(agencyRes.data)
                let agenciesData = []
                let agencydata = agencyRes.data;
                console.log("peragencyName", peragencyName);
                agencydata.map((res)=>{
                    console.log("2121", res._id);
                    if(res._id === peragencyName){
                        agenciesData.push(agencydata)
                    }

                })
// console.log("agenciesData", agenciesData);
            })
            await axios.get(`${BACKEND_URI}/programs`).then((programsRes) => {
                // console.log("programsRes", programsRes.data);
                setProgramData(programsRes.data);
            })
            await axios.get(`${BACKEND_URI}/schools`).then((schoolsRes) => {
                // console.log("schoolsRes", schoolsRes.data);
                setSchoolData(schoolsRes.data)
            })
            await axios.get(`${BACKEND_URI}/grades`).then((gradesRes) => {
                // console.log("gradesRes", gradesRes.data);
                setGradeData(gradesRes.data)
            })
            await axios.get(`${BACKEND_URI}/subjects`).then((subjectsRes) => {
                // console.log("subjectsRes", subjectsRes.data);
                setSubjectData(subjectsRes.data)
            })
            await axios.get(`${BACKEND_URI}/timezone`).then((timezoneres) => {
                // console.log("timezoneres", timezoneres.data);
                setTimeZoneGet(timezoneres.data)
            })
            await axios.get(`${BACKEND_URI}/language`).then((languageRes) => {
                //   console.log("languageRes", languageRes.data);
                setLanguageGet(languageRes.data)
            })
        } catch (e) {
            console.log("e", e);
        }
    }

    const showSingleApiData = async () => {
        try {
            let userIds ;
            await axios.get(`${BACKEND_URI}/user_single_data_find/${params.id}`).then((showRes) => {

                
                let agencyarr = []
                console.log("showRes", showRes.data._id);
                setFirstName(showRes.data.firstName);
                setLastName(showRes.data.lastName);
                setEMail(showRes.data.email);
                setMobileNumber(showRes.data.mobileNumber);
                setAddress(showRes.data.address);
                setConsortiumId(showRes.data.consortiumId);
                setGender(showRes.data.gender)
                setRole(showRes.data.role);
                checkTimeStatus(showRes.data.active)
                userIds = showRes.data._id;
                let agencyData = showRes.data.personNameEnter;
                // console.log("agencyData, ", agencyData);
                // setPersonNameEnter(agencyData)
                // console.log("agencydata", agencyData.length);

                // for(var i = 0; i < agencyData.length; i++){
                //     console.log("agencydata", agencyData[i].title);
                //     setPersonNameEnter(
                //         typeof agencyData[i].title === 'string' ? agencyData[i].title.split(',') : agencyData[i].title,
                //     )
                // }
                agencyData.map((agencydataaaa) => {
                    agencyarr.push(agencydataaaa)
                    console.log("agencydataaaa", agencydataaaa._id);
                    // setAgencyPerNameSingle(agencydataaaa._id)
                    let textcheck = agencydataaaa
                    agencyarr.push(textcheck)

                    setPersonNameEnter(
                        {agencyarr}
                    )
                })
                // let time = showRes?.data?.timeZone
                // time.map((timesss) => {
                //     // return 
                //     console.log("timesss", timesss.timezone);
                //     setTimeZone(timesss.timezone)
                // })
                // setTimeZone(timezone)
            })
            let scheduleApi = await axios.get(`${BACKEND_URI}/schedule`)

            for(let i = 0; i <scheduleApi.data.length;i++ ){
                
                // if()
                if(scheduleApi.data[i].ids == userIds){
                    let value = scheduleApi.data[i].mondayStartTime;
                    // value =  value && value.format('HH:mm')
                    console.log("scheduleApi", value);
                    setScheduleId(scheduleApi.data[i]._id);
                    setMondayStartTime(value)
                }
            }

        } catch (e) {
            console.log("e", e);
        }
    }
    console.log("peragencyName", personNameEnter);

    //  let montime = mondayStartTime._i
    // console.log("scheduleId", personNameEnter.map((items)=>{
    //     console.log("items",items.title);
    //     setPerName(typeof items.title === 'string' ? items.title.split(',') : items.title,)
    // }));

    const updateUserData = async () => {
        try {
            await axios.put(`${BACKEND_URI}/user_single_data_Update/${params.id}`, {
                role,
                timeZone,
                personNameEnter,
                selectProgramsEnter,
                selectSchoolsEnter,
                selectGradesEnter,
                selectSubjectsEnter,
                selectLanguagesEnter,
                consortiumId,
                gender,
                firstName,
                lastName,
                email,
                mobileNumber,
                address,
            }).then((res) => {
                console.log("res", res);
                navigate("/user")
            })
        } catch (e) {
            console.log("e", e);
        }
    }
    useEffect(() => {
        allApiData()
    }, [])
    useEffect(() => {
        showSingleApiData()
    }, [])
    return (
        <div className='container'>
            <div className='row user-box-1'>
                <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                    <h4 className='user-h4 mt-2'>NEW USER</h4>
                </div>
            </div>


            <div className='row d-flex justify-content-center ' style={{ background: "white" }}>
                <div className='col-lg-10   mt-2 '>
                    <div className="row mb-3 d-flex flex-md-row flex-column align-items-center text-start">
                        <div className='col-md-2 text-start'>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Role</label>
                        </div>
                        <div className='col-lg-6'>


                            <FormControl className='select-width-demo'>
                                <InputLabel id="demo-controlled-open-select-label">Role</InputLabel>
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={roleOpen}
                                    onClose={handleCloseRole}
                                    onOpen={handleOpenRole}
                                    value={role}
                                    label="Role"
                                    className='text-start'
                                    onChange={handleChangeRole}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Student">Student</MenuItem>
                                    <MenuItem value="Manager">Manager</MenuItem>
                                    <MenuItem value="Teacher">Teacher</MenuItem>
                                    <MenuItem value="Employee">Employee</MenuItem>
                                    <MenuItem value="Developer">Developer</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>
                </div>

                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Time Zone</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-controlled-open-select-label">Time Zone</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={timeZoneOpen}
                                onClose={handleCloseTimeZone}
                                onOpen={handleOpenTimeZone}
                                value={timeZone}
                                label="Time Zone"
                                className='text-start'
                                onChange={handleChangeTimeZone}
                            >

                                {
                                    timeZoneGet.map((items) => {
                                        return (
                                            <MenuItem value={items} key={items._id}>{items.timezone}</MenuItem>
                                        )
                                    })
                                }

                            </Select>
                        </FormControl>


                    </div>
                </div>
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Agency</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-multiple-name-label">Select Agency</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                defaultValue={personNameEnter}
                                //     .map((items)=>{
                                //         console.log("id", items.title);
                                //        let value = items.title
                                //      return   typeof value === 'string' ? value.split(',') : value
                                
                                // })}
                                onChange={handleChangeAgency}
                                input={<OutlinedInput label="Select Agency" />}
                                MenuProps={MenuProps}
                                className='text-start'
                            >
                                {agencyData.map((name) => (
                                    <MenuItem
                                        key={name.id}
                                        value={name}
                                        style={getStylesAgency(name, personNameEnter, theme)}
                                        // data-value = {name}
                                        // value2={}
                                    >
                                        {name.title}
                                        {/* {personNameEnter} */}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                    </div>
                </div>
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Programs</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-multiple-name-label">Select Programs</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={selectProgramsEnter}
                                onChange={handleChangePrograms}
                                input={<OutlinedInput label="Select Programs" />}
                                MenuProps={MenuProps}
                                className='text-start'
                            >
                                {programData.map((name) => (
                                    <MenuItem
                                        key={name.id}
                                        value={name}
                                        style={getStylesAgency(name, personNameEnter, theme)}
                                    >
                                        {name.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Schools</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-multiple-name-label">Select School</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={selectSchoolsEnter}
                                onChange={handleChangeSchool}
                                input={<OutlinedInput label="Select School" />}
                                MenuProps={MenuProps}
                                className='text-start'
                            >
                                {schoolsData.map((name) => (
                                    <MenuItem
                                        key={name.id}
                                        value={name}
                                        style={getStylesAgency(name, personNameEnter, theme)}
                                    >
                                        {name.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Grade</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-multiple-name-label">Select Grade</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={selectGradesEnter}
                                onChange={handleChangeGrade}
                                input={<OutlinedInput label="Select Grade" />}
                                MenuProps={MenuProps}
                                className='text-start'
                            >
                                {gradeData.map((name) => (
                                    <MenuItem
                                        key={name.id}
                                        value={name}
                                        style={getStylesAgency(name, personNameEnter, theme)}
                                    >
                                        {name.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Subjects</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-multiple-name-label">Select Subjects</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={selectSubjectsEnter}
                                onChange={handleChangeSubjects}
                                input={<OutlinedInput label="Select Subjects" />}
                                MenuProps={MenuProps}
                                className='text-start'
                            >
                                {subjectData.map((name) => (
                                    <MenuItem
                                        key={name.id}
                                        value={name}
                                        style={getStylesAgency(name, personNameEnter, theme)}
                                    >
                                        {name.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Language</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-multiple-name-label">Select Language</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={selectLanguagesEnter}
                                onChange={handleChangeLanguage}
                                input={<OutlinedInput label="Select Language" />}
                                MenuProps={MenuProps}
                                className='text-start'
                            >
                                {languageGet.map((name) => (
                                    <MenuItem
                                        key={name.id}
                                        value={name}
                                        style={getStylesAgency(name, personNameEnter, theme)}
                                    >
                                        {name.language}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                {
                    timeStatus == "true" ? (
                        <div className='col-lg-10  text-start'>
                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Schedule</label>
                            <div className='row  d-flex justify-content-center'>
                                <div className='col-lg-9 box-col d-flex align-items-center justify-content-around'>
                                    <h6>Monday</h6>
                                    <div className='text-start'>
                                        <lable>Start Time</lable><br />
                                        <TimePicker defaultValue={mondayStartTime} showSecond={false}  onChange={mondayTimeChange} />
                                    </div>
                                    <div className='text-start'>
                                        <lable>End Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={mondayendTimeChange} />
                                    </div>
                                </div>

                                <div className='col-lg-9 box-col d-flex align-items-center justify-content-around'>
                                    <h6>Tuesday</h6>
                                    <div className='text-start'>
                                        <lable>Start Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={tuesdayStartTimeChange} />
                                    </div>
                                    <div className='text-start'>
                                        <lable>End Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={tuesdayEndTimeChange} />
                                    </div>
                                </div>


                                <div className='col-lg-9 box-col d-flex align-items-center justify-content-around'>
                                    <h6>Wednesday</h6>
                                    <div className='text-start'>
                                        <lable>Start Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={wednesdayStartTimeChange} />
                                    </div>
                                    <div className='text-start'>
                                        <lable>End Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={wednesdayEndTimeChange} />
                                    </div>
                                </div>


                                <div className='col-lg-9 box-col d-flex align-items-center justify-content-around'>
                                    <h6>Thursday</h6>
                                    <div className='text-start'>
                                        <lable>Start Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={thursdayStartTimeChange} />
                                    </div>
                                    <div className='text-start'>
                                        <lable>End Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={thursdayEndTimeChange} />
                                    </div>
                                </div>

                                <div className='col-lg-9 box-col d-flex align-items-center justify-content-around'>
                                    <h6>Friday</h6>
                                    <div className='text-start'>
                                        <lable>Start Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={fridayStartTimeChange} />
                                    </div>
                                    <div className='text-start'>
                                        <lable>End Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={fridayEndTimeChange} />
                                    </div>
                                </div>

                                <div className='col-lg-9 box-col d-flex align-items-center justify-content-around'>
                                    <h6>Saturday</h6>
                                    <div className='text-start'>
                                        <lable>Start Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={saturdayStartTimeChange} />
                                    </div>
                                    <div className='text-start'>
                                        <lable>End Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={saturdayEndTimeChange} />
                                    </div>
                                </div>

                                <div className='col-lg-9 box-col d-flex align-items-center justify-content-around'>
                                    <h6>Saturday</h6>
                                    <div className='text-start'>
                                        <lable>Start Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={sundayStartTimeChange} />
                                    </div>
                                    <div className='text-start'>
                                        <lable>End Time</lable><br />
                                        <TimePicker defaultValue={0} showSecond={false} onChange={sundayEndTimeChange} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <></>
                    )
                }
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Consortium ID</label>
                        </div>
                        <TextField id="outlined-basic" label="Consortium ID" variant="outlined" className='select-width-demo' value={consortiumId} onChange={(e) => setConsortiumId(e.target.value)} />
                    </div>
                </div>
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">First Name</label>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" className='select-width-demo' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            {/* {dataError && !firstName && <div className="text-start" style={{ color: "red" }}>Please Enter First Name</div>} */}
                        </div>
                    </div>
                </div>
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Last Name</label>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" className='select-width-demo' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            {/* {dataError && !lastName && <div className="text-start" style={{ color: "red" }}>Please Enter Last Name</div>} */}
                        </div>
                    </div>
                </div>
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Email</label>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Email" variant="outlined" className='select-width-demo' value={email} onChange={(e) => setEMail(e.target.value)} />
                            {/* {dataError && !email && <div className="text-start" style={{ color: "red" }}>Please Enter Email</div>} */}
                        </div>
                    </div>
                </div>
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Mobile</label>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Mobile No." type="number" placeholder='(100)-000-00000' variant="outlined" className='select-width-demo' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                            {/* {dataError && !mobileNumber && <div className="text-start" style={{ color: "red" }}>Please Enter mobile Number</div>} */}

                        </div>
                    </div>
                </div>
                <div className='col-lg-10  '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Address</label>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Address" variant="outlined" className='select-width-demo' value={address} onChange={(e) => setAddress(e.target.value)} />
                            {/* {dataError && !address && <div className="text-start" style={{ color: "red" }}>Please Enter Address</div>} */}

                        </div>
                    </div>
                </div>
                <div className='col-lg-10 '>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2 text-start '>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Gender</label>
                        </div>
                        <FormControl className='select-width-demo'>
                            <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={genderOpen}
                                onClose={handleCloseGender}
                                onOpen={handleOpenGender}
                                value={gender}
                                label="Gender"
                                className='text-start'
                                onChange={handleChangeGender}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>

                            </Select>
                        </FormControl>

                    </div>
                </div>
                <div className='col-md-11 mt-4 pt-3 pb-3 mb-5' style={{ borderBottom: "1px solid #838383", borderTop: "1px solid #838383" }}>
                    <button className='btn btn-save me-2' onClick={updateUserData}>Save</button>
                    <button className='btn btn-Cancel' onClick={() => {
                        // console.log("gggg");
                        navigate("/user")
                    }
                    }>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateSingleUserData