import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Sidebar from './Sidebar'
import { baseUrl } from './baseUrl';
import { useNavigate } from 'react-router-dom';


function Addtraines() {
  const navigate=useNavigate()
  const[shwmodal, setShwmodal]=useState(false)
  const[validation, setValidation]=useState(false)


  useEffect(()=>{
    const lc = localStorage.getItem("check")
    if(lc!=="okk"){
      navigate('/')
    }
  },[])
const[tfirstName,settfirstName]=useState("")
const[tlastName,settlastName]=useState("")
const[tmobileNo,settmobileNo]=useState("")
const[temail,settemail]=useState("")
const[tdob,settdob]=useState("")
const[tjoiningDate,settjoiningDate]=useState("")
const[tdesignation,settdesignation]=useState("")
const[tcurrAddress,settcurrAddress]=useState("")
const[batchTime,setbatchTime]=useState("")

const tPostData=()=>{
  if(tfirstName!==""&tlastName!==""&tmobileNo!==""&temail!==""&tdob!==""&tjoiningDate!==""&tdesignation!==""&tcurrAddress!==""&batchTime!==""){
    const item={
     tfirstName:tfirstName,
     tlastName:tlastName,
     tmobileNo:tmobileNo,
     temail:temail,
     tdob:tdob,
     tjoiningDate:tjoiningDate,
     tdesignation:tdesignation,
     tcurrAddress:tcurrAddress,
     batchTime:batchTime,
     syllabus:""
    }
    axios.post(baseUrl+"addtraines", item).then(()=>setShwmodal(true))
}else{
  setValidation(true)
}}


  return (
    <div>
    <div style={{display:"flex", flexDirection:"row"}}>
  <Sidebar/>
<div className='dashdiv'>
  {/* ==================Header===================== */}
  <Header/>
{/* ==================Header---End===================== */}
<div className='addempdiv'>
    <div className='whitedd'><br/>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%", backgroundColor:"transparent",justifyContent:"space-evenly", alignItems:"center"}}>
  <div className='addinpdiv'>
      <label className='addemlab'>Firstname*</label>
  <input style={{border:tfirstName===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settfirstName(e.target.value)} className='addeminp' placeholder='Firstname'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Lastname*</label>
  <input style={{border:tlastName===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settlastName(e.target.value)} className='addeminp' placeholder='Lastname'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Mobile Number*</label>
  <input style={{border:tmobileNo===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settmobileNo(e.target.value)} className='addeminp' placeholder='Mobile Number'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
  <div className='addinpdiv'>
      <label  className='addemlab'>Email*</label>
  <input style={{border:temail===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settemail(e.target.value)} className='addeminp' placeholder='Email'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>DOB*</label>
  <input style={{border:tdob===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settdob(e.target.value)} className='addeminp' placeholder='DOB'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Joining Date*</label>
  <input style={{border:tjoiningDate===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settjoiningDate(e.target.value)} className='addeminp' placeholder='Email' type="date"/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%", alignItems:"center", marginTop:"30px"}}>

  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Batch Time*</label>
  <input style={{border:batchTime===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setbatchTime(e.target.value)} className='addeminp' placeholder='Batch Time'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Designation*</label>
  <input style={{border:tdesignation===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settdesignation(e.target.value)} className='addeminp' placeholder='Designation'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Current Address*</label>
      <textarea style={{border:tcurrAddress===""& validation? "1px solid red":"1px solid grey"}} onChange={(e)=>settcurrAddress(e.target.value)} placeholder='Address..' className='addeminp'></textarea>
  </div>
 
  </div><br/><br/>
  <button onClick={()=>{tPostData()}} className='addempbtn'>Submit</button>

</div>

{/* ====================Modal================ */}
{shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal12' >
<div>
  <i onClick={()=>setShwmodal(false)} style={{ position:"absolute", top:10, right:10, color:"#45529a"}} className='fa fa-times'></i></div>
<label> ✅ Trainee Add Successfully..</label>
</div></div>:null}
</div>
</div>
</div>



</div>
  )
}

export default Addtraines