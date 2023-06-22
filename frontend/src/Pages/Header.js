import React , {useEffect, useState} from 'react'
import Sidebar1 from './Sidebar1'
import axios from 'axios'
import { baseUrl } from './baseUrl'
function Header(props) {
  const[showside, setShowside]= useState(false)
  const[list, setList]= useState([])
  const[list1, setList1]= useState([])




  return (
    <div>
      
          <div className='homeheader'>
                <div className='homye' style={{ height:"100px"}}>
                {showside===true?
            <Sidebar1/>:null}
            {showside===true?
            <label onClick={()=>setShowside(false)} style={{fontWeight:"bold", fontSize:"20px", zIndex:"1000",marginTop:"-50px", marginLeft:"5px"}}>X</label>:
                    <i class="fa fa-bars fa-2x nav" aria-hidden="true" onClick={()=>setShowside(!showside)}></i>}
                <h2 style={{marginLeft:"2%",color:"rgb(69 82 154)"}}>Main Dashboard</h2></div>
                <div className='homye11' style={{ height:"100px", display:"flex",alignItems:"center", justifyContent:"center"}}>
                <div className='seardiv'>
                    <input onChange={(e)=>props.filterFn(e.target.value)} className='homeinp' placeholder='search...'/>
               
                    <button style={{height:"35px",width:"35px",borderRadius:"50%",color:"white", border:"none",backgroundColor:"rgb(69 82 154)"}}>{localStorage.getItem("username")}</button>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Header