import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';
import { BACKEND_URI } from "../../config/config"
function UpdateSingleUpdateData() {
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [currentTime, setCurrentTime] = useState('');
    const navigate = useNavigate();
    const params = useParams();
    const activeChange = (e) => {
        setActive(!active)
    }
    const singleDataAgency = async () => {
        try {
            await axios.get(`${BACKEND_URI}/single_person_grades_data/${params.id}`).then((res1) => {
                console.log("res1", res1.data);
                setTitle(res1.data.title)
                setDescription(res1.data.description)
                setCurrentTime(res1.data.currentTime);
                setActive(res1.data.active)
            })
        } catch (e) {
            console.log("e", e);
        }
    }

    const UpdateData = async () => {
        try {
           
            await axios.put(`${BACKEND_URI}/update_single_person_grades_data/${params.id}`, {
                active,
                title,
                description,
                currentTime,
            }).then((res2) => {
                console.log("res2", res2);
                navigate("/grade")
            })
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        singleDataAgency()
    }, [])
    return (
        <div className='container'>
            <div className='row user-box-1'>
                <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                    <h4 className='user-h4 mt-2'>NEW AGENCY</h4>

                </div>
            </div>
            <div className='row d-flex flex-column justify-content-center justify-content-between pt-3 pb-3 align-items-center' style={{ background: "white" }}>

                <div className='col-lg-6 text-md-start mt-2'>

                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2'>
                            <label htmlFor="exam pleFormControlInput1" className="form-label mt-2">Title</label>
                        </div>
                        <input type="email" className="form-control ms-3" id="exampleFormControlInput1" placeholder="Agency Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        <br />
                    </div>

                </div>
                <div className='col-lg-6 text-md-start mt-2'>
                    <div className="mb-3 d-flex align-items-center">
                        <div className='col-md-2'>

                            <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Description</label>
                        </div>
                        <input type="email" className="form-control ms-3" id="exampleFormControlInput1" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br />


                    </div>
                </div>
                <div className='col-lg-6 text-md-start mt-2 d-flex'>
                    <div className='col-md-2'>
                        <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Status</label>
                    </div>
                    <label className="switch">
                        <input type="checkbox" id="togBtn" value={active} onChange={activeChange} />
                        <div className="slider round">

                            <span className="on" value="on">Active</span>
                            <span className="off" value="off">Inactive</span>

                        </div>
                    </label>

                </div>

                <div className='col-md-11 mt-4 pt-3 pb-3 mb-5' style={{ borderBottom: "1px solid #838383", borderTop: "1px solid #838383" }}>
                    <button className='btn btn-save me-2' onClick={UpdateData}>Save</button>
                    <button className='btn btn-Cancel' onClick={() => navigate("/grade")}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default UpdateSingleUpdateData