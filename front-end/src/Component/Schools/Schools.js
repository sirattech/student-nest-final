import React from 'react'

function Schools() {
  return (
    <div className='container'>
    <div className='row user-box-1'>
                    <div className='col-lg-12 col-12  d-flex justify-content-center  justify-content-between align-items-center pt-3 pb-3'>
                        <h4 className='user-h4 mt-2'>SCHOOLS</h4>
                        <div>
    
                            <button className='btn btn-dangerpdf me-md-3 mt-2'>EXPORT TO PDF</button>
    
                            <button className='btn btn-dangerexcel mt-2'>EXPORT TO EXCEL</button>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center justify-content-between pt-3 pb-3 align-items-center' style={{ background: "white" }}>
                    <div className='col-lg-5 text-md-start mt-2'>
                        <button className='btn btn-primaryadd me-md-3 mt-2'><i class="fa-solid fa-plus"></i> Add New School</button>
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
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
                                    
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                   
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Schools