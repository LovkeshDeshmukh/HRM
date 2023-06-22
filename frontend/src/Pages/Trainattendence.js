import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import { baseUrl } from './baseUrl';
import Header from './Header'

import { useNavigate } from 'react-router-dom';

function Empattendence() {
    const navigate=useNavigate()

    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      },[])
    useEffect(()=>{traineegetData();presentGetData()},[])
    const[trainesList, setTrainesList]=useState([])
    const current=  new Date
    const date=  current.getDate()
    const month=  current.getMonth()
    const year=  current.getFullYear()
    const[list,setList]=useState([])
    const[list1,setList1]=useState([])

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


    const traineegetData=()=>{
        axios.get(baseUrl+"addtraines").then((res)=>{setList(res.data.data);setList1(res.data.data)})
    }

    const TrainePresentPost=(x)=>{
        const item={
            name:x.tfirstName+" "+x.tlastName,
            number:x.tmobileNo,
            date:date,
            month:month+1,
            year:year,
            fullMonth:monthList[month],
            status:"Present",
        }
        axios.post(baseUrl+"traineattendence", item).then(()=>presentGetData())
    }
    const AbsentPost=(x)=>{
        const item={
            name:x.tfirstName+" "+x.tlastName,
            number:x.tmobileNo,
            date:date,
            month:month+1,
            year:year,
            fullMonth:monthList[month],
            status:"Absent",
        }
        axios.post(baseUrl+"traineattendence", item).then(()=>presentGetData())
    }


    const presentGetData=()=>{
        axios.get(baseUrl+"traineattendence").then((res)=>list(res.data.data))
    }

    const filterFn =(x)=>{
        const list2 = list1.filter((i)=>i.tfirstName.includes(x)||i.tmobileNo.includes(x)||i.tlastName.includes(x))
        setList(list2)
    }
  return (
    <div>
         <div style={{display:"flex", flexDirection:"row"}}>
    <Sidebar/>
    <div className='dashdiv'>
    <Header filterFn={filterFn}/>
    <button className='dtbtn' style={{marginLeft:"2.5%"}}>{date}/{month+1}/{year}</button>
    <div className='empdetdiv' style={{width:"95%", marginLeft:"2.5%"}}>
        <div className='text-nowrap' >
        <table style={{backgroundColor:"white",textAlign:"center"}} className='table table-bordered'>
            <thead style={{height:"40px", backgroundColor:"#45529a", color:"white"}}>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Sr No.</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Trainee Name</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Number</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Present</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Absent</th>
            </thead>
            <tbody>
                {list.map((i,index)=>
                <tr>
                    <td>{index+1}</td>
                    <td>{i.tfirstName} {i.tlastName}</td>
                    <td>{i.tmobileNo}</td>
                    <td><input 
                    onClick={()=>{
                        if(list.filter((j)=>
                        (j.name===i.tfirstName+" "+i.tlastName)&
                        (j.date==date)&
                        (j.month==month+1)).length===0){
                    
                    TrainePresentPost(i)}}}
                    type="checkbox" 
                    checked={list.filter((j)=>
                        (j.name===i.tfirstName+" "+i.tlastName)&
                        (j.date==date)&
                        (j.month==month+1)
                        )[0]?.status==="Present"}
                    ></input></td>
                    <td><input  onClick={()=>{
                        if(list.filter((j)=>
                        (j.name===i.tfirstName+" "+i.tlastName)&
                        (j.date==date)&
                        (j.month==month+1)).length===0){
                    
                            AbsentPost(i)}}}
                    type="checkbox" 
                    checked={list.filter((j)=>
                        (j.name===i.tfirstName+" "+i.tlastName)&
                        (j.date==date)&
                        (j.month==month+1)
                        )[0]?.status==="Absent"}></input></td> 


                           
                </tr>)}
            </tbody>
        </table></div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Empattendence