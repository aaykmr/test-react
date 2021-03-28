import './Section1.css';
import './common.css';
import CircularProgressWithLabel from './Progress.js';
import icon1 from './images/icon1.png';
import left from './images/left.png';
import right from './images/right.png';
import Header from './Header';
import Courses from './Courses';
import {Helmet} from "react-helmet";
//import Video from './Video';

function Section1(){

    return(
       
        <div className="Section1">
            <Header />
            
        
                    
            <div className="Current">
                <div className="InfoBox">
                    <img src={icon1} className="icon"></img>
                    <div className="textBox"> 
                        <div className="bigText">Spanish</div><br></br>
                        <div className="smallText">by Alejandro Velasquez</div>
                    </div>
                    <CircularProgressWithLabel value={80} />
                    <button className="button" onClick={() => {localStorage.setItem("VideoId","Spanish"); document.getElementById('id01').style.display='block'; } }>
                         Continue
                    </button>
                    <div className="arrowBox">
                        <img src={left} className="arrow"></img>
                        <img src={right} className="arrow"></img>
                    </div>
                </div>
            </div>

            <div className="tab">
                 <div className="tabBox">
                    <h2>Courses</h2>
                    <button className="tablinks" onClick={(e) => openCity('AllCourses',e)} id="defaultOpen">All Courses</button>
                    <button className="tablinks" onClick={(e) => openCity('TheNewest',e)}>The Newest</button>
                    <button className="tablinks" onClick={(e) => openCity('TopRated',e)}>Top Rated</button>
                    <button className="tablinks" onClick={(e) => openCity('MostPopular',e)}>Most Popular</button>
                </div>
                <Helmet>
                <script>
                    document.getElementById("defaultOpen").click();
                </script>
                </Helmet>
                    <br></br>
                    <div id="AllCourses" className="tabcontent">
                        <Courses value={"name"}/>
                    </div>

                    <div id="TheNewest" className="tabcontent">
                        <Courses value={"date"}/>
                    </div>

                    <div id="TopRated" className="tabcontent">
                        
                        <Courses value={"rating"}/>
                    </div>
                    
                    <div id="MostPopular" className="tabcontent">
                        
                    <Courses value={"users"}/>
                    </div>
                    
            </div>
            
        </div>
        
    )
}

function openCity(cityName,evt) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //console.log(evt);
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
}
/*
function openVideo(id,e){
    return(

        <div>
            
            
            
            <div id="id01" class="w3-modal">
                <div class="w3-modal-content">
                    <div class="w3-container">
                       <span onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-display-topright">&times;</span>
                       <p>Some text. Some text. Some text.</p>
                      <p>Some text. Some text. Some text.</p>
                     </div>
                </div>
            </div>



            
        </div>
    )
}*/

export default Section1;


