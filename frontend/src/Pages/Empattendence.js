import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { baseUrl } from './baseUrl';
import Header from './Header'

import { useNavigate } from 'react-router-dom';

function Empattendence() {
    const navigate=useNavigate()
    const[shwmodal, setShwmodal]=useState(false)


    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      },[])
    useEffect(()=>{empgetData();presentGetData()},[])
    const[emplist, setEmpList]=useState([])
    const current=  new Date
    const date=  current.getDate()
    const month=  current.getMonth()
    const year=  current.getFullYear()
    const day = current.getDay();
const[attList,setattList]=useState([])

    const monthList=[
        "January",
        "Fabuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Agust",
        "September",
        "October",
        "November",
        "December",
    ]


    const empgetData=()=>{
        axios.get(baseUrl+"addemploye").then((res)=>setEmpList(res.data.data))
    }

    const PresentPost=(x)=>{
        const item={
            name:x.firstName+" "+x.lastName,
            number:x.mobileNo,
            date:date,
            month:month+1,
            year:year,
            fullMonth:monthList[month],
            status:"Present",
        }
        axios.post(baseUrl+"attendence", item).then(()=>presentGetData())
    }
    const AbsentPost=(x)=>{
        const item={
            name:x.firstName+" "+x.lastName,
            number:x.mobileNo,
            date:date,
            month:month+1,
            year:year,
            fullMonth:monthList[month],
            status:"Absent",
        }
        axios.post(baseUrl+"attendence", item).then(()=>presentGetData())
    }
    const HalfdayPost=(x)=>{
        const item={
            name:x.firstName+" "+x.lastName,
            number:x.mobileNo,
            date:date,
            month:month+1,
            year:year,
            fullMonth:monthList[month],
            status:"Halfday",
        }
        axios.post(baseUrl+"attendence", item).then(()=>presentGetData())
    }

    const presentGetData=()=>{
        axios.get(baseUrl+"attendence").then((res)=>setattList(res.data.data))
    }
  return (
    <div>
         <div style={{display:"flex", flexDirection:"row"}}>
    <Sidebar/>
    <div className='dashdiv'>
    <Header/>
    <button className='dtbtn' style={{marginLeft:"2.5%"}}>{date}/{month+1}/{year}</button>
    <div className='empdetdiv' style={{width:"95%", marginLeft:"2.5%"}}>
        <div className='text-nowrap' >
       {day===0?
      
       <div className='holi'>
           <img className='holiimg' src='https://bethami.org/wp-content/uploads/sites/110/2020/01/Becker-Michael-bitmoji-e1598890919411.png'></img>
       <h1 style={{color:"#45529a"}}>Today is Holiday!</h1> 
       </div>
       :            <div className='text-nowrap tabledd' style={{overflowY:"auto",overflowX:"auto"}}>
       <table style={{backgroundColor:"white",textAlign:"center"}} className='table table-bordered'>
            <thead style={{height:"40px", backgroundColor:"#45529a", color:"white"}}>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Sr No.</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Employee Name</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Number</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Present</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Absent</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Halfday</th>
            </thead>
            <tbody>
                {emplist.map((i,index)=>
                <tr>
                    <td>{index+1}</td>
                    <td>{i.firstName} {i.lastName}</td>
                    <td>{i.mobileNo}</td>
                    <td><input 
                    onClick={()=>{
                        if(attList.filter((j)=>
                        (j.name===i.firstName+" "+i.lastName)&
                        (j.date==date)&
                        (j.month==month+1)).length===0){
                    
                    PresentPost(i)}}}
                    type="checkbox" 
                    checked={attList.filter((j)=>
                        (j.name===i.firstName+" "+i.lastName)&
                        (j.date==date)&
                        (j.month==month+1)
                        )[0]?.status==="Present"}
                    ></input></td>
                    <td><input  onClick={()=>{
                        if(attList.filter((j)=>
                        (j.name===i.firstName+" "+i.lastName)&
                        (j.date==date)&
                        (j.month==month+1)).length===0){
                    
                            AbsentPost(i)}}}
                    type="checkbox" 
                    checked={attList.filter((j)=>
                        (j.name===i.firstName+" "+i.lastName)&
                        (j.date==date)&
                        (j.month==month+1)
                        )[0]?.status==="Absent"}></input></td> 


                    <td><input  onClick={()=>{
                        if(attList.filter((j)=>
                        (j.name===i.firstName+" "+i.lastName)&
                        (j.date==date)&
                        (j.month==month+1)).length===0){
                    
                            HalfdayPost(i)}}}
                    type="checkbox" 
                    checked={attList.filter((j)=>
                        (j.name===i.firstName+" "+i.lastName)&
                        (j.date==date)&
                        (j.month==month+1)
                        )[0]?.status==="Halfday"}></input></td>        
                </tr>)}
            </tbody>
        </table>
        </div>}</div>
       
        <button style={{right:40,position:"absolute"}} className='btn btn-outline-primary' onClick={()=>setShwmodal(true)}>Submit</button>
{/* ==================modal=================== */}
{shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal12' >
<div>
  <i onClick={()=>setShwmodal(false)} style={{ position:"absolute", top:10, right:10, color:"#45529a"}} className='fa fa-times'></i></div>
<label> ✅ Attendance Successfully..</label>
</div></div>:null}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Empattendence