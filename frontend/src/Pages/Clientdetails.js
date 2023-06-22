import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { baseUrl } from './baseUrl';
import { useNavigate } from 'react-router-dom';


function Clientdetails() {
    const navigate=useNavigate()

    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      },[])
    useEffect(()=>{cgetData()},[])
    const[shwmodal, setShwmodal]=useState(false)
    const [clientData, setClientData]=useState({})
    const[clist, setCList]=useState([])
    const[clist1, setCList1]=useState([])



    const cgetData=()=>{
        axios.get(baseUrl+"addclient").then((res)=>{setCList(res.data.data);setCList1(res.data.data)})
    }

    const cPutData=()=>{
        axios.put(baseUrl+"addclient/"+clientData._id,clientData).then(()=>cgetData())
    }

    const cltdlt=(x)=>{
        axios.delete(baseUrl+"addclient/"+x).then(()=>cgetData())
    }

    const filterFn =(x)=>{
        const list4 = clist1.filter((i)=>i.cName.includes(x)||i.cNumber.includes(x)||i.cEmail.includes(x)||i.cMilestone.includes(x)||i.cProGiveDate.includes(x)||i.cProTakeDate.includes(x)||i.cProMoney.includes(x)||i.cProTitle.includes(x)||i.cPurpose.includes(x))
        setCList(list4)
    }



  return (
    <div>
            <div style={{display:"flex", flexDirection:"row"}}>
            <Sidebar/>
        <div className='dashdiv'>
        <Header filterFn={filterFn}/>
            <div className='empdetdiv' style={{width:"95%", marginLeft:"2.5%"}}>
            <div className='text-nowrap tabledd' style={{overflowY:"auto",}}>
                <table style={{backgroundColor:"white"}} className='table table-bordered'>
                    <thead style={{height:"40px",top:0,  backgroundColor:"#45529a", color:"white"}}>                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Sr No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Client Name</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Client No.</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Client Email</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Project Title</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Project Purpose</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Pro. Giving Date</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Pro.Last Date</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Pro. Fund</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Milestone</th>
                        <th style={{borderRight:"1px solid lightgrey", textAlign:"center"}} >Action</th>
                    </thead>
                    <tbody style={{alignItmes:"center"}}>
                        {clist.map((i,index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.cName}</td>
                            <td>{i.cNumber}</td>
                            <td>{i.cEmail}</td>
                            <td>{i.cProTitle}</td>
                            <td>{i.cPurpose}</td>
                            <td>{i.cProGiveDate}</td>
                            <td>{i.cProTakeDate}</td>
                            <td>{i.cProMoney}</td>
                            <td>{i.cMilestone}</td>
                            <td><button onClick={()=>cltdlt(i._id)} className='btn btn-outline-danger'>Delete</button>&nbsp;
                            <button className='btn btn-outline-success' 
                            onClick={()=>{
                                setClientData(i)
                                setShwmodal(true)}}
                            >Edit
                            </button></td>
                        </tr>)}
                    </tbody>
                </table></div>
{/* ==================modal=================== */}
{shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal1'>
<br/>
<div className='addempsubdiv' style={{minHeight:"120px", width:"100%", backgroundColor:"transparent",justifyContent:"space-evenly", alignItems:"center"}}>
  <div className='addinpdiv'>
      <label className='addemlab'>Client Name*</label>
  <input value={clientData?.cName} onChange={(e)=>setClientData({...clientData, cName:e.target.value})} className='addeminp' placeholder='Client Name'/>
  </div>
  <div className='addinpdiv'>
  <label  className='addemlab'>Client Number*</label>
  <input value={clientData?.cNumber} onChange={(e)=>setClientData({...clientData, cNumber:e.target.value})}  className='addeminp' placeholder='Client No.'/>
  </div>
  <div className='addinpdiv'>
  <label  className='addemlab'>Client Email*</label>
  <input value={clientData?.cEmail} onChange={(e)=>setClientData({...clientData, cEmail:e.target.value})} className='addeminp' placeholder='abc@gmail.com'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Giving Date*</label>
  <input value={clientData?.cProGiveDate} onChange={(e)=>setClientData({...clientData, cProGiveDate:e.target.value})} type="date"  className='addeminp' placeholder='Start Date'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Last Date*</label>
  <input value={clientData?.cProTakeDate} onChange={(e)=>setClientData({...clientData, cProTakeDate:e.target.value})} type="date"  className='addeminp' placeholder='End Date'/>
  </div>
  <div className='addinpdiv'>
      <label  className='addemlab'>Project Title*</label>
  <input value={clientData?.cProTitle} onChange={(e)=>setClientData({...clientData, cProTitle:e.target.value})} className='addeminp' placeholder='Title'/>
  </div>
  </div>
  <div className='addempsubdiv' style={{minHeight:"120px", width:"100%", alignItems:"center", marginTop:"30px"}}>

  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Project Purpose*</label>
  <input value={clientData?.cPurpose} onChange={(e)=>setClientData({...clientData, cPurpose:e.target.value})} className='addeminp' placeholder='Ecom, Metromony Etc...'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Project Fund*</label>
  <input value={clientData?.cProMoney} onChange={(e)=>setClientData({...clientData, cProMoney:e.target.value})} className='addeminp' placeholder='1Lakh'/>
  </div>
  <div className='addinpdiv' style={{marginLeft:"2.7%"}}>
      <label  className='addemlab'>Milestone*</label>
  <input value={clientData?.cMilestone} onChange={(e)=>setClientData({...clientData, cMilestone:e.target.value})} className='addeminp' placeholder='Milestone'/>
  </div>
 
  </div>
  <button  style={{float:"right", marginRight:"18px"}} onClick={()=>{cPutData();setShwmodal(false)}} className='addempbtn1'>Submit</button>
  <button style={{float:"right"}} onClick={()=>setShwmodal(false)} className='addempbtn2'>Cancel</button>


</div></div>:null}
            </div>
          </div>
          </div>

    </div>
  )
}

export default Clientdetails