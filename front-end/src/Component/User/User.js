import React, { useState } from 'react'
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
// import Table from 'react-bootstrap/Table';
import Table from '../Table/Table';
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

function User() {

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [selectLanguages, setSelectLanguages] = useState([]);
    const [selectPrograms, setSelectProgram] = useState([]);
    const [selectSchools, setSelectSchool] = useState([]);
    const [selectGrades, setSelectGrades] = useState([]);
    const [selectSubjects, setSelectSubjects] = useState([])
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
            // On autofill we get a stringified value.
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
    const selectAgency = [
        'ASES',
        'Chino Valley',
        'CMS',
        'COJUSD',
        'Fresno Office',
        "Fresno USD",
        'FUSD',
        'FWISD',
        'HAWAII',
        'Kings County',
        'LACDA',
        'LACOE',
        'Lemoore',
        'Lockhart',
        "Long Beach",
        'MPS',
        'New-Agency',
        'OCDE',
        'San Bernardino',
        'SAN MATEO',
        'Technical Support',
        'Testing'
    ];
    const selectLanguage = [
        'Armenian',
        'English',
        'French',
        'German',
        'Hindi'

    ]
    const selectProgram = [
        "ASES-Program",
        "CMS",
        "COJUSD",
        "CVUSD-Program"
    ]
    const selectSchool = [
        "Chino Valley-School",
        "CMS",
        "Demo-1"

    ]
    const selectGrade = [
        "1",
        "2",
        "3"

    ]
    const selectSubject = [
        "Accounting",
        "Algebra 1",
        "Algebra 2",

    ]


    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChangesix = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className='container'>
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
                    <button className='btn btn-primaryadd me-md-3 mt-2'><i class="fa-solid fa-plus"></i> Add New User</button>
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
                            {selectAgency.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
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
                            {selectProgram.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStylesTwo(name, selectPrograms, theme)}
                                >
                                    {name}
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
                            {selectSchool.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStylesThree(name, selectSchools, theme)}
                                >
                                    {name}
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
                            {selectGrade.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStylesFour(name, selectGrades, theme)}
                                >
                                    {name}
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
                            {selectSubject.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStylesFive(name, selectSubjects, theme)}
                                >
                                    {name}
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

export default User