import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { baseUrl } from './baseUrl';
import { useNavigate } from 'react-router-dom';


function Employedetails() {
    const navigate=useNavigate()

    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      },[])
    useEffect(()=>{tgetData()},[])
    const[list, setList]=useState([])
    const[list1, setList1]=useState([])
    const[shwmodal, setShwmodal]=useState(false)

    const[tfirstName,settfirstName]=useState("")
const[tlastName,settlastName]=useState("")
const[tmobileNo,settmobileNo]=useState("")
const[temail,settemail]=useState("")
const[tdob,settdob]=useState("")
const[tjoiningDate,settjoiningDate]=useState("")
const[tdesignation,settdesignation]=useState("")
const[tcurrAddress,settcurrAddress]=useState("")
const[batchTime,setbatchTime]=useState("")

const[tEditId,settEditId]=useState("")

    const tgetData=()=>{
        axios.get(baseUrl+"addtraines").then((res)=>{setList(res.data.data);setList1(res.data.data)})
    }
    const tputData=()=>{
        const item={
            tfirstName:tfirstName,
            tlastName:tlastName,
            tmobileNo:tmobileNo,
            temail:temail,
            tdob:tdob,
            tjoiningDate:tjoiningDate,
            batchTime:batchTime,
            tdesignation:tdesignation,
            tcurrAddress:tcurrAddress,
        }
        axios.put(baseUrl+"addtraines/"+tEditId, item).then((res)=>tgetData(res.data.data))
    }



    const traindltdetails=(x)=>{
        axios.delete(baseUrl+"addtraines/"+x).then(()=>tgetData())
    }
    
    const filterFn =(x)=>{
        const list2 = list1.filter((i)=>i.tfirstName.includes(x)||i.temail.includes(x)||i.tdob.includes(x)||i.tjoiningDate.includes(x)||i.tdesignation.includes(x)||i.tcurrAddress.includes(x)||i.tmobileNo.includes(x))
        setList(list2)
    }

  return (
    <div>
            <div style={{display:"flex", flexDirection:"row"}}>
            <Sidebar/>
        <div className='dashdiv'>
 <Header filterFn={filterFn} />
            <div className='empdetdiv' style={{width:"95%", marginLeft:"2.5%", }}>
                <div className='text-nowrap tabledd' style={{overflowY:"auto"}}>
                <table style={{backgroundColor:"white"}} className='table table-bordered'>
                    <thead style={{height:"40px",top:0,  backgroundColor:"#45529a", color:"white"}}>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Sr No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Trainee Name</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Phone No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Email</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >DOB</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Joining Date</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Batch Time</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Designation</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Current Address</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Action</th>
                    </thead>
                    <tbody>
                        {list.map((i,index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.tfirstName} {i.tlastName}</td>
                            <td>{i.tmobileNo}</td>
                            <td>{i.temail}</td>
                            <td>{i.tdob}</td>
                            <td>{i.tjoiningDate}</td>
                            <td>{i.batchTime}</td>
                            <td>{i.tdesignation}</td>
                            <td>{i.tcurrAddress}</td>
                            <td>
                            <button className='btn btn-outline-success' onClick={()=>{setShwmodal(true)
                            settfirstName(i.tfirstName)
                            settlastName(i.tlastName)
                            settmobileNo(i.tmobileNo)
                            settemail(i.temail)
                            settdob(i.tdob)
                            settjoiningDate(i.tjoiningDate)
                            setbatchTime(i.batchTime)
                            settdesignation(i.tdesignation)
                            settcurrAddress(i.tcurrAddress)
                            settEditId(i._id)
                            }}><i className='fa fa-pencil'></i>
                            </button>&nbsp;
                                <button onClick={()=>traindltdetails(i._id)} className='btn btn-outline-danger'><i className='fa fa-trash'></i></button>
                        </td>
                        </tr>)}
                    </tbody>
                </table></div>
{/* ==================modal=================== */}
{shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal1'>
<br/>
  <div className='addempsubdiv' style={{minHeight:"110px", width:"100%", backgroundColor:"transparent",justifyContent:"space-evenly", alignItems:"center"}}>
  <div className='addinpdiv'>
      <label className='addemlab'>Firstname*</label>
  <input value={tfirstName} onChange={(e)=>settfirstName(e.target.value)} className='addeminp' placeholder='Firstname'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Lastname*</label>
  <input value={tlastName} onChange={(e)=>settlastName(e.target.value)} className='addeminp' placeholder='Firstname'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Mobile Number*</label>
  <input value={tmobileNo} onChange={(e)=>settmobileNo(e.target.value)} className='addeminp' placeholder='Mobile Number'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"100px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
  <div className='addinpdiv'>
      <label  className='addemlab'>Email*</label>
  <input value={temail} onChange={(e)=>settemail(e.target.value)} className='addeminp' placeholder='Email'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>DOB*</label>
  <input value={tdob} onChange={(e)=>settdob(e.target.value)} className='addeminp' placeholder='DOB'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Joining Date*</label>
  <input value={tjoiningDate} onChange={(e)=>settjoiningDate(e.target.value)} className='addeminp' placeholder='Email' type="date"/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"100px", width:"100%", alignItems:"center", marginTop:"30px"}}>

  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Batch Time*</label>
  <input value={batchTime} onChange={(e)=>setbatchTime(e.target.value)} className='addeminp' placeholder='Batch Time'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Designation*</label>
  <input value={tdesignation} onChange={(e)=>settdesignation(e.target.value)} className='addeminp' placeholder='Designation'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Current Address*</label>
      <textarea value={tcurrAddress} onChange={(e)=>settcurrAddress(e.target.value)} placeholder='Address..' className='addeminp'></textarea>
  </div>
 
  </div><br/><br/>
  <button onClick={()=>setShwmodal(false)} className='addempbtn2'>Cancel</button>
  <button onClick={()=>{tputData();setShwmodal(false)}} className='addempbtn1'>Submit</button>


</div></div>:null}
            </div>
          </div>
          </div>

    </div>
  )
}

export default Employedetails