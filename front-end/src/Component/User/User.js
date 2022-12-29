import React, { useEffect, useState } from 'react'
import "./User.css"
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
import InputAdornment from '@mui/material/InputAdornment';
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

function User() {
    const [status, setStatus] = useState(false)
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [selectLanguages, setSelectLanguages] = useState([]);
    const [selectPrograms, setSelectProgram] = useState([]);
    const [selectSchools, setSelectSchool] = useState([]);
    const [selectGrades, setSelectGrades] = useState([]);
    const [selectSubjects, setSelectSubjects] = useState([])
    const [personNameEnter, setPersonNameEnter] = React.useState([]);
    const [selectLanguagesEnter, setSelectLanguagesEnter] = useState([]);
    const [selectProgramsEnter, setSelectProgramEnter] = useState([]);
    const [selectSchoolsEnter, setSelectSchoolEnter] = useState([]);
    const [selectGradesEnter, setSelectGradesEnter] = useState([]);
    const [selectSubjectsEnter, setSelectSubjectsEnter] = useState([])
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [reTypePassword, setReTypePassword] = useState('');
    const [showreTypePassword, setShowreTypePassword] = useState(false);

    const handleClickShowPassword =()=>{
        setShowPassword(!showPassword)
    }
  const handleChangepassword =(e)=>{
    console.log(e.target.value);
    setPassword(e.target.value)
  }

const handleClickTypeShowPassword =()=>{
    setShowreTypePassword(!showreTypePassword)
}

const handleChangeTypePassword = (e)=>{
    console.log(e.target.value);
    setReTypePassword(e.target.value)
}






    const handleChange = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeOne = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectLanguages(

            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeTwo = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectProgram(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeThree = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectSchool(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeFour = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectGrades(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeFive = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectSubjects(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    // Add user Select Box
    const handleChangeAgency = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setPersonNameEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangePrograms = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectLanguagesEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeSchool = (event) => {
        console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setSelectProgramEnter(
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
        setSelectSchoolEnter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const selectLanguage = [
        'Armenian',
        'English',
        'French',
        'German',
        'Hindi'

    ]

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [role, setRole] = React.useState("");
    const [roleOpen, setRoleOpen] = React.useState(false)
    const [timeZone, setTimeZone] = React.useState("")
    const [timeZoneOpen, setTimeZoneOpen] = React.useState(false)
    const [gender, setGender] = React.useState("")
    const [genderOpen, setGenderOpen] = React.useState(false)
    const handleChangesix = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
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





























    // user api function
    const [agencyData, setAgencyData] = useState([]);
    const [programData, setProgramData] = useState([]);
    const [schoolsData, setSchoolData] = useState([]);
    const [gradeData, setGradeData] = useState([]);
    const [subjectData, setSubjectData] = useState([])
    const [timeZoneGet, setTimeZoneGet] = useState([]);
    const [languageGet, setLanguageGet] = useState([]);
    const changeAgenciews = () => {
        setStatus(!status)
    }

    const allApiData = async () => {
        try {
            await axios.get(`${BACKEND_URI}/agency`).then((agencyRes) => {
                // console.log("agencyRes", agencyRes.data);
                setAgencyData(agencyRes.data)
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
                console.log("timezoneres", timezoneres.data);
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
    useEffect(() => {
        allApiData()
    }, [])
    return (
        <div className='container'>

            {
                status ? (
                    <div>
                        <div className='row user-box-1'>
                            <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                                <h4 className='user-h4 mt-2'>NEW USER</h4>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center' style={{ background: "white" }}>
                            <div className='col-lg-10  mt-2'>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start'>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Role</label>
                                    </div>
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
                                                        <MenuItem value={items._id} key={items._id}>{items.timezone}</MenuItem>
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
                                            value={personNameEnter}
                                            onChange={handleChangeAgency}
                                            input={<OutlinedInput label="Select Agency" />}
                                            MenuProps={MenuProps}
                                            className='text-start'
                                        >
                                            {agencyData.map((name) => (
                                                <MenuItem
                                                    key={name.id}
                                                    value={name._id}
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

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Programs</label>
                                    </div>
                                    <FormControl className='select-width-demo'>
                                        <InputLabel id="demo-multiple-name-label">Select Programs</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            multiple
                                            value={selectLanguagesEnter}
                                            onChange={handleChangePrograms}
                                            input={<OutlinedInput label="Select Programs" />}
                                            MenuProps={MenuProps}
                                            className='text-start'
                                        >
                                            {programData.map((name) => (
                                                <MenuItem
                                                    key={name.id}
                                                    value={name._id}
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
                                            value={selectProgramsEnter}
                                            onChange={handleChangeSchool}
                                            input={<OutlinedInput label="Select School" />}
                                            MenuProps={MenuProps}
                                            className='text-start'
                                        >
                                            {schoolsData.map((name) => (
                                                <MenuItem
                                                    key={name.id}
                                                    value={name._id}
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
                                                    value={name._id}
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
                                                    value={name._id}
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
                                            value={selectSchoolsEnter}
                                            onChange={handleChangeLanguage}
                                            input={<OutlinedInput label="Select Language" />}
                                            MenuProps={MenuProps}
                                            className='text-start'
                                        >
                                            {languageGet.map((name) => (
                                                <MenuItem
                                                    key={name.id}
                                                    value={name._id}
                                                    style={getStylesAgency(name, personNameEnter, theme)}
                                                >
                                                    {name.language}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Consortium ID</label>
                                    </div>
                                    <TextField id="outlined-basic" label="Consortium ID" variant="outlined" className='select-width-demo' />
                                </div>
                            </div>
                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">First Name</label>
                                    </div>
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" className='select-width-demo' />
                                </div>
                            </div>
                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Last Name</label>
                                    </div>
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" className='select-width-demo' />
                                </div>
                            </div>
                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Email</label>
                                    </div>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" className='select-width-demo' />
                                </div>
                            </div>
                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Mobile</label>
                                    </div>
                                    <TextField id="outlined-basic" label="Mobile" variant="outlined" className='select-width-demo' />
                                </div>
                            </div>
                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Address</label>
                                    </div>
                                    <TextField id="outlined-basic" label="Address" variant="outlined" className='select-width-demo' />
                                </div>
                            </div>

                            <div className='col-lg-10  '>
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

                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Password</label>
                                    </div>
                                    <OutlinedInput
                                    className='select-width-demo'
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={handleChangepassword}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}

                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Enter Your Password"
                                    />
                                </div>
                            </div>

                            <div className='col-lg-10  '>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2 text-start '>

                                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Repeat Password</label>
                                    </div>
                                    <OutlinedInput
                                    className='select-width-demo'
                                        id="outlined-adornment-password"
                                        type={showreTypePassword ? 'text' : 'password'}
                                        value={reTypePassword}
                                        onChange={handleChangeTypePassword}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickTypeShowPassword}

                                                    edge="end"
                                                >
                                                    {showreTypePassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Enter Your Password"
                                    />
                                </div>
                            </div>

                            <div className='col-md-11 mt-4 pt-3 pb-3 mb-5' style={{ borderBottom: "1px solid #838383", borderTop: "1px solid #838383" }}>
                                <button className='btn btn-save me-2' >Save</button>
                                <button className='btn btn-Cancel' onClick={changeAgenciews}>Cancel</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='row user-box-1'>
                            <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                                <h4 className='user-h4 mt-2'>USERS</h4>
                                <div>

                                    <button className='btn btn-dangerpdf me-md-3 mt-2'>EXPORT TO PDF</button>

                                    <button className='btn btn-dangerexcel mt-2'>EXPORT TO EXCEL</button>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center justify-content-between pt-3 pb-3 align-items-center' style={{ background: "white" }}>
                            <div className='col-lg-5 text-md-start mt-2'>
                                <button className='btn btn-primaryadd me-md-3 mt-2' onClick={changeAgenciews}><i class="fa-solid fa-plus"></i> Add New User</button>
                                <button className='btn  mt-2'><i class="fa-solid fa-upload"></i> Bulk Upload</button>
                            </div>
                            <div className='col-lg-7  '>
                                <div className='row  d-flex justify-content-lg-end '>
                                    <div className='col-lg-3 mt-2'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Active</option>
                                            <option value="1">Inactive</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-8 mt-2'>
                                        <div class="input-group ">
                                            <input type="text" class="form-control" placeholder="search here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='row ' style={{ background: "#F5F5F5" }}>

                            <div className='col-lg-4 mt-3'>
                                <FormControl className='select-width'>
                                    <InputLabel id="demo-multiple-name-label">Select Agency</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Select Agency" />}
                                        MenuProps={MenuProps}
                                        className='text-start'
                                    >
                                        {agencyData.map((name) => (
                                            <MenuItem
                                                key={name.id}
                                                value={name._id}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4 mt-3'>
                                <FormControl className='select-width'>
                                    <InputLabel id="demo-multiple-name-label-one">Select Language</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label-one"
                                        id="demo-multiple-name-one"
                                        multiple
                                        value={selectLanguages}
                                        onChange={handleChangeOne}
                                        input={<OutlinedInput label=" Select Language" />}
                                        MenuProps={MenuProps}
                                        className='text-start'
                                    >
                                        {selectLanguage.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStylesone(name, selectLanguages, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4 mt-3'>
                                <FormControl className='select-width'>
                                    <InputLabel id="demo-multiple-name-label-two">Select Program</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label-two"
                                        id="demo-multiple-name-two"
                                        multiple
                                        value={selectPrograms}
                                        onChange={handleChangeTwo}
                                        input={<OutlinedInput label=" Select Program" />}
                                        MenuProps={MenuProps}
                                        className='text-start'
                                    >
                                        {programData.map((name) => (
                                            <MenuItem
                                                key={name.id}
                                                value={name._id}
                                                style={getStylesTwo(name, selectPrograms, theme)}
                                            >
                                                {name.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4 mt-3'>
                                <FormControl className='select-width'>
                                    <InputLabel id="demo-multiple-name-label-two">Select School</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label-two"
                                        id="demo-multiple-name-two"
                                        multiple
                                        value={selectSchools}
                                        onChange={handleChangeThree}
                                        input={<OutlinedInput label=" Select School" />}
                                        MenuProps={MenuProps}
                                        className='text-start'
                                    >
                                        {schoolsData.map((name) => (
                                            <MenuItem
                                                key={name.id}
                                                value={name._id}
                                                style={getStylesThree(name, selectSchools, theme)}
                                            >
                                                {name.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4 mt-3'>
                                <FormControl className='select-width'>
                                    <InputLabel id="demo-multiple-name-label-two">Select Grade</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label-two"
                                        id="demo-multiple-name-two"
                                        multiple
                                        value={selectGrades}
                                        onChange={handleChangeFour}
                                        input={<OutlinedInput label=" Select Grade" />}
                                        MenuProps={MenuProps}
                                        className='text-start'
                                    >
                                        {gradeData.map((name) => (
                                            <MenuItem
                                                key={name.id}
                                                value={name._id}
                                                style={getStylesFour(name, selectGrades, theme)}
                                            >
                                                {name.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4 mt-3'>
                                <FormControl className='select-width'>
                                    <InputLabel id="demo-multiple-name-label-two">Select Subject</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label-two"
                                        id="demo-multiple-name-two"
                                        multiple
                                        value={selectSubjects}
                                        onChange={handleChangeFive}
                                        input={<OutlinedInput label=" Select Subject" />}
                                        MenuProps={MenuProps}
                                        className='text-start'
                                    >
                                        {subjectData.map((name) => (
                                            <MenuItem
                                                key={name.id}
                                                value={name._id}
                                                style={getStylesFive(name, selectSubjects, theme)}
                                            >
                                                {name.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div className='col-lg-4 mt-3'>
                                <FormControl className='select-width'>
                                    <InputLabel id="demo-controlled-open-select-label">Days</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={age}
                                        label="Days"
                                        className='text-start'
                                        onChange={handleChangesix}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='col-lg-4 mt-3'>
                                <Box
                                    className='select-width'
                                >
                                    <TextField fullWidth label="Start Time" id="fullWidth" />
                                </Box>
                            </div>
                            <div className='col-lg-4 mt-3'>
                                <Box
                                    className='select-width'
                                >
                                    <TextField fullWidth label="End Time" id="fullWidthEnd" />
                                </Box>
                            </div>
                            <div className='col-lg-4 col-11 mt-3 mb-3'>
                                <div className="d-grid gap-2">
                                    <button className='btn btn-info' size="lg" style={{ color: "white" }}>
                                        <i class="fa-solid fa-magnifying-glass"></i>  Search
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className='row ' style={{ background: "white" }}>
                            <p className='text-start mt-3'>Total Users: 195</p>
                            {/* <Table/> */}
                            <div className='col-lg-12 table-responsive'>

                                <table className="table table-bordered table-striped table-hover">
                                    <thead className='text-start'>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">View/Edit Session</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Agency</th>
                                            <th scope="col">Program</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Control</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-start'>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default User