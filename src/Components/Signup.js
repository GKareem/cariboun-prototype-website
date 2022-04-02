import React, { useRef, useState } from "react";

import "./Signup.css";

import logo from "../Images/logo.png";

export default function Signup() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  async function handleSubmit(e) {

    if (firstNameRef.current.value === "" || lastNameRef.current.value === "" || numberRef.current.value === "" || emailRef.current.value === "" || passwordRef.current.value === "") {
      setError("SignUp Failed");
    } else {
      setError("");
    }
  }
  
  return (
    <div id="signup" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="largeLogoDiv" class="column">
            <img class="img-fluid" src={logo} />
          </div>
          <div id="signupCard" class="card">
            <div class="card-body">
              {error && <div class="alert alert-danger" role="alert">{error}</div>}
              <h2 style={{textAlign: "center"}} id="boldText" class="card-title">Sign Up</h2>
              <form>
                <div id="groups" class="form-group">
                  <label id="text">First Name</label>
                  <input style={{marginTop: "1%"}} type="text" class="form-control" ref={firstNameRef} required/>
                </div>
                <div id="groups" class="form-group">
                  <label id="text">Last Name</label>
                  <input style={{marginTop: "1%"}} type="text" class="form-control" ref={lastNameRef} required/>
                </div>
                <div id="groups" class="form-group">
                  <label id="text">Phone Number</label>
                  <input style={{marginTop: "1%"}} type="number" class="form-control" ref={numberRef} required/>
                </div>
                <div id="groups" class="form-group">
                  <label id="text">Email</label>
                  <input style={{marginTop: "1%"}} type="email" class="form-control" ref={emailRef} required/>
                </div>
                <button id="signupButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popupModal" onClick={() => handleSubmit()}>Sign Up</button>
              </form>
            </div>
          </div>
          <div id="linkDiv">
            Already have an account? <a class="link-primary" onClick={() => { window.location.href = "/cariboun-prototype-website/#/login" }}>Login</a>
          </div>
          <div class="modal fade" id="popupModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Please Check Your Email</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
