import React from "react";
import { Component } from  'react';
export default  class Mycomp extends Component {

render(){
    return(
        <>
          <div className="Navbar">
            <div className="Logo">
            <p>HackEath</p>
           
            </div>
            <div className="Navlist">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Downloads</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
          </div>
          <hr/>
            
      
        </>

    );
}
    
}