import React from "react";

import "./Reporting.css";

import report_1 from "../Images/Reports/Report_1.png";
import report_2 from "../Images/Reports/Report_2.png";
import report_3 from "../Images/Reports/Report_3.png";

export default function Reporting() {
  return (
    <div id="reporting" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <h3 id="boldText" className="reportTitle">Reporting</h3>
          <button id="newReportButton" type="button" class="btn btn-lg" onClick={() => { window.location.href = "/cariboun-prototype-website/#/reporting/create" }}><h1 class="bi bi-file-earmark-plus-fill" /><h6>New Report</h6></button>
        </div>
        <div class="column">
          <div id="existingReports" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title">Existing Reports</h5>
              <table id="reportTable" class="table table-borderless">
                <tbody>
                  <tr>
                    <th><img class="img-fluid" src={report_1} /></th>
                    <th class="bold-text">2020 CDP Report</th>
                    <th><h4 class="bi bi-download" /></th>
                  </tr>
                  <tr>
                    <th><img class="img-fluid" src={report_2} width="45" height="45"/></th>
                    <th class="bold-text">2020 CDP Report</th>
                    <th><h4 class="bi bi-download" /></th>
                  </tr>
                  <tr>
                    <th><img class="img-fluid" src={report_3} /></th>
                    <th class="bold-text">2020 CDP Report</th>
                    <th><h4 class="bi bi-download" /></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
