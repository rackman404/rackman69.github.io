import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import portrait from './logo192.png';
import cssClasses from './HomePages.css' //is used

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";

const aboutMeText = "Hello, my name is Jacky Zhang and I am currently a student enrolled in Toronto Metropolitan University (Formerly Ryerson) for it's Computer Engineering Program. \n Some of my activites include working on Avionics as part of the MetRocketry Design Team and participating in Hackathons.";



const user = {
    name: 'Jacky Zhang',
    imageSrc: portrait,
    imageSize: 90,
  };

/*
  
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
*/

const HomePage = (props) => {
    return (
        <div>
            
            <h1 style = {{textAlign: "center"}}>Jacky Zhang - Portfolio Website - WIP</h1>
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

                <React.Fragment>
                    <Box sx={{minWidth: 275}}>
                        <Card variant="outlined"> 
                            <CardContent>
                                <Typography style={{textAlign: 'center'}} sx={{fontSize: 45}} color="text.secondary" gutterBottom> 
                                    About me
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </React.Fragment>

                <React.Fragment>
                    <Box sx={{maxWidth: '50vw'}}>
                        <Card variant="outlined"> 
                            <h2>{user.name}</h2>
                            <img style= {{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}
                                className="avatar"
                                src={user.imageSrc}
                                alt={'Photo of ' + user.name}
                                style={{
                                width: user.imageSize,
                                height: user.imageSize
                                }}
                            />
                            <br/>
                            <br/>
                                <Typography style={{textAlign: 'center'}} sx={{fontSize: 20}} color="text.primary" gutterBottom>
                                    {aboutMeText} 
                                </Typography>   
                        </Card>
                    </Box>
                </React.Fragment>
                

            </div>
        </div>
    );
};

export default HomePage;