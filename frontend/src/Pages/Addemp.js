import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import Sidebar from './Sidebar'
import Sidebar1 from './Sidebar1'
import { baseUrl } from './baseUrl';
import { useNavigate } from 'react-router-dom';


function Addemp() {
    const navigate=useNavigate()
    const[shwmodal, setShwmodal]=useState(false)

    useEffect(()=>{
        const lc = localStorage.getItem("check")
        if(lc!=="okk"){
          navigate('/')
        }
      },[])
const[firstName,setfirstName]=useState("")
const[lastName,setlastName]=useState("")
const[mobileNo,setmobileNo]=useState("")
const[email,setemail]=useState("")
const[dob,setdob]=useState("")
const[employeeType,setemployeeType]=useState("")
const[joiningDate,setjoiningDate]=useState("")
const[designation,setdesignation]=useState("")
const[currAddress,setcurrAddress]=useState("")
const [validation, setValidation]= useState(false)

const postData=()=>{
    if(firstName!==""&lastName!==""&mobileNo!==""&email!==""&dob!==""&employeeType!==""&joiningDate!==""&designation!==""&currAddress!==""){
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
bankName:"",
accNumber:"",
ifsc:"",
empSalary:"",
empId:"",
empSalaryDate:"",
    }
    axios.post(baseUrl+"addemploye", item).then(()=>{setShwmodal(true);
        setfirstName("")
        setlastName("")
        setmobileNo("")
        setemail("")
        setdob("")
        setemployeeType("")
        setjoiningDate("")
        setdesignation("")
        setcurrAddress("")
    
    })
}
else{
    setValidation(true)
}}

const[showside, setShowside]= useState(false)

 
  return (
    <div>
              <div style={{display:"flex", flexDirection:"row"}}>
            <Sidebar/>
        <div className='dashdiv'>
        {showside===true?
            <Sidebar1/>:null}
            {/* ==================Header===================== */}
            <Header/>
   {/* ==================Header---End===================== */}
        <div className='addempdiv' >
        <div className='whitedd' ><br/>
            <div className='addempsubdiv' style={{minHeight:"120px", width:"100%", backgroundColor:"transparent",justifyContent:"space-evenly", alignItems:"center"}}>
            <div className='addinpdiv'>
                <label className='addemlab'>Firstname*</label>
            <input style={{border:firstName===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setfirstName(e.target.value)} className='addeminp' placeholder='Firstname'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Lastname*</label>
            <input style={{border:lastName===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setlastName(e.target.value)} className='addeminp' placeholder='Firstname'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Mobile Number*</label>
            <input style={{border:mobileNo===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setmobileNo(e.target.value)} className='addeminp' placeholder='Mobile Number'/>
            </div>
            </div>
            <div className='addempsubdiv' style={{minHeight:"120px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
            <div className='addinpdiv'>
                <label  className='addemlab'>Email*</label>
            <input style={{border:email===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setemail(e.target.value)} className='addeminp' placeholder='Email'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>DOB*</label>
            <input style={{border:dob===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setdob(e.target.value)} className='addeminp' placeholder='DOB'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'> Employee Type*</label>
                <select style={{border:employeeType===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setemployeeType(e.target.value)} className='addeminp'>
                <option disabled selected>select</option>
                <option>Regular</option>
                <option>Contarct</option>
                <option>Temporary</option>
            </select>
            </div>
            </div>
            <div className='addempsubdiv' style={{minHeight:"120px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>
            <div className='addinpdiv'>
                <label  className='addemlab'>Joining Date*</label>
            <input style={{border:joiningDate===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setjoiningDate(e.target.value)} className='addeminp' placeholder='Email' type="date"/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Designation*</label>
            <input style={{border:designation===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setdesignation(e.target.value)} className='addeminp' placeholder='Designation'/>
            </div>
            <div className='addinpdiv'>
                <label  className='addemlab'>Current Address*</label>
                <textarea style={{border:currAddress===""&validation? "1px solid red":"1px solid grey"}} onChange={(e)=>setcurrAddress(e.target.value)} placeholder='Address..' className='addeminp'></textarea>
            </div>
           
            </div><br/><br/>
            <button onClick={()=>postData()} className='addempbtn'>Submit</button>
          
        </div>


        {/* ====================Modal================ */}
{shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal12' >
<div>
  <i onClick={()=>navigate("/Employedetails")} style={{ position:"absolute", top:10, right:10, color:"#45529a"}} className='fa fa-times'></i></div>
<label> ✅ Employe Add Successfully..</label>
</div></div>:null}
          </div>
          </div>
          </div>
    </div>
  )
}

export default Addemp