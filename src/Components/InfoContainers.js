import React from "react";

import cssClasses from '../Pages/Projects.css' //is used

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from'@mui/material/CardMedia';
import { Typography } from "@mui/material";


const InfoContainers = (props) => {
    return (
        <Card sx={{maxWidth: '25vw', minHeight: '25vh'}}  raised='true'> 
            <Typography style={{textAlign: 'center'}} sx={{fontSize: 25}} color="text.secondary" gutterBottom> 
                {props.item.title}
            </Typography>

            <CardMedia style={{height: 250}} image={'./TestImage.png'} title="testimage"/>

            <Typography style={{textAlign: 'center'}} sx={{fontSize: 25}} color="text.secondary" gutterBottom> 
                <a href={props.item.link} style = {{verticalAlign: "middle"}}> 
                    Link 
                </a>
            </Typography>

            <Typography style={{textAlign: 'center'}} sx={{fontSize: 20}} color="text.primary" gutterBottom> 
                Languages: {props.item.languages} | Platforms: {props.item.platform}
            </Typography>

            <Typography style={{textAlign: 'left'}} sx={{fontSize: 15}} color="text.primary" gutterBottom> 
                {props.item.desc}
            </Typography>
        </Card>
    )
}

/*
const InfoContainers = (props) => {
    return (
        <div>
            <div class = "container">
                <h2 style = {{textAlign: "center"}}>{props.item.title}</h2>
                <a href={props.item.link} style = {{verticalAlign: "middle"}}> Link </a>
                <h4 style = {{textAlign: "center"}}>{props.item.languages}</h4>
            </div>
        </div>
    )
}
*/

export default InfoContainers;