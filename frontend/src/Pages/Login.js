import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./baseUrl";

function App() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validator, setValidator] = useState(false);


  const logincheck = () => {
    if(email!==""&password!==""){
    const item = {
      email: email,
      password: password,
    };
    axios.post(baseUrl + "userlist/login", item).then((res) => {
      if (res.data.msg === "ok") {
        localStorage.setItem("check","okk");
        const fn =res.data.data.firstname.slice(0,1)+res.data.data.lastname.slice(0,1)
        localStorage.setItem("username",fn);
        navigate("/Home");
      } else {
        alert(res.data.msg);
      }
    });
  }else {
    setValidator(true)
  }};
  return (
    <>
      <div className="logindiv">
        <div className="sublogindiv">
          <div className="sublogindiv2">
            <label
              style={{
                fontSize: "35px",
                fontWeight: 600,
                color: "rgb(69 82 154)",
              }}
            >
              Sign In
            </label>
            <label
              style={{ color: "lightgray", fontWeight: 250, fontSize: "15px" }}
            >
              Enter your email and password to sign in!
            </label>
            <br />
            <br />
            <button className="lgnbt">
              <img
                style={{ height: "20px", width: "20px" }}
                src="https://img.icons8.com/color/48/null/google-logo.png"
              />
              &nbsp;Sign in with Google
            </button>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="lined"></div>&nbsp;&nbsp;&nbsp;&nbsp;
              <label style={{ color: "grey" }}>or</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="lined"></div>
            </div>
            <br />

            <label className="lglab1">Email*</label>
            <input
             style={{border: validator===true? "1px solid red":"1px solid lightgrey"}}
              onChange={(e) => setEmail(e.target.value)}
              className="lginp"
              placeholder="mail@sammple.com"
            />
            <br />
            <label className="lglab1">Password*</label>
            <input
             style={{border: validator===true? "1px solid red":"1px solid lightgrey"}}
              onChange={(e) => setPassword(e.target.value)}
              className="lginp"
              placeholder="Min. 8 characters"
            />
            <br />
            <div
              style={{
                width: "90%",
                height: "40px",
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                style={{ height: "15px", width: "15px" }}
                type="checkbox"
              ></input>
              <label
                style={{
                  color: "grey",
                  fontSize: "14px",
                  fontWeight: 300,
                  marginLeft: "2%",
                }}
              >
                Keep me logged in
              </label>
              <label
                className="labfo"
                style={{
                  color: "rgb(69 82 154)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Forgot Password?
              </label>
            </div>
            <button className="lgsg" onClick={() => logincheck()}>
              Sign In
            </button>
            <br />
            <label style={{ fontSize: "14px", fontWeight: 400 }}>
              Not registered yet?&nbsp;
              <span
                onClick={() => navigate("/Signup")}
                style={{ color: "rgb(69 82 154)" }}
              >
                Create an Account
              </span>
            </label>
          </div>
        </div>
        <div className="sublogindiv1"></div>
      </div>
    </>
  );
}

export default App;
