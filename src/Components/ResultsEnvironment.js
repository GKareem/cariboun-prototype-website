import React from "react";

import "./ResultsEnvironment.css";

import commute from "../Images/Env/commute.png";
import flight from "../Images/Env/flight.png";
import food from "../Images/Env/food.png";
import energy from "../Images/Env/energy.png";

import flight_2 from "../Images/Env/flight_2.png";
import laptop from "../Images/Env/laptop.png";
import desktop from "../Images/Env/desktop.png";

export default function ResultsEnvironment() {
  return (
    <div id="resultENV" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="resultENVCard" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title">New Assessment Results</h5>
              <div class="row align-items-start">
                <div id="firstColumn" class="column">
                  <div id="carbonDiv">
                    <h4 id="boldText">CO<sub>2</sub></h4>
                    <div id="carbonCard" class="card">
                      <div style={{marginTop: "10%"}} class="card-body">
                        <h5 id="text">Carbon Footprint</h5>
                        <h3 id="boldText">21.4</h3>
                        <h5 id="text">Tonnes Annually</h5>
                      </div>
                    </div>
                  </div>
                  <div id="breakDownDiv">
                    <h4 id="boldText">Breakdown</h4>
                    <div id="breakDownCard" class="card">
                      <div class="card-body">
                        <table id="breakDownTable" class="table table-borderless">
                          <tbody>
                            <tr>
                              <th class="col-4"><img class="img-fluid" src={commute} height="100" width="100" /></th>
                              <th id="text" class="col-8">Commute</th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square" /></th>
                            </tr>
                            <tr>
                              <th class="col-4"><img class="img-fluid" src={flight} height="100" width="100" /></th>
                              <th id="text" class="col-8">Flight</th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square" /></th>
                            </tr>
                            <tr>
                              <th class="col-4"><img class="img-fluid" src={food} height="100" width="100" /></th>
                              <th id="text" class="col-8">Food</th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square" /></th>
                            </tr>
                            <tr>
                              <th class="col-4"><img class="img-fluid" src={energy} height="100" width="100" /></th>
                              <th id="text" class="col-8">Energy</th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square-fill" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square" /></th>
                              <th class="col-auto"><h2 id="colorBox" class="bi bi-square" /></th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="submitButtonDivMiddle">
                    <button id="saveButton" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#popupModal">OFFSET NOW</button>
                  </div>
                  <div class="modal fade" id="popupModal">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">We will be in contact shortly</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="secondColumn" class="column">
                  <div>
                    <img style={{ display: "flex" }} class="img-fluid" src={flight_2} height="60" width="60" />
                    <h4 style={{ display: "flex" }} id="text">Flight<h5 id="text">/hr/passenger</h5></h4>
                    <h4 style={{ display: "flex" }} id="boldText">90 kg</h4>
                  </div>
                  <div>
                    <img style={{ display: "flex" }} class="img-fluid" src={laptop} height="60" width="60" />
                    <h4 style={{ display: "flex" }} id="text">Laptop Use<h5 id="text">/day</h5></h4>
                    <h4 style={{ display: "flex" }} id="boldText">165 kg</h4>
                  </div>
                  <div>
                    <img style={{ display: "flex" }} class="img-fluid" src={desktop} height="60" width="60" />
                    <h4 style={{ display: "flex" }} id="text">Desktop Use<h5 id="text">/day</h5></h4>
                    <h4 style={{ display: "flex" }} id="boldText">400 kg</h4>
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
