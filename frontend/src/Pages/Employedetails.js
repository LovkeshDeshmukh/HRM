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
    useEffect(()=>{empgetData()},[])
    const[emplist, setEmpList]=useState([])
    const[emplist1, setEmpList1]=useState([])
    const[shwmodal, setShwmodal]=useState(false)

const[firstName,setfirstName]=useState("")
const[lastName,setlastName]=useState("")
const[mobileNo,setmobileNo]=useState("")
const[email,setemail]=useState("")
const[dob,setdob]=useState("")
const[employeeType,setemployeeType]=useState("")
const[joiningDate,setjoiningDate]=useState("")
const[designation,setdesignation]=useState("")
const[currAddress,setcurrAddress]=useState("")
const[empEditId,setempEditId]=useState("")


    const empgetData=()=>{
        axios.get(baseUrl+"addemploye").then((res)=>{setEmpList(res.data.data);setEmpList1(res.data.data)})
    }


    const empputData=()=>{
        const item={
            firstName:firstName,
            lastName:lastName,
            mobileNo:mobileNo,
            email:email,
            dob:dob,
            employeeType:employeeType,
            joiningDate:joiningDate,
            designation:designation,
            currAddress:currAddress,
        }
        axios.put(baseUrl+"addemploye/"+empEditId, item).then((res)=>empgetData(res.data.data))
    }

    const empdltdetails=(x)=>{
        axios.delete(baseUrl+"addemploye/"+x).then(()=>empgetData())
    }

    const filterFn =(x)=>{
        const list3 = emplist1.filter((i)=>i.firstName.includes(x)||i.email.includes(x)||i.dob.includes(x)||i.joiningDate.includes(x)||i.designation.includes(x)||i.currAddress.includes(x)||i.employeeType.includes(x)||i.mobileNo.includes(x)||i.lastName.includes(x))
        setEmpList(list3)
    }
  return (
    <div>
            <div style={{display:"flex", flexDirection:"row"}}>
            <Sidebar />
        <div className='dashdiv'>
        <Header filterFn={filterFn}/>
            <div className='empdetdiv' style={{width:"95%", marginLeft:"2.5%"}}>
            <div className='text-nowrap tabledd' style={{overflowY:"auto",overflowX:"auto"}}>
                <table style={{backgroundColor:"white"}} className='table table-bordered'>
                    <thead style={{height:"40px",top:0,zIndex:1,  backgroundColor:"#45529a", color:"white"}}>                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Sr No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Emp. Name</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Phone No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Email</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >DOB</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Employee Type</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Joining Date</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Designation</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Current Address</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Action</th>
                    </thead>
                    <tbody>
                        {emplist.map((i,index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.firstName} {i.lastName}</td>
                            <td>{i.mobileNo}</td>
                            <td>{i.email}</td>
                            <td>{i.dob}</td>
                            <td>{i.employeeType}</td>
                            <td>{i.joiningDate}</td>
                            <td>{i.designation}</td>
                            <td>{i.currAddress}</td>
                            <td>
                            <button class='btn btn-outline-success' onClick={()=>{setShwmodal(true)
                            setfirstName(i.firstName)
                            setlastName(i.lastName)
                            setmobileNo(i.mobileNo)
                            setemail(i.email)
                            setdob(i.dob)
                            setemployeeType(i.employeeType)
                            setjoiningDate(i.joiningDate)
                            setdesignation(i.designation)
                            setcurrAddress(i.currAddress)
                            setempEditId(i._id)
                            }}><i className='fa fa-pencil'></i></button>&nbsp;
                                <button onClick={()=>empdltdetails(i._id)} className='btn btn-outline-danger'><i className='fa fa-trash'></i></button>&nbsp;&nbsp;
                        </td>
                        </tr>)}
                    </tbody>
                </table></div>
            </div>

            {/* =====================MODAL==================== */}
            {shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal1'>
<br/>
<div className='addempsubdiv' style={{minHeight:"100px", width:"100%", backgroundColor:"transparent",justifyContent:"space-evenly", alignItems:"center"}}>
            <div className='addinpdiv'>
                <label className='addemlab'>Firstname*</label>
            <input value={firstName} onChange={(e)=>setfirstName(e.target.value)} className='addeminp' placeholder='Firstname'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Lastname*</label>
            <input value={lastName} onChange={(e)=>setlastName(e.target.value)} className='addeminp' placeholder='Firstname'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Mobile Number*</label>
            <input value={mobileNo} onChange={(e)=>setmobileNo(e.target.value)} className='addeminp' placeholder='Mobile Number'/>
            </div>
            </div>
            <div className='addempsubdiv' style={{minHeight:"100px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
            <div className='addinpdiv'>
                <label  className='addemlab'>Email*</label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} className='addeminp' placeholder='Email'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>DOB*</label>
            <input value={dob} onChange={(e)=>setdob(e.target.value)} className='addeminp' placeholder='DOB'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'> Employee Type*</label>
                <select value={employeeType} onChange={(e)=>setemployeeType(e.target.value)} className='addeminp'>
                <option disabled selected>select</option>
                <option>Regular</option>
                <option>Contarct</option>
                <option>Temporary</option>
            </select>
            </div>
            </div>
            <div className='addempsubdiv' style={{minHeight:"100px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
            <div className='addinpdiv'>
                <label  className='addemlab'>Joining Date*</label>
            <input value={joiningDate} onChange={(e)=>setjoiningDate(e.target.value)} className='addeminp' placeholder='Email' type="date"/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Designation*</label>
            <input value={designation} onChange={(e)=>setdesignation(e.target.value)} className='addeminp' placeholder='Designation'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Current Address*</label>
                <textarea value={currAddress} onChange={(e)=>setcurrAddress(e.target.value)} placeholder='Address..' className='addeminp'></textarea>
            </div>
           
            </div><br/><br/>
  <button onClick={()=>setShwmodal(false)} className='addempbtn2'>Cancel</button>
  <button onClick={()=>{empputData();setShwmodal(false)}} className='addempbtn1'>Submit</button>


</div></div>:null}
          </div>
          </div>
    </div>
  )
}

export default Employedetails