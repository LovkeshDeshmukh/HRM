import React,{useState,useEffect} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { baseUrl } from './baseUrl'
import axios from 'axios'

function TraineePro() {
    useEffect(()=>{tgetData()},[])
    useEffect(()=>{sylGetData()},[])
    const [syllabus, setSyllabus]=useState([])
    const[list, setList]=useState([])
    const[syllist, setsyllist]=useState([])
    const[list1, setList1]=useState([])
    const[shwmodal, setShwmodal]=useState(false)
    const[teditId, setteditId]=useState(false)




    const tgetData=()=>{
        axios.get(baseUrl+"addtraines").then((res)=>{setList(res.data.data)})
    }

    const sylputData=()=>{
        axios.put("http://localhost:5001/api/addtraines/"+teditId,{syllabus:syllabus}).then(()=>{tgetData();setShwmodal(false)})
    }

    const sylGetData=()=>{
        axios.get("http://localhost:5001/api/syllabus").then((res)=>setsyllist(res.data.data))
    }

   
  return (
    <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div className="dashdiv" style={{}}>
        <Header />
        <div className='empdetdiv' style={{width:"95%", marginLeft:"2.5%",textAlign:"center" }}>
                <div className='text-nowrap tabledd' style={{overflowY:"auto"}}>
                <table style={{backgroundColor:"white"}} className='table table-bordered'>
                    <thead style={{height:"40px",top:0,  backgroundColor:"#45529a", color:"white"}}>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Sr No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Trainee Name</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Phone No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Email</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Syllabus</th>
                    </thead>
                    <tbody>
                        {list.map((i,index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.tfirstName} {i.tlastName}</td>
                            <td>{i.tmobileNo}</td>
                            <td>{i.temail}</td>
                            
                            <td>
                            <button className='btn btn-outline-success' onClick={()=>{setShwmodal(true)
                           setteditId(i._id)
                           setSyllabus(i.syllabus)
                            }}>
                            
                            <i className='fa fa-eye'></i>
                            </button>&nbsp;
                        </td>
                        </tr>)}
                    </tbody>
                </table></div>
{/* ==================modal=================== */}
{shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal1'>
<br/>

<div style={{height:"300px", width:"300px", display:"flex",justifyContent:"space-evenly", flexDirection:"column", alignItems:"flex-start", position:"relative", marginLeft:"5%"}}>
{syllist[0].syllabus?.map((i)=>
<div style={{left:10}}>
    
<input checked={syllabus?.includes(i)} type="checkbox" onClick={()=>{
    if(syllabus?.includes(i)){
        setSyllabus(syllabus?.filter((j)=>j!==i))
    }else{
        setSyllabus([...syllabus,i])
    }
   
}} />&nbsp;
<label>{i}</label>

</div>
)}
</div>
  <button onClick={()=>setShwmodal(false)} className='addempbtn2'>Cancel</button>
  <button onClick={()=>{sylputData();setShwmodal(false)}} className='addempbtn1'>Submit</button>


</div></div>:null}
            </div>
        </div>
        </div>
    </div>
  )
}

export default TraineePro