import Notification from 'react-web-notification'
import React from 'react';
import ReactDom from 'react-dom';


  window.state = {
    ignore: true,
    titles: []
  };


function handlePermissionGranted(){
  console.log('Permission Granted');
  window.state.ignore = false
    
}
function  handlePermissionDenied(){
  console.log('Permission Denied');
  window.state.ignore = true
}
function handleNotSupported(){
  console.log('Web Notification not Supported');
  window.state.ignore = true
}

function handleNotificationOnClick(e, tag){
  console.log(e, 'Notification clicked tag:' + tag);
}

function handleNotificationOnError(e, tag){
  console.log(e, 'Notification error tag:' + tag);
}

function handleNotificationOnClose(e, tag){
  console.log(e, 'Notification closed tag:' + tag);
}

function handleNotificationOnShow(e, tag){
  window.playSound();
  console.log(e, 'Notification shown tag:' + tag);
}

function playSound(filename){
  document.getElementById('sound').play();
}

function handleButtonClick() {

 

  if(window.state.titles.length!=undefined && window.state.titles.length>0){
    document.getElementsByClassName("notifCount")[0].innerHTML = window.state.titles.length;
  }
 
  
  //document.cookie = "Notifs=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "Notifs="+window.state.titles.length;


  if(window.state.ignore) {
    return;
  }

  const now = Date.now();
  const title = 'Notif Recieved at ' + new Date();
  const body = 'Hello ' + new Date();
  const tag = now;
  const icon = 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png';
  // const icon = 'http://localhost:3000/Notifications_button_24.png';

  // Available options
  // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
  const options = {
    tag: tag,
    body: body,
    icon: icon,
    lang: 'en',
    dir: 'ltr',
    sound: './sound.mp3'  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
  }
  window.state.titles.push(title);
  window.state.options=options;
  window.localStorage.setItem('notifs',JSON.stringify(window.state.titles));
}

function handleButtonClick2() {
  window.props.swRegistration.getNotifications({}).then(function(notifications) {
    console.log(notifications);
  });
}

function Notifications(){
    return (
        <div>
          <button className="button notifBtn" onClick={handleButtonClick.bind()}>Generate Notif</button>
          {document.title === 'swExample' && <button onClick={window.handleButtonClick2.bind()}>swRegistration.getNotifications</button>}
          <Notification
            ignore={window.state.ignore && window.state.title !== ''}
            notSupported={handleNotSupported.bind()}
            onPermissionGranted={handlePermissionGranted.bind()}
            onPermissionDenied={handlePermissionDenied.bind()}
            onShow={handleNotificationOnShow.bind()}
            onClick={handleNotificationOnClick.bind()}
            onClose={handleNotificationOnClose.bind()}
            onError={handleNotificationOnError.bind()}
            timeout={5000}
            title={window.state.titles.pop()}
            options={window.state.options}
            //swRegistration={window.props.swRegistration}
          />
          <audio id='sound' preload='auto'>
            <source src='./sound.mp3' type='audio/mpeg' />
            <source src='./sound.ogg' type='audio/ogg' />
            <embed hidden={true} autostart='false' loop={false} src='./sound.mp3' />
          </audio>
        </div>
      )
    }

export default Notifications;