import React from "react";

import cssClasses from '../Pages/Projects.css' //is used

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

export default InfoContainers;