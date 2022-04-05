import React from "react";

import "./Dashboard.css"

import ESG_1 from "../Images/Dashboard/ESGMetrics_1.png";
import ESG_2 from "../Images/Dashboard/ESGMetrics_2.png";
import ESG_3 from "../Images/Dashboard/ESGMetrics_3.png";

import graph from "../Images/Dashboard/ClimateImpactGraph.png";

import SDG_7 from "../Images/SDG/SDG_7.png";
import SDG_9 from "../Images/SDG/SDG_9.png";
import SDG_11 from "../Images/SDG/SDG_11.png";
import SDG_13 from "../Images/SDG/SDG_13.png";
import SDG_1 from "../Images/SDG/SDG_1.png";
import SDG_2 from "../Images/SDG/SDG_2.png";
import SDG_5 from "../Images/SDG/SDG_5.png";

import report_1 from "../Images/Reports/Report_1.png";
import report_2 from "../Images/Reports/Report_2.png";
import report_3 from "../Images/Reports/Report_3.png";

export default function Dashboard() {
  return (
    <div class="container-fluid" className="DashboardContainer">
      <div class="row align-items-start">
        <div style={{display: "flex", marginTop: "10%", justifyContent: "space-evenly"}} class="column">
          <div class="card" className="ESGMetrics">
            <div class="card-body">
              <h5 class="card-title" className="title">ESG Metrics<i style={{marginLeft: "70%"}} class="bi bi-list"></i></h5>
              <div className="imgGrid">
                <img class="img-fluid" src={ESG_1} width="40" height="40" />
                <img class="img-fluid" src={ESG_2} width="40" height="40" />
                <img class="img-fluid" src={ESG_3} width="40" height="40" />
              </div>
              <div className="imgGridText">
                <h4 className="text" style={{fontWeight: "700"}}>68<sub className="text">/100</sub></h4>
                <h4 className="text" style={{fontWeight: "700"}}>38<sub className="text">/100</sub></h4>
                <h4 className="text" style={{fontWeight: "700"}}>45<sub className="text">/100</sub></h4>
              </div>
            </div>
          </div>
          <div class="card" className="SDGSummary">
          <div class="card-body">
            <h5 class="card-title" className="title">SDG Summary<i style={{marginLeft: "55%"}} class="bi bi-list"></i></h5>
            <h6 className="subHeading">Primary Goal Targets</h6>
            <div className="imgGrid">
              <img class="img-fluid" src={SDG_7} width="50" height="50" />
              <img class="img-fluid" src={SDG_9} width="50" height="50" />
              <img class="img-fluid" src={SDG_11} width="50" height="50" />
              <img class="img-fluid" src={SDG_13} width="50" height="50" />
            </div>
            <h6 className="subHeading">Secondary Goal Targets</h6>
            <div className="imgGrid">
              <img class="img-fluid" className="secImg" src={SDG_1} width="50" height="50" />
              <img class="img-fluid" className="secImg" src={SDG_2} width="50" height="50" />
              <img class="img-fluid" className="secImg" src={SDG_5} width="50" height="50" />
            </div>
          </div>
        </div>
        </div>

        <div style={{display: "flex", marginTop: "3%", justifyContent: "space-evenly"}} class="column">
          <div class="card" className="climateImpact">
            <div class="card-body">
              <h5 class="card-title" className="title">Climate Impact<i style={{marginLeft: "64%"}} class="bi bi-list"></i></h5>
              <div class="row">
                <div class="col" className="dateInput">
                  <h6 className="text">From: </h6>
                  <input type="month" class="form-control" style={{marginLeft: "2%"}}/>
                  <h6 className="text" style={{marginLeft: "2%"}}>To: </h6>
                  <input type="month" class="form-control" style={{ marginLeft: "2%" }} />
                </div>
                <div class="col" className="topInfo">
                  <h4 className="text" style={{fontWeight: "700"}}>CO<sub>2</sub></h4>
                  <h6 className="text">Footprint<h6>17.4 <sub>ton CO<sub>2</sub>/yr</sub></h6></h6>
                </div>
                <div class="col" className="topInfo">
                  <h4 class="bi bi-trash3-fill" />
                  <h6 className="text">Footprint<h6>870 <sub>kg/yr</sub></h6></h6>
                </div>
              </div>
              <img class="img-fluid" className="graph" src={graph} />
            </div>
          </div>
          <div class="card" className="Reports">
            <div class="card-body">
              <h5 class="card-title" className="title">Reports<i style={{marginLeft: "71%"}} class="bi bi-list"></i></h5>
              <div className="imgGrid">
                <img class="img-fluid" src={report_1} width="70" height="25" /> 
                <img class="img-fluid" src={report_2} width="50" height="50" />  
                <img class="img-fluid" src={report_3} width="60" height="60" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
