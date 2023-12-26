import { useState } from "react";

import React from "react";

export default function UseStateDry(){
    const [color , ChangeColor] = useState('blue');
return (
    <>
        <h1 style={{backgroundColor:color}}>
        The color will be {color}
        </h1>
        <button  onClick={()=>ChangeColor("Blue")}>CangeColor</button>
    </>


);
} 