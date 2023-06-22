import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Header from './Header'
import { baseUrl } from './baseUrl';
import { useNavigate } from 'react-router-dom';

function Addclient() {
    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      },[])
    const navigate=useNavigate()
    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      })

    const [clientData, setClientData]=useState({})
    

    const postData=()=>{
        axios.post(baseUrl+"addclient", clientData)
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
      <label className='addemlab'>Client Name*</label>
  <input onChange={(e)=>setClientData({...clientData, cName:e.target.value})} className='addeminp' placeholder='Client Name'/>
  </div>
  <div className='addinpdiv'>
  <label  className='addemlab'>Client Number*</label>
  <input onChange={(e)=>setClientData({...clientData, cNumber:e.target.value})}  className='addeminp' placeholder='Client No.'/>
  </div>
  <div className='addinpdiv'>
  <label  className='addemlab'>Client Email*</label>
  <input onChange={(e)=>setClientData({...clientData, cEmail:e.target.value})} className='addeminp' placeholder='abc@gmail.com'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Giving Date*</label>
  <input onChange={(e)=>setClientData({...clientData, cProGiveDate:e.target.value})} type="date"  className='addeminp' placeholder='Start Date'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Last Date*</label>
  <input onChange={(e)=>setClientData({...clientData, cProTakeDate:e.target.value})} type="date"  className='addeminp' placeholder='End Date'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Title*</label>
  <input onChange={(e)=>setClientData({...clientData, cProTitle:e.target.value})} className='addeminp' placeholder='Title'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%", alignItems:"center", marginTop:"30px"}}>

  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Project Purpose*</label>
  <input onChange={(e)=>setClientData({...clientData, cPurpose:e.target.value})} className='addeminp' placeholder='Ecom, Metromony Etc...'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Project Fund*</label>
  <input onChange={(e)=>setClientData({...clientData, cProMoney:e.target.value})} className='addeminp' placeholder='1Lakh'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Milestone*</label>
  <input onChange={(e)=>setClientData({...clientData, cMilestone:e.target.value})} className='addeminp' placeholder='Milestone'/>
  </div>
 
  </div><br/><br/>
  <button className='addempbtn' onClick={()=>postData()}>Submit</button>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Addclient