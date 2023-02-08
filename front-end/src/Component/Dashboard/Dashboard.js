import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import { BACKEND_URI } from "../../config/config"
import axios from 'axios';
function Dashboard({sessionData}) {

    const [teacher,setTeacher] = useState(0)
    const [student,setStudent] = useState(0)
    const [developer,setDeveloper] = useState(0)
    const [manager,setManager] = useState(0);
    const [employee,setEmployee] = useState(0);
    const getData = async()=>{
        try{
            await axios.get(`${BACKEND_URI}/User_Data`).then((resdata)=>{
                let teacherarry = []
                let studentarry = []
                let developerarry = []
                let managerArry = [];
                let employeeArry = [];
                for(var i = 0;  i<= resdata.data.length;i++){
                    if(resdata?.data[i]?.role == "Teacher"){
                        let teacherData = resdata?.data[i]
                        teacherarry.push(teacherData);
                    }else if(resdata?.data[i]?.role == "Student"){
                        let studentData = resdata?.data[i]
                        studentarry.push(studentData)
                    } else if(resdata?.data[i]?.role == "Developer"){
                        let developerData = resdata?.data[i]
                        developerarry.push(developerData)
                    } else if(resdata?.data[i]?.role == "Manager"){
                        let managerData = resdata?.data[i];
                        managerArry.push(managerData)
                    } else if(resdata?.data[i]?.role == "Employee"){
                        let employeeData = resdata?.data[i];
                        employeeArry.push(employeeData)
                    }
                }
                // console.log();
                setStudent(studentarry.length)
                setTeacher(teacherarry.length)
                setDeveloper(developerarry.length)
                setManager(managerArry.length)
                setEmployee(employeeArry.length)
              })
        }catch(e){
            console.log("e", e);
        }
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <div >
            <div className='container' >
                <div className='row d-flex justify-content-start '>
                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box ms-3'>
                        <i class="fa-solid fa-users"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                {student}
                            </span><br/>
                            <span className='Order-span'>Total Student</span>
                        </div>

                    </div>
                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box1 ms-3'>
                        <i class="fa-solid fa-certificate"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                {teacher}
                            </span><br/>
                            <span className='Order-span'>Total Teachers</span>
                        </div>

                    </div>
                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box2 ms-3'>
                        <i class="fa-solid fa-user"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                {sessionData}
                            </span><br/>
                            <span className='Order-span'>Total Sessions</span>
                        </div>

                    </div>

                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box2 ms-3'>
                        <i class="fa-solid fa-user"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                {manager}
                            </span><br/>
                            <span className='Order-span'>Total Managers</span>
                        </div>

                    </div>
                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box2 ms-3'>
                        <i class="fa-solid fa-user"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                {employee}
                            </span><br/>
                            <span className='Order-span'>Total Employee</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard