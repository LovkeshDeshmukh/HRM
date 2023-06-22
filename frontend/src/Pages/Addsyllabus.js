import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios'

function Addsyllabus() {
    const [syllabus, setSyllabus]=useState([])
    const [name, setName]=useState("")
    const postData=()=>{
        const item={
            syllabus:syllabus
        }
        axios.post("http://localhost:5001/api/syllabus", item)
    }
  return (
    <div>
             <div style={{ display: "flex", flexDirection: "row",}}>
        <Sidebar />
        <div className="dashdiv">
        <Header />
        <div style={{height:"200px", width:"35%",  marginLeft:"1%" }}><br/>
            <label>Add Syllabus</label><br/><br/>
            <input  onChange={(e)=>setName(e.target.value)} style={{height:"45px", width:"80%"}}></input>
            <button className='btn_syll1' onClick={()=>setSyllabus([...syllabus,name])}>Add</button>
        </div>
        <div style={{minHeight:"900px", width:"80%", display:"flex", backgroundColor:"red",overflowY:"auto"}}>
        <div style={{display:"flex", flexDirection:"column", width:"80%",}}>
            {syllabus.map((i)=>
            <div style={{display:"flex", width:"100%", height:"50px",alignItems:"center", position:"relative", backgroundColor:"white",marginLeft:"2%", marginTop:"5px"}}>
            <h5>{i}</h5>
            <i style={{position:"absolute",right:10}} className='fa fa-times'></i>
            </div>
            )}
        <button className='btn_syll' onClick={()=>postData()}>Save</button>

        </div>
        <div ></div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Addsyllabus