import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { baseUrl } from './baseUrl';
import { useNavigate } from 'react-router-dom';


function Addempbank() {
  const navigate=useNavigate()
  useEffect(()=>{
    const lc = localStorage.getItem("check")
    if(lc!=="okk"){
      navigate('/')
    }
  },[])
    useEffect(()=>{empgetData()},[])
    const[shwmodal, setShwmodal]=useState(false)
    const[emplist, setEmpList]=useState([])
    const[emplist1, setEmpList1]=useState([])
    const[bankName,setbankName]=useState("")
    const[accNumber,setaccNumber]=useState("")
    const[ifsc,setifsc]=useState("")
    const[empSalary,setempSalary]=useState("")
    const[empId,setempId]=useState("")
    const[empSalaryDate,setempSalaryDate]=useState("")
    const[empEditId,setempEditId]=useState("")


    const empgetData=()=>{
        axios.get(baseUrl+"addemploye").then((res)=>{setEmpList(res.data.data);setEmpList1(res.data.data)})
    }



    const empputData=()=>{
        axios.put(baseUrl+"addemploye/"+empEditId, {
            bankName:bankName,
            accNumber:accNumber,
            ifsc:ifsc,
            empSalary:empSalary,
            empId:empId,
            empSalaryDate:empSalaryDate,
        }
        
        ).then(()=>{empgetData();setShwmodal(false)})
   
        
     }


     const filterFn =(x)=>{
      const list5 = emplist1.filter((i)=>i.firstName.includes(x)||i.lastName.includes(x)||i.mobileNo.includes(x))
      setEmpList(list5)
  }


  return (
    <div>
    <div style={{display:"flex", flexDirection:"row"}}>
        <Sidebar />
    <div className='dashdiv'>
    <Header filterFn={filterFn}/>

    <div className="text-nowrap" style={{width:"95%",marginLeft:"2.5%",overflowX:"auto"}}>
            <table
              style={{ backgroundColor: "white" }}
              className="table table-bordered"
            >
              <thead
                style={{
                  height: "40px",
                  backgroundColor: "#45529a",
                  color: "white",
                }}
              >
                <th
                  style={{
                    borderRight: "1px solid lightgrey",
                    textAlign: "center",
                  }}
                >
                  Sr No.
                </th>
                <th
                  style={{
                    borderRight: "1px solid lightgrey",
                    textAlign: "center",
                  }}
                >
                  Employe Name
                </th>
                <th
                  style={{
                    borderRight: "1px solid lightgrey",
                    textAlign: "center",
                  }}
                >
                  Mobile No.
                </th>
                <th
                  style={{
                    borderRight: "1px solid lightgrey",
                    textAlign: "center",
                  }}
                >
                  View Bank Details
                </th>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {emplist.map((i, n) => (
                  <tr>
                    <td>{n + 1}</td>
                    <td>{i.firstName} {i.lastName}</td>
                    <td>{i.mobileNo}</td>
                    <td>
                     <button onClick={()=>{setShwmodal(true);setempEditId(i._id)
                    setbankName(i.bankName)
                    setaccNumber(i.accNumber)
                    setifsc(i.ifsc)
                    setempSalary(i.empSalary)
                    setempId(i.empId)
                    setempSalaryDate(i.empSalaryDate)
                    }} className='btn btn-outline-primary'>Add</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ========================Modal================= */}
          {shwmodal===true?
<div className='modalshdw' style={{position:'fixed', top:0, right:0, backgroundColor:'rgba(0,0,0,0.3)',  height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
<div className='modal1'>
<br/>
<div className='addempsubdiv' style={{minHeight:"120px", width:"100%", backgroundColor:"transparent",justifyContent:"space-evenly", alignItems:"center"}}>
<div className='addinpdiv'>
<label  className='addemlab'>Emp. Bank Name*</label>
<input value={bankName} onChange={(e)=>setbankName(e.target.value)}  className='addeminp' placeholder='Bank Name'/>
</div>
<div className='addinpdiv'>
    <label  className='addemlab'>Emp. Account Number*</label>
<input value={accNumber} onChange={(e)=>setaccNumber(e.target.value)} className='addeminp' placeholder='Acc. Number'/>
</div>
<div className='addinpdiv'>
    <label  className='addemlab'>Emp. IFSC code*</label>
<input value={ifsc} onChange={(e)=>setifsc(e.target.value)} className='addeminp' placeholder='IFSC code'/>
</div>
</div>
<div className='addempsubdiv' style={{minHeight:"120px", width:"100%",justifyContent:"space-evenly", alignItems:"center", marginTop:"30px"}}>

<div className='addinpdiv'>
    <label  className='addemlab'>Employee Salary*</label>
<input value={empSalary} onChange={(e)=>setempSalary(e.target.value)} className='addeminp' placeholder='Employee Salary'/>
</div>
<div className='addinpdiv'>
    <label  className='addemlab'>Employe Id*</label>
<input value={empId} onChange={(e)=>setempId(e.target.value)}  className='addeminp' placeholder='Employe Id'/>
</div>
<div className='addinpdiv' style={{marginLeft:"2.7%"}}>
    <label  className='addemlab'>Salary Date*</label>
<input value={empSalaryDate} onChange={(e)=>setempSalaryDate(e.target.value)} type="date" className='addeminp' placeholder='Date'/>
</div>
</div>
<div className='addempsubdiv' style={{minHeight:"120px", width:"100%", alignItems:"center", marginTop:"30px"}}>



</div>
<button className='addempbtn' onClick={()=>{empputData()}}>Submit</button>


</div></div>:null}
      </div>
      </div>
      </div>
  )
}

export default Addempbank