import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { baseUrl } from './baseUrl';

function Signup() {
  const navigate=useNavigate()

  const [postUserData, setPostUserData]=useState({})

  const bhejodata=()=>{
    if(postUserData.firstname!==""&postUserData.lastname!==""&postUserData.email!==""&postUserData.password!==""&postUserData.type!==""){
    axios.post(baseUrl+"userlist",postUserData )
  }}




  return (
    <>
  <div className='logindiv' style={{backgroundColor:"#eeebe6"}}>
<div className='sublogindiv'>
  <div className='sublogindiv2' style={{backgroundColor:"#eeebe6"}}>
<label style={{fontSize:"35px", fontWeight:600,color:"rgb(69 82 154)"}}>Sign Up</label>

<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>

</div><br/>

<label className='lglab1'>First Name*</label>
<input onChange={(e)=>setPostUserData({...postUserData,firstname:e.target.value})} className='lginp' placeholder='First Name..'/><br/>
<label className='lglab1'>Last Name*</label>
<input onChange={(e)=>setPostUserData({...postUserData,lastname:e.target.value})} className='lginp' placeholder='Last Name..'/><br/>

<label className='lglab1'>Email*</label>
<input onChange={(e)=>setPostUserData({...postUserData,email:e.target.value})} className='lginp' placeholder='Enter your email..'/><br/>
<label className='lglab1'>Password*</label>
<input onChange={(e)=>setPostUserData({...postUserData,password:e.target.value})} className='lginp' placeholder='Enter your password..'/><br/>
<label className='lglab1'>Type*</label>
<select onChange={(e)=>setPostUserData({...postUserData,type:e.target.value})} className='lginp' >
  <option selected disabled>select</option>
  <option>Admin</option>
  <option>HR</option>
  <option>Employees</option>
  </select><br/>

<button className='lgsg' onClick={()=>{bhejodata();navigate("/")}}>Sign Up</button><br/>
  </div>
</div>
<div className='sublogindiv11'></div>
  </div>
    </>
  );
}

export default Signup;