import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { baseUrl } from './baseUrl';
import Header from './Header'

import { useNavigate } from "react-router-dom";


function Empbankdet() {
  const navigate=useNavigate()
  useEffect(()=>{
    const lc = localStorage.getItem("check")
    if(lc!=="okk"){
      navigate('/')
    }
  },[])
  const [shwmodal, setShwmodal] = useState(false);
  useEffect(() => {
    empgetData();
  }, []);
  const [empList, setEmpList] = useState([]);
  const [empList1, setEmpList1] = useState([]);
  const [name, setName] = useState("");

  const empgetData = () => {
    axios
      .get(baseUrl+"addemploye")
      .then((res) => {setEmpList(res.data.data);setEmpList1(res.data.data)});
  };

  const filterFn =(x)=>{
    const list5 = empList1.filter((i)=>i.firstName.includes(x)||i.lastName.includes(x)||i.mobileNo.includes(x))
    setEmpList(list5)
}
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <div className="dashdiv">
        <Header filterFn={filterFn}/>
          <div
            className="text-nowrap"
            style={{ width: "95%", marginLeft: "2.5%", overflowX: "auto", }}
          >
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
                {empList.map((i, n) => (
                  <tr>
                    <td>{n + 1}</td>
                    <td>
                      {i.firstName} {i.lastName}
                    </td>
                    <td>{i.mobileNo}</td>
                    <td>
                      <i
                        onClick={() => {
                          setShwmodal(true);
                          setName(i);
                        }}
                        style={{ color: "#45529a" }}
                        className="fa fa-eye"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ====================MODAL================ */}
          {shwmodal === true ? (
            <div
              className="modalshdw"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="modal1">
                <div className="mdlresp">
         
                  <div
                    className="mdlsubdiv1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                           <i
                        style={{
                          
                          fontSize: "20px",
                          color: "grey",
                          marginLeft: "400px",
                          marginTop:"5px"
                        }}
                        onClick={() => setShwmodal(false)}
                        className="fa fa-times"
                      />
            
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "200px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                        
                      <div
                        className="proimg"
                        style={{
                          height: "100px",
                          width: "100px",
                          backgroundColor: "red",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <br />
                      <h6>
                        {" "}
                        {name?.firstName} {name?.lastName}
                      </h6>
                      <label style={{ color: "grey", fontSize: "13px" }}>
                        {" "}
                        {name?.empDesignation}
                      </label>
                      <hr
                        style={{
                          height: 1,
                          width: "80%",
                          backgroundColor: "grey",
                        }}
                      />
                    </div>
                    <h6>Basic Info</h6>
                    <br />
                    <div
                      style={{
                        height: "120px",
                        width: "90%",
                        justifyContent: "space-evenly",
                        alignItems: "start",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <i
                          style={{ color: "grey" }}
                          class="fa fa-envelope"
                          aria-hidden="true"
                        ></i>
                        &nbsp;&nbsp;
                        <label style={{ fontSize: "14px" }}>
                          {name?.email}
                        </label>
                      </div>
                      <div style={{ display: "flex" }}>
                        <i
                          style={{ color: "grey" }}
                          class="fa fa-birthday-cake"
                          aria-hidden="true"
                        ></i>
                        &nbsp;&nbsp;
                        <label style={{ fontSize: "14px" }}>{name?.dob}</label>
                      </div>
                      <div style={{ display: "flex" }}>
                        <i
                          style={{ color: "grey", fontSize: "20px" }}
                          class="fa fa-home"
                          aria-hidden="true"
                        ></i>
                        &nbsp;&nbsp;
                        <label style={{ fontSize: "14px" }}>
                          {name?.currAddress}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mdlsubdiv2"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginLeft: "1%",
                    }}
                  >
                    <div className="mdlsubdiv3">
                      <i
                        style={{
                          float: "right",
                          fontSize: "20px",
                          color: "grey",
                          margin: "10px",
                        }}
                        onClick={() => setShwmodal(false)}
                        className="fa fa-times"
                      />
                      <br />
                      <br />
                      <h6 style={{ margin: "10px" }}>Bank Details</h6>
                      <div style={{ display: "flex", marginTop: "20px" }}>
                        <div
                          style={{
                            height: "350px",
                            marginLeft: "4%",
                            width: "30%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            color: "grey",
                            fontSize: 14,
                          }}
                        >
                          <label>Employe Name :</label>
                          <label>Mobile No. :</label>
                          <label>Employe Id :</label>
                          <label>Salary :</label>
                          <label>Bank Name :</label>
                          <label>Account No. :</label>
                          <label>IFSC Code :</label>
                        </div>
                        <div
                          style={{
                            height: "350px",
                            marginLeft: "2%",
                            width: "30%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            fontSize: 14,
                          }}
                        >
                          <label>
                            {name?.firstName} {name?.lastName}
                          </label>
                          <label>{name?.mobileNo}</label>
                          <label>{name?.empId}</label>
                          <label>{name?.empSalary}</label>
                          <label>{name?.bankName}</label>
                          <label>{name?.accNumber}</label>
                          <label>{name?.ifsc}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Empbankdet;
