import './common.css'

function NotifBar(){

    var items =[];
    JSON.parse(window.localStorage.notifs).forEach(element => {
        items.push(
            <div style={{padding:'10px 0px'}}>{element.substring(0, element.indexOf('(')) }</div>
        )
    });
    return(
        <div>{items}</div>
    )

}

export default NotifBar;