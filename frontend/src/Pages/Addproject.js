import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Sidebar from './Sidebar'
import { baseUrl } from './baseUrl';
import { useNavigate } from 'react-router-dom';


function Addproject() {
  const navigate=useNavigate()

  useEffect(()=>{
    const lc = localStorage.getItem("check")
    if(lc!=="okk"){
      navigate('/')
    }
  },[])
    const[ptitleName,setptitleName]=useState("")
    const[pcategory,setpcategory]=useState("")
    const[pfund,setpfund]=useState("")
    const[pstartDate,setpstartDate]=useState("")
    const[pendDate,setpendDate]=useState("")
    const[pmilestone,setpmilestone]=useState("")
    const[pclientName,setpclientName]=useState("")

    const propostData=()=>{
        const item={
         ptitleName:ptitleName,
         pcategory:pcategory,
         pfund:pfund,
         pstartDate:pstartDate,
         pendDate:pendDate,
         pmilestone:pmilestone,
         pclientName:pclientName,
        }
        axios.post(baseUrl+"addproject", item)
    }
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
      <label className='addemlab'>Title Name*</label>
  <input onChange={(e)=>setptitleName(e.target.value)} className='addeminp' placeholder='Title Name'/>
  </div>
  <div className='addinpdiv'>
  <label  className='addemlab'>Client Name*</label>
  <input onChange={(e)=>setpclientName(e.target.value)} className='addeminp' placeholder='Client Nam'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Fund*</label>
  <input onChange={(e)=>setpfund(e.target.value)} className='addeminp' placeholder='Fund..'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Start Date*</label>
  <input type="date" onChange={(e)=>setpstartDate(e.target.value)} className='addeminp' placeholder='Start Date'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project End Date*</label>
  <input type="date" onChange={(e)=>setpendDate(e.target.value)} className='addeminp' placeholder='End Date'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Milestone*</label>
  <input onChange={(e)=>setpmilestone(e.target.value)} className='addeminp' placeholder='No. of milestone'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%", alignItems:"center", marginTop:"30px"}}>

  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Category*</label>
  <input onChange={(e)=>setpcategory(e.target.value)} className='addeminp' placeholder='Category'/>
  </div>
 
  </div><br/><br/>
  <button className='addempbtn' onClick={()=>propostData()}>Submit</button>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Addproject