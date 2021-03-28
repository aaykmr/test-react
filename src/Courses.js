import './common.css'
import Figma from './images/Figma.png'
import Insta from './images/Insta.png'
import Draw from './images/Draw.png'
import Ps from './images/Ps.png'
import Photo from './images/Photo.png'
import rating from './images/rating.png'
import clock from './images/clock.png'

import { Helmet } from 'react-helmet'


function Courses(props){

    var date1 = new Date();
    var date2 = new Date();
    var date3 = new Date();
    var date4 = new Date();
    var date5 = new Date();
    

    var courses = [
        {
            name: "Learn Figma",
            id: "Figma",
            author: "by Christopher Morgan",
            length: "6h 30min",
            rating: 4.9,
            users: 10000,
            date: {date4},
            icon: {Figma},
        },
        {
            name: "Analog photography",
            id: "Photo",
            author: "by Gordon Norman",
            length: "3h 15min",
            rating: 4.7,
            users: 8000,
            date: {date5},
            icon: {Photo},
        },
        {
            name: "Master Instagram",
            id: "Insta",
            author: "by Sophie Gill",
            length: "7h 40min",
            rating: 4.6,
            users: 12000,
            date: {date1},
            icon: {Insta},
        },
        {
            name: "Basics of Drawing",
            id: "Draw",
            author: "by Jean Tate",
            length: "11h 30min",
            rating: 4.8,
            users: 11000,
            date: {date2},
            icon: {Draw},
        },
        {
            name: "Photoshop-Essence",
            id: "Ps",
            author: "David Green",
            length: "5h 35min",
            rating: 4.7,
            users: 13000,
            date: {date3},
            icon: {Ps},
        },
            
    ];


    const vidLink=[
        {
            Figma : "https://www.youtube.com/watch?v=4W4LvJnNegA",
            Insta: "https://www.youtube.com/watch?v=_wo5C9qh4xE",
            Ps: "https://www.youtube.com/watch?v=IyR_uYsRdPs",
            Photo: "https://www.youtube.com/watch?v=LxO-6rlihSg",
            Draw: "https://www.youtube.com/watch?v=ewMksAbgdBI",
            Spanish: "https://www.youtube.com/watch?v=qE-03EATjho",
        }
    ]

    //console.log(courses[0].icon["Figma"]);
    courses.sort(GetSortOrder(props));
    var items = [];
    //console.log(props);
    if(props.value==="rating" || props.value==="date" || props.value==="users"){
        
        courses.forEach(ele => {
            items.unshift(
                <div className="InfoBox" id="course">
                    <img src={ele.icon[ele.id]} className="icon"></img>
                    <div className="textBox"> 
                        <div className="bigText">{ele.name}</div><br></br>
                        <div className="smallText">{ele.author}</div>
                    </div>
                    <button className="button" id="tabButton">
                        View course
                    </button>
                    <div className="courseInfo">
                        <img src={rating} alt="rating"></img>
                        {ele.rating}
                    </div>
                    <div className="courseInfo">
                        <img src={clock} alt="clock"></img>
                        {ele.length}
                    </div>
                    
                </div>
            )
        });
    }
    else{
        
        courses.forEach(ele => {
            items.push(
                <div className="InfoBox" id="course">
                    <img src={ele.icon[ele.id]} className="icon"></img>
                    <div className="textBox"> 
                        <div className="bigText">{ele.name}</div><br></br>
                        <div className="smallText">{ele.author}</div>
                    </div>
                    <button className="button" id="tabButton" onClick={() => {localStorage.setItem("VideoId",ele.id); document.getElementById('id01').style.display='block'; } }>
                        View course
                    </button>
                    <div className="courseInfo">
                        <img src={rating} alt="rating"></img>
                        {ele.rating}
                    </div>
                    <div className="courseInfo">
                        <img src={clock} alt="clock"></img>
                        {ele.length}
                    </div>
                    
                </div>
            )
        });
    }
    return(
        <div>
            {items}
            
        </div>
    )
}
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop.value] > b[prop.value]) {    
            return 1;    
        } else if (a[prop.value] < b[prop.value]) {    
            return -1;    
        }    
        return 0;    
    }    
}  

export default Courses;
//document.getElementsByTagName("iframe")[0].src=vidLink[0][localStorage.getItem("VideoId")]