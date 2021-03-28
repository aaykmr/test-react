import './Menu.css';
import F from "./images/F.png"
import Home from "./images/Home.png"
import Logout from "./images/Logout.png"
import Courses from "./images/Courses.png"
import Messages from "./images/Messages.png"
import People from "./images/People.png"
import Settings from "./images/Settings.png"

function Menu() {
    var items= ["Home", "Courses", "People", "Messages", "Settings", "Logout"];
    return(
        <div className="Menu">
        
        <div className="Rect-2">
            <div className="Logo">
                <img src={F} alt="F"></img>
            </div>
            <div className="Collection">
                <div className="Groups">
                    <img src={Home} alt="Home"></img>
                </div>
                <div className="Groups">
                    <img src={Courses} alt="Courses"></img>
                </div>
                <div className="Groups">
                    <img src={People} alt="People"></img>
                </div>
                <div className="Groups">
                    <img src={Messages} alt="Messages"></img>
                </div>
                <div className="Groups">
                    <img src={Settings} alt="Settings"></img>
                </div>
            </div>
            <div className="Logout">
                <img src={Logout} alt="Logout"></img>
                </div>
        </div>
        <div className="Rect-5"></div>
        
        
        
      </div>
      
    );
}

function MenuItems(){
    var items= ["Home", "Courses", "People", "Messages", "Settings", "Logout"];

    items.forEach(element => {
        return(
            <div className="Groups">
                {element}
            </div>
        );
    });

}

export default Menu;