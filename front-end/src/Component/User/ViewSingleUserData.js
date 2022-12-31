import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useNavigate,useParams,Link } from "react-router-dom"
import {BACKEND_URI} from "../../config/config"
function ViewSingleUserData() {
    const navigate = useNavigate();
    const params = useParams();
    const [dataShowSingle,setDataShowSingle] = useState([])
    const [agency,setAgency] = useState([])
    const [programs,setPrograms] = useState([]);
    const [school,setSchools] = useState([])
    let [timeZone,setimeZone] = useState()
    const singleDataView = async()=>{
        try{
            await axios.get(`${BACKEND_URI}/user_single_data_find/${params.id}`).then((res)=>{
                // console.log("res",res.data.selectSchoolsEnter);
                setAgency(res.data.personNameEnter)
                setDataShowSingle(res.data)
                setSchools(res.data.selectSchoolsEnter)
                setPrograms(res.data.selectProgramsEnter)
                setimeZone(res.data.timeZone[0].timezone)
            })
        }catch(e){
            console.log("e",e);
        }
    }
    // console.log("timeZone",agency);
 useEffect(()=>{
    singleDataView()
 },[])
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
                    <div>{agency.map((agency)=>{
                        return (
                            <>{agency.title} ,</>
                        )
                    })}</div>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>Programe</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                <div>{programs.map((agency)=>{
                        return (
                            <>{agency.title} ,</>
                        )
                    })}</div>
                </div>
                <div className='col-lg-2 text-md-start mt-2 ps-md-4 mt-4'>
                    <h6>School</h6>
                </div>
                <div className='col-lg-10 text-md-start mt-2'>
                <div>{school.map((agency)=>{
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
               
                <div className='col-lg-10 text-md-start mt-4'>
                    {/* {active == "true" ? <button className='btn btn-active' size="sm">Active</button> : <button className='btn btn-Inactive' size="sm">Inactive</button>} */}
                </div>

                {/* <div className='col-md-11 mt-4 pt-3 pb-3 mb-5 ms-md-4 text-start' style={{ borderBottom: "1px solid #838383", borderTop: "1px solid #838383" }}>
                    <Link to={`/update_single_school_data/${params.id}`} style={{ textDecoration: "none" }}><button className='btn btn-Edit me-2' >Edit</button></Link>
                    <button className='btn btn-Cancel' onClick={() => navigate("/schools")}>Cancel</button>
                </div> */}

            </div>
        </div>
  )
}

export default ViewSingleUserData