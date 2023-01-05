import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from "react-router-dom"
import { BACKEND_URI } from "../../config/config"
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
                console.log("res",res.data);
                setAgency(res.data.personNameEnter)
                setDataShowSingle(res.data)
                setSchools(res.data.selectSchoolsEnter)
                setPrograms(res.data.selectProgramsEnter)
                setimeZone(res.data.timeZone[0].timezone);
                setstatus(res.data.active)
                // status = ;
                userDataId = res.data._id
            })
            console.log("userDataId",userDataId);
            // console.log("status", status);
          let resSchedule =   await axios.get(`${BACKEND_URI}/schedule`)
        
                for(let i = 0; i <resSchedule.data.length;i++ ){
                    console.log("resSchedule", resSchedule.data[i].ids );

                    if(resSchedule.data[i].ids == userDataId){
                        let monday_Start_time = resSchedule.data[0].mondayStartTime;
                        let monday_time_Chnage = new Date('1970-01-01T' + monday_Start_time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setMondayStartTime(monday_time_Chnage);
                        let monday_End_time = resSchedule.data[0].mondayEndTime;
                        let monday_End_time_Chnage = new Date('1970-01-01T' + monday_End_time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setMondayEndTime(monday_End_time_Chnage);
                        let Tuesday_start_time = resSchedule.data[0].tuesdayStartTime;
                        let Tuesday_start_time_Chnage = new Date('1970-01-01T' + Tuesday_start_time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setTuesdayStartTime(Tuesday_start_time_Chnage)
        
                        let Tuesday_End_time = resSchedule.data[0].tuesdayEndTime;
                        let Tuesday_End_time_Chnage = new Date('1970-01-01T' + Tuesday_End_time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setTuesdayEndTime(Tuesday_End_time_Chnage);
        
                        let Wednesday_start_Time = resSchedule.data[0].wednesdayStartTime;
                        let Wednesday_start_Time_Chnage = new Date('1970-01-01T' + Wednesday_start_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setWednesdayStartTime(Wednesday_start_Time_Chnage);
                        let Wednesday_End_Time = resSchedule.data[0].wednesdayEndTime;
                        let Wednesday_End_Time_Chnage = new Date('1970-01-01T' + Wednesday_End_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setWednesdayEndTime(Wednesday_End_Time_Chnage);
        
                        let Thursday_Start_Time = resSchedule.data[0].thursdayStartTime;
                        let Thursday_Start_Time_Chnage = new Date('1970-01-01T' + Thursday_Start_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setThursdayStartTime(Thursday_Start_Time_Chnage)
        
                        let Thursday_End_Time = resSchedule.data[0].thursdayEndTime;
                        let Thursday_End_Time_Chnage = new Date('1970-01-01T' + Thursday_End_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setThursdayEndTime(Thursday_End_Time_Chnage);
        
                        let Friday_Start_Time = resSchedule.data[0].fridayStartTime;
                        let Friday_Start_Time_Chnage = new Date('1970-01-01T' + Friday_Start_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setFridayStartTime(Friday_Start_Time_Chnage)
        
                        let Friday_End_Time = resSchedule.data[0].fridayEndTime;
                        let Friday_End_Time_Chnage = new Date('1970-01-01T' + Friday_End_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setFridayEndTime(Friday_End_Time_Chnage);
        
                        let Saturday_Start_Time = resSchedule.data[0].saturdayStartTime;
                        let Saturday_Start_Time_Chnage = new Date('1970-01-01T' + Saturday_Start_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setSaturdayStartTime(Saturday_Start_Time_Chnage);
        
                        let Saturday_End_Time = resSchedule.data[0].saturdayEndTime;
                        let Saturday_End_Time_Chnage = new Date('1970-01-01T' + Saturday_End_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setSaturdayEndTime(Saturday_End_Time_Chnage);
        
                        let Sunday_Start_Time = resSchedule.data[0].saturdayStartTime;
                        let Sunday_Start_Time_Chnage = new Date('1970-01-01T' + Sunday_Start_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setSundayStartTime(Sunday_Start_Time_Chnage);
        
                        let Sunday_End_Time = resSchedule.data[0].sundayEndTime;
                        let Sunday_End_Time_Chnage = new Date('1970-01-01T' + Sunday_End_Time + 'Z')
                            .toLocaleTimeString('en-US',
                                { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
                            );
                        setSundayEndTime(Sunday_End_Time_Chnage);
                    }
                }

                
           
        } catch (e) {
            console.log("e", e);
        }
    }
    console.log("status",status);
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
                    ):(
                        <>
                        </>
                    )
                }

               

                <div className='col-lg-10 text-md-start mt-4'>
                    {/* {active == "true" ? <button className='btn btn-active' size="sm">Active</button> : <button className='btn btn-Inactive' size="sm">Inactive</button>} */}
                </div>

                <div className='col-md-11 mt-4 pt-3 pb-3 mb-5 ms-md-4 text-start' style={{ borderBottom: "1px solid #838383", borderTop: "1px solid #838383" }}>
                    <Link to={`/update_single_user_data/${params.id}`} style={{ textDecoration: "none" }}><button className='btn btn-Edit me-2' >Edit</button></Link>
                    <button className='btn btn-Cancel' onClick={() => navigate("/user")}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default ViewSingleUserData