import React from "react";
export default function CustomCard ({image, headerContent,bodycontent,buttonContent})
{
    const shoot = () => {
        alert("Great Shot!");
      }
    
    return (<>
        <div className=" CustomCards">
            <div className="Images">
            <img src={image}></img>
            </div>
           <div className="cardBody">
           <div className="Headercontent">
             <p>{headerContent}</p>
              
            </div>
            <div className="Desccontent">
                 <p>{bodycontent}</p>
                </div>
            <button className="CardButton" onClick={shoot}>
                {buttonContent}
            </button>
           </div>
        </div>
    </>)
}