import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import axios from 'axios'
import celender from  "../Assets/celender.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from './baseUrl';





function Home(props) {
  useEffect(()=>{
    const lc = localStorage.getItem("check")
    if(lc!=="okk"){
      navigate('/')
    }
  },[])
  const navigate=useNavigate()
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());
  const[clist, setCList]=useState([])
  const [attList, setattList] = useState([]);
  const [userData, setuserData] = useState([]);
  useEffect(()=>{tgetData()},[])
  const[list, setList]=useState([])
  const tgetData=()=>{
    axios.get(baseUrl+"addtraines").then((res)=>setList(res.data.data))
}
useEffect(()=>{empgetData();progetData();cgetData();presentGetData()},[])
const[emplist, setEmpList]=useState([])
const[proList, setProList]=useState([])

const empgetData=()=>{
    axios.get(baseUrl+"addemploye").then((res)=>setEmpList(res.data.data))
}

const progetData=()=>{
  axios.get(baseUrl+"addproject").then((res)=>setProList(res.data.data))
}

const cgetData=()=>{
    axios.get(baseUrl+"addclient").then((res)=>{setCList(res.data.data)})
}

const userGetaData=()=>{
  axios.get(baseUrl+"userlist").then((res)=>userData(res.data.data))
}

const pgetData=()=>{
  axios.get(baseUrl+"addproject").then((res)=>setProList(res.data.data))
}

const presentGetData = () => {
  axios
    .get(baseUrl+"attendence")
    .then((res) => setattList(res.data.data));
};
  return (
    <div>
        <div style={{display:"flex", flexDirection:"row"}}>
            <Sidebar/>
        <div className='dashdiv11'>
          <Header/>
        <div className='home1st' >
            <div className='earning' onClick={()=>navigate("/Employedetails")}>
                <div style={{height:"60px",width:"60px",borderRadius:"40px",backgroundColor:"whitesmoke",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <i style={{fontSize:"25px", color:"rgb(69 82 154)"}} class="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className='amount'>
<label style={{color:"grey"}}>TOTAL EMPLOYEES</label><br/>
<label style={{fontSize:"23px"}}>{emplist.length}</label>
            </div>
            </div>
            <div className='earning' onClick={()=>navigate("/Trainesdetails")}>
            <div style={{height:"60px",width:"60px",borderRadius:"40px",backgroundColor:"whitesmoke",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i style={{fontSize:"25px", color:"rgb(69 82 154)"}} class="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className='amount'>
<label style={{color:"grey"}}>Total Trainees</label><br/>
<label style={{fontSize:"23px"}}>{list.length}</label>
            </div>
            </div>
            <div className='earning' onClick={()=>navigate("/Projects")}>
                <div style={{height:"60px",width:"60px",borderRadius:"40px",backgroundColor:"whitesmoke",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <i style={{fontSize:"25px", color:"rgb(69 82 154)"}} class="fa fa-puzzle-piece" aria-hidden="true"></i>
            </div>
            <div className='amount'>
<label style={{color:"grey"}}>Total Project</label><br/>
<label style={{fontSize:"23px"}}>{proList.length}</label>
            </div>
            </div>
        </div>
        <div className='home1st'>
        <div className='earning' onClick={()=>navigate("/Clientdetails")}>
                <div style={{height:"60px",width:"60px",borderRadius:"40px",backgroundColor:"whitesmoke",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <i style={{fontSize:"25px", color:"rgb(69 82 154)"}} class="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className='amount'>
<label style={{color:"grey"}}>Total Clients</label><br/>
<label style={{fontSize:"23px"}}>{clist.length}</label>
            </div>
            </div>
            <div className='earning'>
            <div style={{height:"60px",width:"60px",borderRadius:"40px",backgroundColor:"whitesmoke",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i style={{fontSize:"25px", color:"rgb(69 82 154)"}} class="fa fa-line-chart" aria-hidden="true"></i>
            </div>
            <div className='amount'>
<label style={{color:"grey"}}>Leave Management</label>
<br/>
<label style={{fontSize:"23px"}}>5</label>
            </div>
            </div>
            <div className='earning' onClick={()=>navigate("/Eattdetails")}>
            <div style={{height:"60px",width:"60px",borderRadius:"40px",backgroundColor:"whitesmoke",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <i style={{fontSize:"25px", color:"rgb(69 82 154)"}} class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className='amount'>
<label style={{color:"grey"}}>Attendence Details</label>
<br/>
<label style={{fontSize:"23px"}}>{attList.length}</label>
            </div>
            </div>
        </div>
        {/* <div className='calenddd'
        style={{height:"280px", backgroundColor:"transparent", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"10px"}}
      align='center'
      direction='column'
      border='none'
      w='100%'
      maxW='max-content'
      p='20px 15px'
      h='max-content'
      {...rest}>
      <Calendar style={{backgroundColor:"transparent", border:"none"}}
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={"month"}
        border="none"
        tileContent={<label  color='brand.500'></label>}
    
      />
      
    </div>        */}
    </div>
    </div>
    </div>
  )
}

export default Home