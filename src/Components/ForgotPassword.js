import React, { useRef, useState } from "react";

import "./ForgotPassword.css";

import logo from "../Images/logo.png";

export default function Login() {
  const emailRef = useRef();
  const [error, setError] = useState("");

  async function handleSubmit(e) {

    if (emailRef.current.value === "") {
      setError("Email Does not Exist");
    } else {
      setError("");
    }
  }
  
  return (
    <div id="forgotpassword" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="largeLogoDiv" class="column">
            <img class="img-fluid" src={logo} />
          </div>
          <div id="forgotpasswordCard" class="card">
            <div class="card-body">
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
              <h2 style={{textAlign: "center"}} id="boldText" class="card-title">Forgot Password</h2>
              <form>
                <div id="groups" class="form-group">
                  <label id="text">Email</label>
                  <input style={{marginTop: "1%"}} type="email" class="form-control" ref={emailRef} required/>
                </div>
                <button id="forgotpasswordButton" class="btn btn-primary" onClick={() => handleSubmit()}>Reset Password</button>
              </form>
              <div id="linkDiv">
                <a class="link-primary" onClick={() => { window.location.href = "/cariboun-prototype-website/#/login" }}>Login</a>
              </div>
            </div>
          </div>
          <div id="linkDiv">
             Need an account? <a class="link-primary" onClick={() => { window.location.href = "/cariboun-prototype-website/#/signup" }}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
