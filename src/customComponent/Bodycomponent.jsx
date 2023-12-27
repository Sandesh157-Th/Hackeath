import React from "react";
import { Component } from "react";
import CustomCard from "./Cards";
// import UseStateDry from "./UseStated";
import UsedEffect from "./usingEffect1";
import CounterApp from "./counterApp";
import BgChanger from "./BackgroundChanger";
import UsingAllHooks from "./PasswordGenerator";
import MycomponentS from "./Loader";
export default class BodyCompo extends Component {
  render() {
    return (
      <>
        <div className="web_body">
          <div className="section_one">
            <div className="Button">
              <button>Quick Search.. </button>
            </div>
            <div className="Navlinks">
            
              <ul>
                <li>
                  <a href="# ">Documentation</a>
                </li>
                <li>
                  <a href="# ">Components</a>
                </li>
                <li>
                  <a href="# ">Templates</a>
                </li>
                <li>
                  <a href="# ">Screencasts</a>
                </li>
                <li>
                  <a href="# ">Playground</a>
                </li>
                <li>
                  <a href="# ">Resources</a>
                </li>
                <li>
                  <a href="# ">Community</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="section_two">
            <CustomCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQho6IGtZ_k_7n6mkJDHrbeq2QgolDnWaEzjswBUG1fI0ioAfpGzSHDD-Zfg9ow4iJX9zc&usqp=CAU"
              headerContent="React Icons"
              bodycontent="React India is an international conference that provides a platform for developers to share and discuss their insights and experiences with React! It Provides"
              buttonContent="Click here"
            />
              
            <div className="container">
            <UsedEffect/>
            
         
            </div>
            <div className="container">
          <BgChanger/>
          </div>
          <div className=" container-3">
          <UsingAllHooks/> 
          </div>
          <div className="contaLoad  bg-black h-60 rounded-xl text-green-500">
          <MycomponentS/>
          </div>
         
        
          </div>
         
        
        </div>
      </>
    );
  }
}
