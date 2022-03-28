import React from "react";

import "./CreateTask.css";

export default function Reporting() {
  return (
    <div id="createTask" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="createExistingTasks" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title">Existing Tasks</h5>
              <form id="createTaskForm">
                <div id="formDiv" class="row">
                  <label id="inputLabel1" class="col-auto col-form-label">Title:</label>
                  <input id="inputField1" class="col form-control"/>
                </div>
                <div id="formDiv" class="row">
                  <label id="inputLabel2" class="col-auto col-form-label">Stakeholders:</label>
                  <input id="inputField2" class="col form-control" placeholder="Separate by a comma." />
                </div>
                <div id="formDiv" class="row">
                  <label id="inputLabel3" class="col-auto col-form-label">Deadline:</label>
                  <input id="inputField3" type="date" class="col form-control" />
                </div>
              </form>
              <div id="saveButtonDiv">
                <button id="saveButton" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#popupModal">Save</button>
              </div>
              <div class="modal fade" id="popupModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Thanks for Submitting</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
