import React,{useState} from 'react'
import "./Login.css"
import logo1 from "../../Assets/44627.png"
import {useNavigate} from "react-router-dom"
import { BACKEND_URI } from "../../config/config";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
function Login({setstate,state}) {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const Navigate = useNavigate()
  const handleSubmit =async(e)=>{
    try{
      e.preventDefault();
      console.log(password, email);
    await axios.post(`${BACKEND_URI}/login`,{
      email,
      password
    }).then((res)=>{
    
      if(res.data.result == "E-mail and password are required"){
        toast.error("E-mail and password are required")
      } else if(res.data.result == "Invalid credentials"){
        toast.error("E-mail are not correct")
      }  else if(res.data.result == "Invalid credentials password"){
        toast.error("Password are not correct")
      }  else{
        toast.success("Login Successfully")
        setstate(!state)
      Navigate("/sidebar/dashboard")
      }

    })
      //      setstate(!state)
      // Navigate("/sidebar/dashboard")
    }catch(e){
      console.log("e", e);
    }
  }

  return (
    <div className="wrapper">
      <div className="sct brand">
        <img src={logo1} width="270px" />
      </div>
      <div className="sct login">
        <form onSubmit={handleSubmit}>
          <h3>SIGN IN NOW</h3>
          <input type="email"  placeholder="Email" className='mb-3' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         {/* <button></button> */}
          <input type="submit" value="SIGN IN" />

        </form>
      </div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  )
}

export default Login