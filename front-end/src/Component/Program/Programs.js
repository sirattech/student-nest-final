import React, { useEffect, useState } from 'react'
import { BACKEND_URI } from "../../config/config"
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {Link} from "react-router-dom"

function Programs() {
    const [status, setStatus] = useState(false);
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false);
    const [getAgencyData, setGetAgencyData] = useState([])

    const changeAgenciews = () => {
        setStatus(!status)
    }
    const activeChange = (e) => {

        setActive(!active)
    }
      //  Programs data post
      const programsData = async () => {
        try {
            if (!title || !description) {
                setError(true)
                return false
            }

            let currentTime = new Date().toLocaleString(); //Current Date
            await axios.post(`${BACKEND_URI}/programs`, {
                active,
                title,
                description,
                currentTime
            }).then((res) => {
                console.log("res", res);
                setTitle("")
                setDescription('')
                setStatus(false)
                programsDataGet()
            }
            )
        } catch (e) {
            console.log("e", e);
        }
    }


    // Programs data get 

    const programsDataGet = async () => {
        try {
            await axios.get(`${BACKEND_URI}/programs`).then((resp) => {
                console.log("resp", resp.data);
                setGetAgencyData(resp.data)
            })
        } catch (e) {
            console.log("e", e);
        }
    }

    // Programs data delete 

    const programsDataDelete = async (id) => {
        console.log(id);
        await axios.delete(`${BACKEND_URI}/programs_data_delete/${id}`).then((resps) => {
            console.log("resps", resps);
            if(resps){
                programsDataGet()
            }
        })
    }


    useEffect(() => {
        programsDataGet()
    }, [])
    return (
        <div className='container'>
            {
                status ? (
                    <div>
                        <div className='row user-box-1'>
                            <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                                <h4 className='user-h4 mt-2'>NEW Programs</h4>

                            </div>
                        </div>
                        <div className='row d-flex flex-column justify-content-center justify-content-between pt-3 pb-3 align-items-center' style={{ background: "white" }}>
                            <div className='col-lg-6 text-md-start mt-2'>
                            {error && !description && !title && <Alert key="danger" variant="danger">
                                        Please Fill Title and Description feild
                                    </Alert>}
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2'>
                                        <label for="exam pleFormControlInput1" className="form-label mt-2">Title</label>
                                    </div>
                                    <input type="email" className="form-control ms-3" id="exampleFormControlInput1" placeholder="Program Name" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                                </div>
                            </div>
                            <div className='col-lg-6 text-md-start mt-2'>
                                <div className="mb-3 d-flex align-items-center">
                                    <div className='col-md-2'>

                                        <label for="exampleFormControlInput1" className="form-label mt-2">Description</label>
                                    </div>
                                    <input type="email" className="form-control ms-3" id="exampleFormControlInput1" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                                </div>
                            </div>
                            <div className='col-lg-6 text-md-start mt-2 d-flex'>
                                <div className='col-md-2'>
                                    <label for="exampleFormControlInput1" className="form-label mt-2" value={active} onChange={activeChange}>Status</label>
                                </div>
                                <label class="switch">
                                    <input type="checkbox" id="togBtn" value={active} onChange={activeChange}/>
                                    <div class="slider round">

                                        <span class="on">Active</span>
                                        <span class="off">Inactive</span>

                                    </div>
                                </label>

                            </div>

                            <div className='col-md-11 mt-4 pt-3 pb-3 mb-5' style={{ borderBottom: "1px solid #838383", borderTop: "1px solid #838383" }}>
                                <button className='btn btn-save me-2' onClick={programsData}>Save</button>
                                <button className='btn btn-Cancel' onClick={changeAgenciews}>Cancel</button>
                            </div>

                        </div>
                    </div>
                ) :
                (
                    <div>
                         <div className='row user-box-1'>
                <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                    <h4 className='user-h4 mt-2'>PROGRAM</h4>
                    <div>

                        <button className='btn btn-dangerpdf me-md-3 mt-2'>EXPORT TO PDF</button>

                        <button className='btn btn-dangerexcel mt-2'>EXPORT TO EXCEL</button>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center justify-content-between pt-3 pb-3 align-items-center' style={{ background: "white" }}>
                <div className='col-lg-5 text-md-start mt-2'>
                    <button className='btn btn-primaryadd me-md-3 mt-2' onClick={changeAgenciews}><i class="fa-solid fa-plus"></i> Add New Program</button>
                    {/* <button className='btn  mt-2'><i class="fa-solid fa-upload"></i> Bulk Upload</button> */}
                </div>
                <div className='col-lg-7  '>
                    <div className='row  d-flex justify-content-lg-end mt-2'>
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
            <div className='row d-flex justify-content-center' style={{ background: "white" }}>
                <p className='text-start mt-3 '>Total Users: 195</p>

                <div className='col-lg-12  '>
                    <div className='table-responsive' >
                        <table className="table table-bordered table-striped table-hover">
                            <thead className='text-start'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Create Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Control</th>

                                </tr>
                            </thead>
                            <tbody className='text-start'>
                            {
                                               getAgencyData.length>0 ?     getAgencyData.map((items, index) => {
                                                        return (
                                                            <tr key={items._id}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{items?.title}</td>
                                                                <td>{items?.description}</td>
                                                                <td>{items?.currentTime}</td>
                                                                <td>{items.active == "true" ? <button className='btn btn-active' size="sm">Active</button> : <button className='btn btn-Inactive' size="sm">Inactive</button>}</td>
                                                                <td>
                                                                    <Link to={`/show_single_program_data/${items._id}`} style={{ textDecoration: "none" }}><button className='btn btn-xs btn-info me-2' style={{ paddibg: "0" }} title="View"><i class="fa-solid fa-eye" style={{ color: "white" }}></i></button></Link>
                                                                    <Link to={`/update_single_program_data/${items._id}`} style={{ textDecoration: "none" }}><button className='btn btn-xs btn-warning me-2' style={{ paddibg: "0" }} title="Update"><i class="fa-solid fa-pencil" style={{ color: "white" }}></i></button></Link>
                                                                    <button className='btn btn-xxs btn-danger' title="Delete" onClick={() => programsDataDelete(items._id)}><i class="fa-solid fa-xmark" style={{ color: "white" }}></i></button>

                                                                </td>

                                                            </tr>
                                                        )
                                                    }):
                                                    (<tr className='text-center'>
                                                    <td colSpan={6}><h1>No Result Found</h1></td>
                                                </tr>)
                                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                    </div>
                )
            }
           
        </div>
    )
}

export default Programs