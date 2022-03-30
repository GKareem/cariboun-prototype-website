import React, { useEffect, useState, useCallback } from "react";

import "./CreateSDG.css";

let SDGImg = [];

function goThroughImages() {
  for (let i = 0; i < 16; i++) {
    SDGImg.push({ value: i, selected: false});
  }
}

goThroughImages();

export default function CreateSDG() {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    getImgData();
  }, [])

  function imgSelected(val){

    if (SDGImg[val].selected) {
      SDGImg[val].selected = false;
    } else {
      SDGImg[val].selected = true;
    }

    setImgData();
  }

  function setImgData() {
    localStorage.setItem("ImgInfo", JSON.stringify(SDGImg));
    const imgData = localStorage.getItem("ImgInfo");

    getImgData();
  }

  function getImgData(){
    const imgData = localStorage.getItem("ImgInfo");
    if (imgData) {
      SDGImg = JSON.parse(imgData);
      forceUpdate();
    }
  }

  return (
    <div id="createSDG" class="container-fluid">
      <div class="row align-items-start">
        <div class="column">
          <div id="selectingSDG" class="card">
            <div class="card-body">
              <h5 id="boldText" class="card-title" style={{textAlign: "center"}}>New SDG Assignment</h5>
              <h5 id="text" class="card-title" style={{textAlign: "left", marginTop: "3%"}}>Choose the sustainable development goals that are relevant to your company:</h5>
              <div id="selectingImgGrid">
                {SDGImg.map((data) => {
                  return (
                    <img class="img-fluid" id="arrayImg" style={{ opacity: data.selected ? 1 : 0.5}} key={data.value} src={require("../Images/SDG/SDG_" + (data.value + 1) + ".png")} width="75" height="75" onClick={() => imgSelected(data.value)} />
                  );
                  })}
              </div>
              <div id="saveButtonDiv">
                <button id="saveButton" class="btn btn-primary btn-lg" onClick={() => { window.location.href = "/cariboun-prototype-website/#/sdg/create/save" }}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
