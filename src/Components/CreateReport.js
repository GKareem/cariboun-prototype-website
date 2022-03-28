import React from "react";

import "./CreateReport.css";

import report_1 from "../Images/Reports/Report_1.png";
import report_2 from "../Images/Reports/Report_2.png";
import report_3 from "../Images/Reports/Report_3.png";

export default function CreateReport() {
  return (
    <div id="createReport" class="container-fluid">
      <div class="row align-items-start">
        <div id="columnDiv" class="column">
          <h4 id="boldText">Choose Report Type</h4>
          <div id="buttonGrid">
            <button id="reportButton" type="button" class="btn" onClick={() => { window.location.pathname = `${window.location.pathname}/form` }}><img class="img-fluid" src={report_1} width="100" height="100" /></button>
            <button id="reportButton" type="button" class="btn"><img class="img-fluid" src={report_2} width="100" height="100" /></button>
            <button id="reportButton" type="button" class="btn"><img class="img-fluid" src={report_3} width="100" height="100" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
