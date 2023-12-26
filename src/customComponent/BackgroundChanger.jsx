import React, { useState } from "react";

export default function BgChanger() {
    let count =0;
  const [color, setColor] = useState("black");
  function Bgred() {
    setColor("red");
  
  }
  function Bgreen() {
    setColor("green");
  }
  function Bgray() {
    setColor("gray");
  }
  return (
    <>
      <div className="BgChangerRoot">
        <div className="bgChanger" style={{ backgroundColor: color }}>
          <h1> BgChanger</h1>
        </div>

        <div className="bButton">
          <button className="bButton1" onClick={Bgred}>
            Red
          </button>
          <button className="bButton2" onClick={Bgreen}>
            Green
          </button>
          <button className="bButton3" onClick={Bgray}>
            Gray
          </button>
        </div>
      </div>
    </>
  );
}
