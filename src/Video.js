import React from "react";
import { ReactVideo, YoutubePlayer } from "reactjs-media";
import {Helmet} from "react-helmet";
import { render } from "react-dom";
import { renderToString } from 'react-dom/server'
const Video = () => {

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
     return (
        
            
            <YoutubePlayer
                //src="https://www.youtube.com/watch?v=qE-03EATjho"
                src={vidLink[0][localStorage.getItem("VideoId")]}
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                width="100%"
                height="100%"
                id= "video"
                allowFullScreen={true}
                
                // other props
            />
        
    );

 

   
};


   /*let div = document.createElement('div');
    div.id = 'content';
    div.innerHTML = render(<div> <YoutubePlayer
                    //src="https://www.youtube.com/watch?v=qE-03EATjho"
                    src={vidLink[0][localStorage.getItem("VideoId")]}
                    poster="https://www.example.com/poster.png"
                    primaryColor="red"
                    width="100%"
                    height="100%"
                    id= "video"
                    allowFullScreen={true}
                /></div>);
    console.log(div);
    return(
        <div>{div.innerHTML}</div>
        
    )*/


export default Video;