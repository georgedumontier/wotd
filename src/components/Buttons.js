import React from 'react';

const Buttons = (props) => {
    // if( this.props.state.day === null ){
    if(props.day === props.actualDay){
       return(
           <div className="button-container"><button className="prevDay" onClick={() => props.changeDay(-1)}>Previous word of the day</button></div>
       ) 
    } else if (props.day < props.actualDay){
        return(
            <div className="button-container">
                <button className="prevDay" onClick={() => props.changeDay(-1)}>Previous word of the day</button>
                <button className="nextDay" onClick={() => props.changeDay(1)}>Next word of the day</button>
            </div>
        )
    }      
};

export default Buttons;