import './Section2.css';
import {Helmet} from "react-helmet";
import Notification  from './Notifications.js';
function Section2(){

    return(
        <div className="Section2">
            <div className="Right">
                <div className="InfoBox" id="Progress1">
                    <div className="textBox" id="progress">
                        <div className="BigText" style={{'font-size':'70px', padding:'0px 0px 10px 0px'}}>
                            11
                        </div> 
                        <div className="SmallText" style={{'margin-left':'20px'}}>
                            Courses Completed
                        </div> 
                        
                    </div>
                </div>
                <div className="InfoBox" id="Progress2">
                    <div className="textBox" id="progress">
                        <div className="BigText" style={{'font-size':'70px', padding:'0px 0px 10px 0px'}}>
                            4
                        </div> 
                        <div className="SmallText" style={{'margin-left':'20px'}}>
                            Courses in progress
                        </div> 
                    </div>
                </div>
               
               
               
             <div className="tab">
                 <div className="tabBox">
                    <h2>Your statistics</h2>
                    <button className="tablinks righttab" onClick={(e) => openCity('LearningHours',e)} id="defaultOpen1">Learning Hours</button>
                    <button className="tablinks righttab" onClick={(e) => openCity('MyCourses',e)}>My Courses</button>
                </div>
                <Helmet>
                <script>
                    document.getElementById("defaultOpen1").click();
                </script>
                </Helmet>
                    <br></br>
                    <div id="LearningHours" className="tabcontent rightcontent">
                        
                    </div>

                    <div id="MyCourses" className="tabcontent rightcontent">
                        
                    </div>

                    
                    
            </div>
               <Notification />
            </div>
        </div>
    )
}

function openCity(cityName,evt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("rightcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("righttab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //console.log(evt);
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

export default Section2;