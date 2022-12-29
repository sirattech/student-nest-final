import React from 'react'
import "./Dashboard.css"
function Dashboard() {
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
                                0
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
                                0
                            </span><br/>
                            <span className='Order-span'>Total Student</span>
                        </div>

                    </div>
                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box2 ms-3'>
                        <i class="fa-solid fa-user"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                0
                            </span><br/>
                            <span className='Order-span'>Total Student</span>
                        </div>

                    </div>

                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box2 ms-3'>
                        <i class="fa-solid fa-user"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                0
                            </span><br/>
                            <span className='Order-span'>Total Student</span>
                        </div>

                    </div>
                    <div className='col-lg-3 col-11 m-2 dashboard-box pt-4 pb-4 text-start d-flex '>
                        <div className='min-box2 ms-3'>
                        <i class="fa-solid fa-user"></i>
                        </div>
                        <div className='ms-2 mt-2' style={{ lineHeight: "1.5rem" }}>
                            <span className="two-span">
                                0
                            </span><br/>
                            <span className='Order-span'>Total Student</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard