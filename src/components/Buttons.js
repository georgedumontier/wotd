import React from 'react';

const Buttons = (props) => {
    // if( this.props.state.day === null ){
    if(props.day === props.actualDay){
       return(
           <div className="button-container">
            <button className="prevDay" onClick={() => props.changeDay(-1)}>&#8592; Previous word</button>
            <div className="clearFloat"></div></div>
       )
    } else if (props.day < props.actualDay && props.day > 1){
        return(
            <div className="button-container">
                <button className="prevDay" onClick={() => props.changeDay(-1)}>&#8592; Previous word</button>
                <button className="nextDay" onClick={() => props.changeDay(1)}>Next word &#8594;</button>
                <div className="clearFloat"></div>
            </div>
        )
    } else if(props.day === 1){
        return (
            <div className="button-container">
                <button className="nextDay" onClick={() => props.changeDay(1)}>Next word &#8594;</button>
                <div className="clearFloat"></div>
            </div>
        )
    }
    else{return <p>{props.day}</p>}
};

export default Buttons;