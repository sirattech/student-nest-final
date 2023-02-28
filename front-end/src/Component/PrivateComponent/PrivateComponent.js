import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
function PrivateComponent({state}) {
  return state? <Outlet/> : <Navigate to="/"/>
}

export default PrivateComponent