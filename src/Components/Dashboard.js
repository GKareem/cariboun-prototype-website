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
    <div class="container" className="DashboardContainer">
      <div class="card" className="ESGMetrics">
        <div class="card-body">
          <h5 class="card-title" className="title">ESG Metrics<i style={{marginLeft: "70%"}} class="bi bi-list"></i></h5>
          <div className="imgGrid">
            <img className="imgSize" src={ESG_1} />
            <img className="imgSize" src={ESG_2} />
            <img className="imgSize" src={ESG_3} />
          </div>
          <div className="imgGridText">
            <h4 className="text" style={{fontWeight: "700"}}>68<sub className="text">/100</sub></h4>
            <h4 className="text" style={{fontWeight: "700"}}>38<sub className="text">/100</sub></h4>
            <h4 className="text" style={{fontWeight: "700"}}>45<sub className="text">/100</sub></h4>
          </div>
        </div>
      </div>
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
          <img className="graphSize" src={graph} />
        </div>
      </div>
      <div class="card" className="SDGSummary">
        <div class="card-body">
          <h5 class="card-title" className="title">SDG Summary<i style={{marginLeft: "55%"}} class="bi bi-list"></i></h5>
          <h6 className="subHeading">Primary Goal Targets</h6>
          <div className="imgGrid">
            <img className="imgSize" src={SDG_7} />
            <img className="imgSize" src={SDG_9} />
            <img className="imgSize" src={SDG_11} />
            <img className="imgSize" src={SDG_13} />
          </div>
          <h6 className="subHeading">Secondary Goal Targets</h6>
          <div className="imgGrid">
            <img className="secondaryImgSize" src={SDG_1} />
            <img className="secondaryImgSize" src={SDG_2} />
            <img className="secondaryImgSize" src={SDG_5} />
          </div>
        </div>
      </div>
      <div class="card" className="Reports">
        <div class="card-body">
          <h5 class="card-title" className="title">Reports<i style={{marginLeft: "71%"}} class="bi bi-list"></i></h5>
          <div className="imgGrid">
            <img className="imgSize" src={report_1} /> 
            <img className="imgSize" style={{maxHeight: "calc(154px / 3)", maxWidth: "calc(154px / 3)"}} src={report_2} />  
            <img className="imgSize" src={report_3} />  
          </div>
        </div>
      </div>
    </div>
  )
}
