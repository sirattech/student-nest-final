import React, { useState, useEffect } from 'react'
import { BACKEND_URI } from "../../config/config";
import axios from "axios";
function EmailNotification() {

    const [getEmailRecord, setGetEmailRecord] = useState([])
    const [emailLength, setEmailLength] = useState(0)
    const get_Email_Data = async () => {
        try {
            await axios.get(`${BACKEND_URI}/get_Email_Data`).then((res) => {
                setGetEmailRecord(res.data)
                setEmailLength(res.data.length)
            })
        } catch (e) {
            console.log("e", e);
        }
    }
    useEffect(() => {
        get_Email_Data()
    }, [])
    return (
        <div className='container'>
            <div className='row user-box-1'>
                <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                    <h4 className='user-h4 mt-2'>EMAIL NOTIFICATIONS</h4>
                    <div>
                        <button className='btn btn-dangerpdf me-md-3 mt-2'>EXPORT TO PDF</button>
                        <button className='btn btn-dangerexcel mt-2'>EXPORT TO EXCEL</button>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center justify-content-between pt-3 pb-3 align-items-center' style={{ background: "white" }}>
                <div className='col-lg-5 text-md-start mt-2'>
                    {/* <button className='btn btn-primaryadd me-md-3 mt-2'><i class="fa-solid fa-plus"></i> Add New Agencies</button> */}
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
                <p className='text-start mt-3 '>Total Email: {emailLength}</p>

                <div className='col-lg-12  '>
                    <div className='table-responsive' >
                        <table className="table table-bordered table-striped table-hover">
                            <thead className='text-start'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Send Time</th>
                                </tr>
                            </thead>
                            <tbody className='text-start'>
                                {getEmailRecord.length > 0 ? (
                                    getEmailRecord.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.fName} {item.lName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.dateTime}</td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr className="text-center">
                                        <td colSpan={4}>
                                            <h1>No Result Found</h1>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailNotification