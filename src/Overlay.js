import './common.css';
import React from "react";
import Video from "./Video.js"
function Overlay(){
    return(
        <div>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            


            <div id="id01" className="w3-modal">
                <div className="w3-modal-content">
                    <div className="w3-container">
                        <Video />
                        <button className="button vidBtn"  onClick={() => document.getElementById('id01').style.display='none'}>Close</button>
                     </div>
                </div>
                
            </div>



        </div>
    )
}
export default Overlay;
            /*<div id="id01" class="w3-modal">
                <div class="w3-modal-content w3-card-4">
                <header class="w3-container w3-teal"> 
                    <span onClick={() => document.getElementById('id01').style.display='none'} class="w3-button w3-display-topright">&times;</span>
                    
                </header>
                <div class="w3-container">
                   <Video />
                </div>
                
                </div>
            </div>*/