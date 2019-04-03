import React from "react";
import words from  '../words.json';

class TodaysDefinition extends React.Component{
    render(){
        let {day} = this.props;
        let {def} = words[day - 1 ];
        return(               
                <div className="def-container">
                    <ol className="defs">
                        {def.map((def,idx) => (<li key={idx} >{def}</li>))}
                    </ol>                          
                </div>
        )
    }
}

export default TodaysDefinition;