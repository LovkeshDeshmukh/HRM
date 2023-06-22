import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'
import Header from './Header'

import { baseUrl } from './baseUrl';


function Projects() {
    const navigate=useNavigate()

    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      },[])
    useEffect(()=>{pgetData();empgetData()},[])
    const[list, setList]=useState([])
    const[member, setMember]=useState([])
    const[list1, setList1]=useState([])
    const[peditId, setpEditid]=useState([])
    const[shwmodal, setShwmodal]=useState(false)
    const[shwmodalll, setShwmodalll]=useState(false)

    const[ptitleName,setptitleName]=useState("")
    const[pcategory,setpcategory]=useState("")
    const[pfund,setpfund]=useState("")
    const[pstartDate,setpstartDate]=useState("")
    const[pendDate,setpendDate]=useState("")
    const[pmilestone,setpmilestone]=useState("")
    const[pclientName,setpclientName]=useState("")
    const[empList,setEmpList]=useState("")

    


const pgetData=()=>{
    axios.get(baseUrl+"addproject").then((res)=>{setList(res.data.data);setList1(res.data.data)})
}
const pputData=()=>{
    const item={
        ptitleName:ptitleName,
        pcategory:pcategory,
        pfund:pfund,
        pstartDate:pstartDate,
        pendDate:pendDate,
        pmilestone:pmilestone,
        pclientName:pclientName,
    }
    axios.put(baseUrl+"addproject/"+peditId, item).then((res)=>pgetData(res.data.data))
}
const addmembers=()=>{
  
    axios.put(baseUrl+"addproject/"+peditId, {member,member}).then((res)=>{
        pgetData(res.data.data)
        setShwmodalll(false)
    })

}


const pjtdlt=(x)=>{
    axios.delete(baseUrl+"addproject/"+x).then(()=>pgetData())
}

const filterFn =(x)=>{
    const list4 = list1.filter((i)=>i.ptitleName.includes(x)||i.pclientName.includes(x)||i.pstartDate.includes(x)||i.pfund.includes(x)||i.pendDate.includes(x)||i.pmilestone.includes(x)||i.pclientName.includes(x))
    setList(list4)
}

const empgetData=()=>{
    axios.get(baseUrl+"addemploye").then((res)=>{setEmpList(res.data.data)})
}

  return (
    <div>
    <div style={{display:"flex", flexDirection:"row", backgroundColor:"red"}}>
    <Sidebar/>
<div className='dashdiv'>
<Header filterFn={filterFn}/>
    <div className='empdetdiv' style={{width:"95%", marginLeft:"2.5%"}}>
    <div className='text-nowrap tabledd' style={{overflowY:"auto", textAlign:"center", justifyContent:"center"}}>
                <table style={{backgroundColor:"white"}} className='table table-bordered'>
                    <thead style={{height:"40px",top:0,  backgroundColor:"#45529a", color:"white"}}>                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Sr No.</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Title Name</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Client Name</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Fund</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Project Start Date</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Project End Date</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Milestone</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Category</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Action</th>
                <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}}>Assign</th>
            </thead>
            <tbody>
                {list.map((i,index)=>
                <tr>
                    <td>{index+1}</td>
                    <td>{i.ptitleName}</td>
                    <td>{i.pclientName}</td>
                    <td>{i.pfund}</td>
                    <td>{i.pstartDate}</td>
                    <td>{i.pendDate}</td>
                    <td>{i.pmilestone}</td>
                    <td>{i.pcategory}</td>
                    <td>
                    <button className='btn btn-outline-success' onClick={()=>{setShwmodal(true)
                    setptitleName(i.ptitleName)
                    setpcategory(i.pcategory)
                    setpfund(i.pfund)
                    setpstartDate(i.pstartDate)
                    setpendDate(i.pendDate)
                    setpmilestone(i.pmilestone)
                    setpclientName(i.pclientName)
                    setpEditid(i._id)
                    }}><i className='fa fa-pencil'></i>
                    </button>&nbsp;
                        <button onClick={()=>pjtdlt(i._id)} className='btn btn-outline-danger'><i className='fa fa-trash'></i></button>
                   </td>
                    <td><button className='btn btn-outline-primary'>
                        <i onClick={()=>{
                         setpEditid(i._id)
                        setMember(i.member)
                        setShwmodalll(true)
                        }} className='fa fa-users'></i></button></td>
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
<label className='addemlab'>Title Name*</label>
<input value={ptitleName} onChange={(e)=>setptitleName(e.target.value)} className='addeminp' placeholder='Title Name'/>
</div>
<div className='addinpdiv'>
<label  className='addemlab'>Category*</label>
<input value={setpcategory} onChange={(e)=>setpcategory(e.target.value)} className='addeminp' placeholder='Category'/>
</div>
<div className='addinpdiv'>
<label  className='addemlab'>Fund*</label>
<input value={pfund} onChange={(e)=>setpfund(e.target.value)} className='addeminp' placeholder='Fund'/>
</div>
</div>
<div className='addempsubdiv' style={{minHeight:"100px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
<div className='addinpdiv'>
<label  className='addemlab'>Project Start Date*</label>
<input value={pstartDate} onChange={(e)=>setpstartDate(e.target.value)} className='addeminp' placeholder='Start Date'/>
</div>
<div className='addinpdiv'>
<label  className='addemlab'>Project End Date*</label>
<input value={pendDate} onChange={(e)=>setpendDate(e.target.value)} className='addeminp' placeholder='End Date'/>
</div>
<div className='addinpdiv'>
<label  className='addemlab'>Milestone*</label>
<input value={pmilestone} onChange={(e)=>setpmilestone(e.target.value)} className='addeminp' placeholder='Milestone'/>
</div>
</div>
<div className='addempsubdiv' style={{minHeight:"100px", width:"100%", alignItems:"center", marginTop:"30px"}}>

<div className='addinpdiv' style={{marginLeft:"2.7%"}}>
<label  className='addemlab'>Client Name*</label>
<input value={pclientName} onChange={(e)=>setpclientName(e.target.value)} className='addeminp' placeholder='Client Name'/>
</div>

</div><br/><br/>
<button onClick={()=>setShwmodal(false)} className='addempbtn2'>Cancel</button>
<button onClick={()=>{pputData();setShwmodal(false)}} className='addempbtn1'>Submit</button>


</div></div>:null}

{/* =======================Modal2===================== */}
{shwmodalll===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal3' style={{display:"flex", alignItmes:"center",flexDirection:"column"}}>
    <br/>
    <div style={{marginLeft:"30px"}}>
        <div style={{width:"98%", display:"flex", justifyContent:"end"}}>
        <i className='fa fa-times' onClick={()=>setShwmodalll(false)}></i>
        </div>
<h3 >Project Assign Mambers</h3>
<br/><br/>
<div style={{minHeight:"100px", width:"100%", display:"flex",flexWrap:"wrap", justifyContent:"space-between"}}>
{empList.map((i)=>
<div className='assign'>
<input type="checkbox" checked={member.includes(i._id)} onClick={()=>{
    if(member.includes(i._id)){
setMember(member.filter((j)=>j!==i._id))
    } else {
        setMember([...member,i._id])
    }
}}></input>&nbsp;
<label>{i.firstName} {i.lastName}</label>
</div>)}
<br/><br/>
<button className='btn btn-outline-info' onClick={()=>addmembers()}>Save</button>
</div>
</div>


</div></div>:null}
    </div>
  </div>
  </div>

</div>
  )
}

export default Projects