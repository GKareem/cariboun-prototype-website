import React from "react";

import "./Environment.css";

import graph from "../Images/Env/ClimateImpactGraph.png";

export default function Environment() {
  return (
    <div id="env" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <h3 id="boldText" className="ENVTitle">Environment</h3>
          <button id="newENVButton" type="button" class="btn btn-lg" onClick={() => { window.location.href = "/cariboun-prototype-website/#/environment/create" }}><h1 class="bi bi-file-earmark-plus-fill" /><h6>New Assessment</h6></button>
        </div>
        <div class="column">
          <div id="envSummary" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title">Climate Impact</h5>
              <div id="dateRangeDiv">
                <div class="row">
                  <label id="inputLabel" class="col-auto col-form-label">From:</label>
                  <input style={{marginRight: "2%"}} id="inputField" type="month" class="col form-control" />
                  
                  <label id="inputLabel" class="col-auto col-form-label">To:</label>
                  <input id="inputField" type="month" class="col form-control" />
                </div>
              </div>
              <div id="bottomDiv">
                <div id="climateInfoDiv" class="col">
                  <div id="infoDiv" class="col">
                    <h4 id="text" style={{fontWeight: "700"}}>CO<sub>2</sub></h4>
                    <h6 id="text">Footprint<h6>17.4 <sub>ton CO<sub>2</sub>/yr</sub></h6></h6>
                  </div>
                  <div id="infoDiv" class="col">
                    <h4 class="bi bi-trash3-fill" />
                    <h6 id="text">Footprint<h6>870 <sub>kg/yr</sub></h6></h6>
                  </div>
                </div>
                <div id="graphDiv" class="row"> 
                  <img class="img-fluid" src={graph} />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
