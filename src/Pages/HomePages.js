import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import portrait from './logo192.png';
import cssClasses from './HomePages.css' //is used

const aboutMeText = "Hello, my name is Jacky Zhang and I am currently a student enrolled in Toronto Metropolitan University (Formerly Ryerson) for it's Computer Engineering Program. \n Some of my activites include working on Avionics as part of the MetRocketry Design Team and participating in Hackathons.";



const user = {
    name: 'Jacky Zhang',
    imageSrc: portrait,
    imageSize: 90,
  };
  
function Profile(){
return(
    <>
    <h1>{user.name}</h1>
    <img
        className="avatar"
        src={user.imageSrc}
        alt={'Photo of ' + user.name}
        style={{
        width: user.imageSize,
        height: user.imageSize
        }}
        />
        <AboutSection/>
    </>  
);
}


function AboutSection(){
return(
    <>
    <h1>About</h1>
    <>{Profile}</>
    <text>{aboutMeText}</text>
    </>
);
}

const HomePages = (props) => {
    return (
        <div>
            
            <h1 style = {{textAlign: "center"}}>Jacky Zhang - Portfolio Website</h1>

            <br/>
            <div >
                <div style={{textAlign: 'center'}}>
                    {/* Endpoint to route to Target component */}
                    <Link to="/">Home</Link> 
                    <text> </text>
                    <Link to="/About">About</Link>
                    <text> </text>
                    <Link to="/Projects">Projects</Link>
                    <text> </text>
                    <Link to="/Design">Design</Link>
                    <text> </text>
                </div>

                <div class="aboutMeContainer">
                    <br/>
                    <h1>About Me</h1>
                    <div>
                        <h2>{user.name}</h2>
                        <img
                            className="avatar"
                            src={user.imageSrc}
                            alt={'Photo of ' + user.name}
                            style={{
                            width: user.imageSize,
                            height: user.imageSize
                            }}
                        />

                        <br/>

                        <div class="textSubContainer">
                            <div >{aboutMeText} </div>  
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePages;