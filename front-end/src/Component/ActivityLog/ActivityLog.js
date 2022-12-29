import React from 'react'

function ActivityLog() {
  return (
    <div className='container'>
        <div className='row d-flex justify-content-center' style={{ background: "white" }}>
                <p className='text-start mt-3 '>Total Users: 195</p>
                
                <div className='col-lg-12  '>
                    <div className='table-responsive' >
                    <table className="table table-bordered table-striped-warning table-hover">
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

export default ActivityLog