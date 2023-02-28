import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from "react-router-dom"
import { BACKEND_URI } from "../../config/config"
import { secondsToHms } from "../../Convertor"
function ViewSingleUserData() {
    const navigate = useNavigate();
    const params = useParams();
    const [dataShowSingle, setDataShowSingle] = useState([])
    const [agency, setAgency] = useState([])
    const [programs, setPrograms] = useState([]);
    const [school, setSchools] = useState([])
    let [timeZone, setimeZone] = useState();
    const [status, setstatus] = useState();
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
    const singleDataView = async () => {
        try {
            // let status;
            let userDataId;
            await axios.get(`${BACKEND_URI}/user_single_data_find/${params.id}`).then((res) => {
                console.log("resdddddd", res.data);
                setAgency(res.data.personNameEnter)
                setDataShowSingle(res.data)
                setSchools(res.data.selectSchoolsEnter)
                setPrograms(res.data.selectProgramsEnter)
                setimeZone(res.data.timeZone[0].timezone);
                setstatus(res.data.active)
                // status = ;
                userDataId = res.data._id

                if (res.data.mondayStartTime >0) {
                    let monday_Start_time = secondsToHms(res.data.mondayStartTime);
                    const [hourString, minute] = monday_Start_time.split(":");
                    const hour = +hourString % 24;
                    let monday_time_Chnage = (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
                    setMondayStartTime(monday_time_Chnage);
                }
                else {
                    setMondayStartTime("Null");
                }

                if (res.data.mondayEndTime >0) {
                    let monday_End_time = secondsToHms(res.data.mondayEndTime);
                    const [hourStrings, minutes] = monday_End_time.split(":");
                    const hours = +hourStrings % 24;
                    let monday_End_time_Chnage = (hours % 12 || 12) + ":" + minutes + (hours < 12 ? " AM" : " PM");
                    setMondayEndTime(monday_End_time_Chnage);
                }
                else {
                    setMondayEndTime("Null");
                }

                if (res.data.tuesdayStartTime >0) {
                    let Tuesday_start_time = secondsToHms(res.data.tuesdayStartTime);
                    const [hourStringTuesday_start_time, minuteTuesday_start_time] = Tuesday_start_time.split(":");
                    const hourTuesday_start_time = +hourStringTuesday_start_time % 24;
                    let Tuesday_start_time_Chnage = (hourTuesday_start_time % 12 || 12) + ":" + minuteTuesday_start_time + (hourTuesday_start_time < 12 ? " AM" : " PM")
                    setTuesdayStartTime(Tuesday_start_time_Chnage)
                }
                else {
                    setTuesdayStartTime("Null");
                }

                if (res.data.tuesdayEndTime >0) {
                    let Tuesday_End_time = secondsToHms(res.data.tuesdayEndTime);
                    const [hourStringTuesday_End_time, minuteTuesday_End_time] = Tuesday_End_time.split(":");
                    const hourTuesday_End_time = +hourStringTuesday_End_time % 24;
                    let Tuesday_End_time_Chnage = (hourTuesday_End_time % 12 || 12) + ":" + minuteTuesday_End_time + (hourTuesday_End_time < 12 ? " AM" : " PM")
                    setTuesdayEndTime(Tuesday_End_time_Chnage);
                }
                else {
                    setTuesdayEndTime("Null");
                }

                if (res.data.wednesdayStartTime >0) {
                    let Wednesday_start_Time = secondsToHms(res.data.wednesdayStartTime);
                    const [hourStringWednesday_start_Time, minuteWednesday_start_Time] = Wednesday_start_Time.split(":");
                    const hourWednesday_start_Time = +hourStringWednesday_start_Time % 24;
                    let Wednesday_start_Time_Chnage = (hourWednesday_start_Time % 12 || 12) + ":" + minuteWednesday_start_Time + (hourWednesday_start_Time < 12 ? " AM" : " PM")
                    setWednesdayStartTime(Wednesday_start_Time_Chnage);
                }
                else {
                    setWednesdayStartTime("Null");
                }

                if (res.data.wednesdayEndTime >0) {
                    let Wednesday_End_Time = secondsToHms(res.data.wednesdayEndTime);
                    const [hourStringWednesday_End_Time, minuteWednesday_End_Time] = Wednesday_End_Time.split(":");
                    const hourWednesday_End_Time = +hourStringWednesday_End_Time % 24;
                    let Wednesday_End_Time_Chnage = (hourWednesday_End_Time % 12 || 12) + ":" + minuteWednesday_End_Time + (hourWednesday_End_Time < 12 ? " AM" : " PM")
                    setWednesdayEndTime(Wednesday_End_Time_Chnage);
                }
                else {
                    setWednesdayEndTime("Null");
                }

                if (res.data.thursdayStartTime >0) {
                    let Thursday_Start_Time = secondsToHms(res.data.thursdayStartTime);
                    const [hourStringThursday_Start_Time, minuteThursday_Start_Time] = Thursday_Start_Time.split(":");
                    const hourThursday_Start_Time = +hourStringThursday_Start_Time % 24;
                    let Thursday_Start_Time_Chnage = (hourThursday_Start_Time % 12 || 12) + ":" + minuteThursday_Start_Time + (hourThursday_Start_Time < 12 ? " AM" : " PM")
                    setThursdayStartTime(Thursday_Start_Time_Chnage)
                }
                else {
                    setThursdayStartTime("Null");
                }

                if (res.data.thursdayEndTime >0) {
                    let Thursday_End_Time = secondsToHms(res.data.thursdayEndTime);
                    const [hourStringThursday_End_Time, minuteThursday_End_Time] = Thursday_End_Time.split(":");
                    const hourThursday_End_Time = +hourStringThursday_End_Time % 24;
                    let Thursday_End_Time_Chnage = (hourThursday_End_Time % 12 || 12) + ":" + minuteThursday_End_Time + (hourThursday_End_Time < 12 ? " AM" : " PM")
                    setThursdayEndTime(Thursday_End_Time_Chnage);
                }
                else {
                    setThursdayEndTime("Null");
                }

                if (res.data.fridayStartTime >0) {
                    let Friday_Start_Time = secondsToHms(res.data.fridayStartTime);
                    const [hourStringFriday_Start_Time, minuteFriday_Start_Time] = Friday_Start_Time.split(":");
                    const hourFriday_Start_Time = +hourStringFriday_Start_Time % 24;
                    let Friday_Start_Time_Chnage = (hourFriday_Start_Time % 12 || 12) + ":" + minuteFriday_Start_Time + (hourFriday_Start_Time < 12 ? " AM" : " PM")
                    setFridayStartTime(Friday_Start_Time_Chnage)
                }
                else {
                    setFridayStartTime("Null");
                }

                if (res.data.fridayEndTime >0) {
                    let Friday_End_Time = secondsToHms(res.data.fridayEndTime);
                    const [hourStringFriday_End_Time, minuteFriday_End_Time] = Friday_End_Time.split(":");
                    const hourFriday_End_Time = +hourStringFriday_End_Time % 24;
                    let Friday_End_Time_Chnage = (hourFriday_End_Time % 12 || 12) + ":" + minuteFriday_End_Time + (hourFriday_End_Time < 12 ? " AM" : " PM")
                    setFridayEndTime(Friday_End_Time_Chnage);
                }
                else {
                    setFridayEndTime("Null");
                }

                if (res.data.saturdayStartTime >0) {
                    let Saturday_Start_Time = secondsToHms(res.data.saturdayStartTime);
                    const [hourStringSaturday_Start_Time, minuteSaturday_Start_Time] = Saturday_Start_Time.split(":");
                    const hourSaturday_Start_Time = +hourStringSaturday_Start_Time % 24;
                    let Saturday_Start_Time_Chnage = (hourSaturday_Start_Time % 12 || 12) + ":" + minuteSaturday_Start_Time + (hourSaturday_Start_Time < 12 ? " AM" : " PM")
                    setSaturdayStartTime(Saturday_Start_Time_Chnage);
                }
                else {
                    setSaturdayStartTime("Null");
                }

                if (res.data.saturdayEndTime >0) {
                    let Saturday_End_Time = secondsToHms(res.data.saturdayEndTime);
                const [hourStringSaturday_End_Time, minuteSaturday_End_Time] = Saturday_End_Time.split(":");
                const hourSaturday_End_Time = +hourStringSaturday_End_Time % 24;
                let Saturday_End_Time_Chnage = (hourSaturday_End_Time % 12 || 12) + ":" + minuteSaturday_End_Time + (hourSaturday_End_Time < 12 ? " AM" : " PM")
                setSaturdayEndTime(Saturday_End_Time_Chnage);

                }
                else {
                    setSaturdayEndTime("Null");
                }
                

                console.log(res.data.sundayStartTime);
                if (res.data.sundayStartTime >0) {
                    let Sunday_Start_Time = secondsToHms(res.data.sundayStartTime);
                const [hourStringSunday_Start_Time, minuteSunday_Start_Time] = Sunday_Start_Time.split(":");
                const hourSunday_Start_Time = +hourStringSunday_Start_Time % 24;
                let Sunday_Start_Time_Chnage = (hourSunday_Start_Time % 12 || 12) + ":" + minuteSunday_Start_Time + (hourSunday_Start_Time < 12 ? " AM" : " PM")
                setSundayStartTime(Sunday_Start_Time_Chnage);

                }
                else {
                    setSundayStartTime("Null");
                }
               

                if (res.data.sundayEndTime >0) {
                    let Sunday_End_Time = secondsToHms(res.data.sundayEndTime);
                const [hourStringSunday_End_Time, minuteSunday_End_Time] = Sunday_End_Time.split(":");
                const hourSunday_End_Time = +hourStringSunday_End_Time % 24;
                let Sunday_End_Time_Chnage = (hourSunday_End_Time % 12 || 12) + ":" + minuteSunday_End_Time + (hourSunday_End_Time < 12 ? " AM" : " PM")
                setSundayEndTime(Sunday_End_Time_Chnage);
                }
                else {
                    setSundayEndTime("Null");
                }

               

            })

            //   let resSchedule =   await axios.get(`${BACKEND_URI}/schedule`)

            //         for(let i = 0; i <resSchedule.data.length;i++ ){
            //             console.log("resSchedule", resSchedule.data[i].ids );

            //             if(resSchedule.data[i].ids == userDataId){
            //                 let monday_Start_time = resSchedule.data[0].mondayStartTime;
            //                 let monday_time_Chnage = new Date('1970-01-01T' + monday_Start_time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setMondayStartTime(monday_time_Chnage);
            //                 let monday_End_time = resSchedule.data[0].mondayEndTime;
            //                 let monday_End_time_Chnage = new Date('1970-01-01T' + monday_End_time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setMondayEndTime(monday_End_time_Chnage);
            //                 let Tuesday_start_time = resSchedule.data[0].tuesdayStartTime;
            //                 let Tuesday_start_time_Chnage = new Date('1970-01-01T' + Tuesday_start_time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setTuesdayStartTime(Tuesday_start_time_Chnage)

            //                 let Tuesday_End_time = resSchedule.data[0].tuesdayEndTime;
            //                 let Tuesday_End_time_Chnage = new Date('1970-01-01T' + Tuesday_End_time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setTuesdayEndTime(Tuesday_End_time_Chnage);

            //                 let Wednesday_start_Time = resSchedule.data[0].wednesdayStartTime;
            //                 let Wednesday_start_Time_Chnage = new Date('1970-01-01T' + Wednesday_start_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setWednesdayStartTime(Wednesday_start_Time_Chnage);
            //                 let Wednesday_End_Time = resSchedule.data[0].wednesdayEndTime;
            //                 let Wednesday_End_Time_Chnage = new Date('1970-01-01T' + Wednesday_End_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setWednesdayEndTime(Wednesday_End_Time_Chnage);

            //                 let Thursday_Start_Time = resSchedule.data[0].thursdayStartTime;
            //                 let Thursday_Start_Time_Chnage = new Date('1970-01-01T' + Thursday_Start_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setThursdayStartTime(Thursday_Start_Time_Chnage)

            //                 let Thursday_End_Time = resSchedule.data[0].thursdayEndTime;
            //                 let Thursday_End_Time_Chnage = new Date('1970-01-01T' + Thursday_End_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setThursdayEndTime(Thursday_End_Time_Chnage);

            //                 let Friday_Start_Time = resSchedule.data[0].fridayStartTime;
            //                 let Friday_Start_Time_Chnage = new Date('1970-01-01T' + Friday_Start_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setFridayStartTime(Friday_Start_Time_Chnage)

            //                 let Friday_End_Time = resSchedule.data[0].fridayEndTime;
            //                 let Friday_End_Time_Chnage = new Date('1970-01-01T' + Friday_End_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setFridayEndTime(Friday_End_Time_Chnage);

            //                 let Saturday_Start_Time = resSchedule.data[0].saturdayStartTime;
            //                 let Saturday_Start_Time_Chnage = new Date('1970-01-01T' + Saturday_Start_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setSaturdayStartTime(Saturday_Start_Time_Chnage);

            //                 let Saturday_End_Time = resSchedule.data[0].saturdayEndTime;
            //                 let Saturday_End_Time_Chnage = new Date('1970-01-01T' + Saturday_End_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setSaturdayEndTime(Saturday_End_Time_Chnage);

            //                 let Sunday_Start_Time = resSchedule.data[0].saturdayStartTime;
            //                 let Sunday_Start_Time_Chnage = new Date('1970-01-01T' + Sunday_Start_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setSundayStartTime(Sunday_Start_Time_Chnage);

            //                 let Sunday_End_Time = resSchedule.data[0].sundayEndTime;
            //                 let Sunday_End_Time_Chnage = new Date('1970-01-01T' + Sunday_End_Time + 'Z')
            //                     .toLocaleTimeString('en-US',
            //                         { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
            //                     );
            //                 setSundayEndTime(Sunday_End_Time_Chnage);
            //             }
            //         }



        } catch (e) {
            console.log("e", e);
        }
    }
    // console.log("status",status);
    useEffect(() => {
        singleDataView()
    }, [])
    return (
        <div className='conatiner'>
            <div className='row user-box-1 mt-5'>
                <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                    <h4 className='user-h4 mt-2'>{dataShowSingle.firstName} {dataShowSingle.lastName}</h4>

                </div>
            </div>
            <div className='row d-flex justify-content-center justify-content-between pt-3 pb-3 align-items-center' style={{ background: "white" }}>

                <div className='col-lg-2 text-md-start mt-2 ps-md-4'>
                    <h6>First name</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <span>{dataShowSingle.firstName}</span>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-3'>
                    <h6>Last Name</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2 '>
                    <span>{dataShowSingle.lastName}</span>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-3'>
                    <h6>Email</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <span>{dataShowSingle.email}</span>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>Mobile</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <span>{dataShowSingle.mobileNumber}</span>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>Agency</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <div>{agency.map((agency) => {
                        return (
                            <>{agency.title} ,</>
                        )
                    })}</div>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>Programe</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <div>{programs.map((agency) => {
                        return (
                            <>{agency.title} ,</>
                        )
                    })}</div>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>School</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <div>{school.map((agency) => {
                        return (
                            <>{agency.title} ,</>
                        )
                    })}</div>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>Address</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <span>{dataShowSingle.address}</span>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>Role</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <span>{dataShowSingle.role}</span>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>TimeZone</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                    <span>{timeZone}
                    </span>
                </div>

                {
                    status == "true" ? (
                        <div className='col-md-8  ms-2 mt-4' >
                            <div className='user-box-1' style={{ borderBottom: "1px solid gray" }}>
                                <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                                    <h4 className='user-h4 mt-2'>Schedule</h4>

                                </div>
                            </div>
                            <div className='row d-flex justify-content-start' >
                                <div className='col-md-12 mt-4'>
                                    <table className="table text-start">
                                        <thead>
                                            <tr>
                                                <th scope="col">Days</th>
                                                <th scope="col">Start Time</th>
                                                <th scope="col">End Time</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Monday</th>
                                                <td>{mondayStartTime}</td>
                                                <td>{mondayEndTime}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Tuesday</th>
                                                <td>{tuesdayStartTime}</td>
                                                <td>{tuesdayEndTime}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Wednesday</th>
                                                <td>{wednesdayStartTime}</td>
                                                <td>{wednesdayEndTime}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Thursday</th>
                                                <td>{thursdayStartTime}</td>
                                                <td>{thursdayEndTime}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Friday</th>
                                                <td>{fridayStartTime}</td>
                                                <td>{fridayEndTime}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Saturday</th>
                                                <td>{saturdayStartTime}</td>
                                                <td>{saturdayEndTime}</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">Sunday</th>
                                                <td>{sundayStartTime}</td>
                                                <td>{sundayEndTime}</td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                        </>
                    )
                }



                <div className='col-lg-10 text-md-start mt-4'>
                    {/* {active == "true" ? <button className='btn btn-active' size="sm">Active</button> : <button className='btn btn-Inactive' size="sm">Inactive</button>} */}
                </div>

                <div className='col-md-11 mt-4 pt-3 pb-3 mb-5 ms-md-4 text-start' style={{ borderBottom: "1px solid #838383", borderTop: "1px solid #838383" }}>
                    <Link to={`/sidebar/update_single_user_data/${params.id}`} style={{ textDecoration: "none" }}><button className='btn btn-Edit me-2' >Edit</button></Link>
                    <button className='btn btn-Cancel' onClick={() => navigate("/sidebar/user")}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default ViewSingleUserData