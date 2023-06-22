import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      })
    const [sidebr, setSidebr]=useState(false)
    const navigate=useNavigate()
    const[shwemp, setShwemp]=useState(false)
    const[shwtrn3, setShwtrn3]=useState(false)
    const[shwtrn4, setShwtrn4]=useState(false)
    const[shwtrn, setShwtrn]=useState(false)
    const[shwprj, setShwprj]=useState(false)
    const[shwprj1, setShwprj1]=useState(false)
  return (
    <div>
        <div className='sidebarmain1'  style={{marginTop:"-10px"}}>
            <div className='sidebarup' >
                <div>
<h2 style={{color:"rgb(69 82 154)"}}>HRM <span style={{fontSize:"30px",fontWeight:"lighter",color:"rgb(69 82 154)"}}>SYSTEM</span></h2></div>

            </div>
            <div style={{height:"1px",width:"100%",backgroundColor:"grey"}}></div>
            <div className='sidebarlabel'>
                <div className='sidebarcontent1' >
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-home" aria-hidden="true"></i>

                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Home")}>
<label>Main Dashboard</label>
                </div>
                </div>
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-users" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>setShwemp(!shwemp)}>
<label>Employees</label>
                </div>
                </div>
                <div style={{height:shwemp===true?"70px":"0px", width:"100%", backgroundColor:"whitesmoke", justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center",overflow:"hidden",transition:"0.2s"}}>
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i  class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Addemp")}>
<label>Add Employees</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i class="fa fa-table" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Employedetails")}>
<label>Employees Details</label>
                </div>
                </div> 
                </div>
                <div className='sidebarcontent1' >
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-users" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp' onClick={()=>setShwtrn(!shwtrn)}>
<label>Trainees</label>
</div>
                </div>
                <div style={{height:shwtrn===true?"70px":"0px", width:"100%", backgroundColor:"whitesmoke", justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center",overflow:"hidden",transition:"0.2s"}}>
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Addtraines")}>
<label>Add Trainees</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i  class="fa fa-table" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Trainesdetails")}>
<label>Trainees Details</label>
                </div>
                </div> 
                </div>
                <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-user" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp' onClick={()=>setShwtrn4(!shwtrn4)}>
<label>Clients</label>
</div>
                </div>
                <div style={{height:shwtrn4===true?"70px":"0px", width:"100%", backgroundColor:"whitesmoke", justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center",overflow:"hidden",transition:"0.2s"}}>
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Addclient")}>
<label>Add Client</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i  class="fa fa-table" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Clientdetails")}>
<label>View Client Details</label>
                </div>
                </div> 
                </div>
                <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-puzzle-piece" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp'onClick={()=>setShwprj(!shwprj)}>
<label>Project</label>
</div>
                </div>
                <div style={{height:shwprj===true?"70px":"0px", width:"100%", backgroundColor:"whitesmoke", justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center",overflow:"hidden",transition:"0.2s"}}>
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Addproject")}>
<label>Add Project</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i class="fa fa-table" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Projects")}>
<label>Project Details</label>
                </div>
                </div> 
                </div>
                <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-line-chart" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp' onClick={()=>setShwprj1(!shwprj1)}>
<label>Attendence</label>
</div>
                </div>
                <div style={{height:shwprj1===true?"120px":"0px", width:"100%", backgroundColor:"whitesmoke", justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center",overflow:"hidden",transition:"0.2s"}}>
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Empattendence")}>
<label>Employe Attendence</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Eattdetails")}>
<label>Employe Attendence Details</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i class="fa fa-table" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Projects")}>
<label>Trainee Attendence</label>
                </div>
                </div> 
                </div>
                <div className='sidebarcontent1' >
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-credit-card-alt" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp' onClick={()=>setShwtrn3(!shwtrn3)}>
<label>Payroll & Advance</label>
</div>

                </div>
                <div style={{height:shwtrn3===true?"110px":"0px", width:"100%", backgroundColor:"whitesmoke", justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center",overflow:"hidden",transition:"0.2s"}}>
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Addempbank")}>
<label> Add Emp Bank Details</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i  class="fa fa-table" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Empbankdet")}>
<label>Emp. Bank Details</label>
                </div>
                </div> 
                <div className='sidebarcontent1'>
                    <div className='icon'>
                <i  class="fa fa-table" aria-hidden="true"></i>
                </div>
                <div className='sidebarlabelp' onClick={()=>navigate("/Salaryreport")}>
<label>Emp.Salary Details</label>
                </div>
                </div> 
                </div>
                {/* <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-handshake-o" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp'>
<label>Employee Onboarding</label>
</div>
                </div> */}
                {/* <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-user-circle-o" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp'>
<label>Accounts</label>
</div>
                </div> */}
                {/* <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-laptop" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp'>
<label>Departments</label>
</div>
                </div> */}
                {/* <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-search-plus" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp'>
<label>Recruitment</label>
</div>
                </div> */}
                {/* <div className='sidebarcontent1' style={{backgroundColor:"red"}}>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-info-circle" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp' >
<label>Notice Issue</label>
</div>
                </div> */}
                {/* <div className='sidebarcontent1' >
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
             
<div className='sidebarlabelp'>
<label>Notice Board</label>
</div>
                </div> */}
                <div className='sidebarcontent1'>
                <div className='icon'>
                <i style={{color:"rgb(69 82 154)"}} class="fa fa-lock" aria-hidden="true"></i>

                </div>
             
<div className='sidebarlabelp' onClick={()=>{localStorage.removeItem("check");navigate("/") }}>
<label>Logout</label>
</div>
                </div>
        
            </div>
        </div>
    </div>
  )
}

export default Sidebar