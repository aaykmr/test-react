import './common.css';
import search from './images/search.png'
import notif from './images/notif.png'
import profile from './images/profile.png'
import NotifBar from './NotifBar.js'
function Nav(){
    

    return(
        <div className="Nav">
           
            <div className="searchBox">
                <img src={search} alt="search" className="searchIcon"></img>
                <input className="search">
                </input>
            </div>
            <div className="Personal">
                <div className="Notif" onClick={()=>handleNotif()}>
                    <img src={notif} alt="notif"></img>
                    <div className="notifCount">0</div>
                    
                    
                    <div className="notifDrop">
                        <NotifBar />
                    </div>
        
                
                </div>
                


                <div className="profile">
                    <img src={profile} alt="profile"></img>
                </div>
               
            </div>
        </div>
    )
}

function handleNotif(){

    if(document.getElementsByClassName("notifDrop")[0].style.display == '' || document.getElementsByClassName("notifDrop")[0].style.display == 'none'){
        document.getElementsByClassName("notifDrop")[0].style.display = "block";
        
    }
    else{
        document.getElementsByClassName("notifDrop")[0].style.display = "none";
    }
    document.getElementsByClassName("notifCount")[0].innerHTML='0';

    //window.localStorage.setItem('notifs',JSON.stringify(window.state.titles));
    //document.getElementsByClassName("notifDrop")[0].innerHTML= <div><NotifBar /></div> ;
    window.state.titles=[];
    document.cookie = "Notifs=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    
}

export default Nav;