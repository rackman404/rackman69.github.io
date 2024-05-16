import React from "react";
import {Link} from "react-router-dom";

import cssClasses from './Projects.css' //is used

import InfoContainersData from "../Components/InfoContainersData"
import InfoContainers from "../Components/InfoContainers"

const headerText = "Personal Projects";
const softwareHeaderText = "Software";
const ArtHeaderText = "Digital Art";

const Projects = (props) => {
    let softwareInfoList = InfoContainersData.projectList;
    let artInfoList = InfoContainersData.artProjectList;

    return(
        <React.Fragment>
            <div>
                <h1 style = {{textAlign: "center"}}>{headerText}</h1>
            </div>
            <div>
                <h2 style = {{textAlign: "center"}} >{softwareHeaderText}</h2>

                <div class = "grid-container">
                            {softwareInfoList.map((item,index) => {
                                return (
                                    <InfoContainers key={index} item = {item}/>
                                )
                            }    
                    )}
                </div>
            </div>
            <div>
                <h2 style = {{textAlign: "center"}} >{ArtHeaderText}</h2>

                <div class = "grid-container">
                            {artInfoList.map((item,index) => {
                                return (
                                    <InfoContainers key={index} item = {item}/>
                                )
                            }    
                    )}
                </div>
            </div>
            
        </React.Fragment>
    )
    
}

export default Projects;