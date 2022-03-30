import React from "react";

import "./Tasks.css";

import Pic_1 from "../Images/Tasks/Pic_1.png";
import Pic_2 from "../Images/Tasks/Pic_2.png";
import Pic_3 from "../Images/Tasks/Pic_3.png";
import Pic_4 from "../Images/Tasks/Pic_4.png";
import Pic_5 from "../Images/Tasks/Pic_5.png";
import Pic_6 from "../Images/Tasks/Pic_6.png";

export default function Reporting() {
  return (
    <div id="tasks" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <h3 id="boldText" className="tasksTitle">Tasks</h3>
          <button id="newTaskButton" type="button" class="btn btn-lg" onClick={() => { window.location.href = "/cariboun-prototype-website/#/tasks/create" }}><h1 class="bi bi-file-earmark-plus-fill" /><h6>New Task</h6></button>
        </div>
        <div class="column">
          <div id="existingTasks" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title">Existing Tasks</h5>
              <table id="tasksTable" class="table table-borderless">
                <tbody>
                  <tr>
                    <th class="col-2"><h2 class="bi bi-app" /></th>
                    <th id="boldText" class="col-6">Review data from December report</th>
                    <th id="profileImg" class="col-4">
                      <img class="img-fluid" src={Pic_1} width="55" height="55" />
                      <img class="img-fluid" src={Pic_2} width="55" height="55" />
                      <img class="img-fluid" src={Pic_3} width="55" height="55" />
                      <button id="dateButton" class="btn">MAR<br/>12</button>
                    </th>
                  </tr>
                  <tr>
                    <th class="col-2"><h2 class="bi bi-app" /></th>
                    <th id="boldText" class="col-6">Review Carbon emission from 2021</th>
                    <th id="profileImg" class="col-4">
                      <img class="img-fluid" src={Pic_4} width="55" height="55" />
                      <img class="img-fluid" src={Pic_5} width="55" height="55" />
                      <img class="img-fluid" src={Pic_6} width="55" height="55" />
                      <button id="dateButton" class="btn">MAR<br/>18</button>
                    </th>
                  </tr>
                  <tr>
                    <th class="col-2"><h2 class="bi bi-app" /></th>
                    <th id="boldText" class="col-6">Review of supplier ESG data</th>
                    <th id="profileImg" class="col-6">
                      <img class="img-fluid" src={Pic_5} width="55" height="55" />
                      <img class="img-fluid" src={Pic_6} width="55" height="55" />
                      <img class="img-fluid" src={Pic_4} width="55" height="55" />
                      <img class="img-fluid" src={Pic_2} width="55" height="55" />
                      <button id="dateButton" class="btn">MAR<br/>21</button>
                    </th>
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
