import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import { baseUrl } from './baseUrl';
import Header from './Header'

import { useNavigate } from 'react-router-dom';


function Salaryreport() {
  const navigate=useNavigate()

  useEffect(()=>{
    const lc = localStorage.getItem("check")
    if(lc!=="okk"){
      navigate('/')
    }
  },[])
  useEffect(()=>{empgetData();presentGetData()},[])
  const empgetData=()=>{
    axios.get(baseUrl+"addemploye").then((res)=>{setEmpList(res.data.data);setEmpList1(res.data.data)})
}
  const[emplist, setEmpList]=useState([])
  const[emplist1, setEmpList1]=useState([])
  const[attList,setattList]=useState([])
  

  const presentGetData=()=>{
    axios.get(baseUrl+"attendence").then((res)=>setattList(res.data.data))
}


const filterFn =(x)=>{
  const list5 = emplist1.filter((i)=>i.firstName.includes(x)||i.lastName.includes(x)||i.mobileNo.includes(x))
  setEmpList(list5)
}
const current = new Date();
const date = current.getDate();
const month = current.getMonth()+1

const [currMonth,setCurrMonth]=useState(month)
const year = current.getFullYear();
const [currYear, setCurrYear] = useState(year);

  return (
    <div>
   <div style={{display:"flex", flexDirection:"row"}}>
  <Sidebar/>
<div className='dashdiv'>
  {/* ==================Header===================== */}
  <Header filterFn={filterFn}/>
  {/* =======================MainTable==================== */}
  <div className="fltrdiv" style={{ width: "95%", marginLeft: "2.5%" }}>

<select className="selemp1" value={currYear} onChange={(e)=>setCurrYear(e.target.value)}>
  <option selected disabled>
    Year
  </option>
  <option>2019</option>
  <option>2020</option>
  <option>2021</option>
  <option>2022</option>
  <option>2023</option>
</select>
<select className="selemp1" value={currMonth} onChange={(e)=>setCurrMonth(e.target.value)}>
  <option selected disabled>
    Month
  </option>
  <option value={1}>January</option>
  <option value={2}>Febuary</option>
  <option value={3}>March</option>
  <option value={4}>April</option>
  <option value={5}>May</option>
  <option value={6}>June</option>
  <option value={7}>July</option>
  <option value={8}>Agust</option>
  <option value={9}>September</option>
  <option value={10}>October</option>
  <option value={11}>November</option>
  <option value={12}>December</option>
</select>
</div>

<br/>

  <div className='text-nowrap' style={{width:"95%", marginLeft:"2.5%", overflowX:"auto"}}>
        <table style={{backgroundColor:"white",textAlign:"center"}} className='table table-bordered'>
            <thead style={{height:"40px", backgroundColor:"#45529a", color:"white"}}>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Sr No.</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Employee Name</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Number</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Salary</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Total Present</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Total Absent</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Total Halfday</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Current Salary </th>
            </thead>
            <tbody>
                {emplist.map((i,index)=>
                <tr>
                    <td>{index+1}</td>
                    <td>{i.firstName} {i.lastName}</td>
                    <td>{i.mobileNo}</td>
                    <td>{i.empSalary}</td>
                    <td style={{color:"green"}}>  <i
                        class="fa fa-angle-double-up"
                        aria-hidden="true"
                        style={{ fontSize: "18px" }}
                      ></i> {attList.filter((j)=>(j.name===i.firstName+" "+i.lastName)&(j.status==="Present")&j.month==currMonth).length}</td>
                    <td style={{color:"red"}}>  <i
                        class="fa fa-angle-double-down"
                        aria-hidden="true"
                        style={{ fontSize: "18px" }}
                      ></i> {attList.filter((j)=>(j.name===i.firstName+" "+i.lastName)&(j.status==="Absent")&j.month==currMonth).length}</td>
                    <td style={{color:"orange"}}> <i class="fa fa-star-half-o" aria-hidden="true"></i>&nbsp;{attList.filter((j)=>(j.name===i.firstName+" "+i.lastName)&(j.status==="Halfday")&j.month==currMonth).length}</td>
                    <td style={{color:"black",fontWeight:"bold"}}>{((+i.empSalary/25)*attList.filter((j)=>(j.name===i.firstName+" "+i.lastName)&(j.status==="Present")&j.month==currMonth).length)+(((+i.empSalary/50))*attList.filter((j)=>(j.name===i.firstName+" "+i.lastName)&(j.status==="Halfday")&j.month==currMonth).length)}Rs.</td>
                </tr>)}
            </tbody>
        </table></div>
  

  </div>
  </div>
    </div>
  )
}

export default Salaryreport