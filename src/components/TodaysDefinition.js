import React from "react";
import words from  '../words.json';



const TodaysDefinition = (props) => {
    let day = props.day;
    let {def} = words[day];
    return <ol className="defs">{def.map((def,idx) => (<li key={idx} >{def}</li>))}</ol>
}


export default TodaysDefinition;