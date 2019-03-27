import React from "react";
import words from  '../words.json';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {exit,exiting} from '../transitions';

class TodaysDefinition extends React.Component{


    render(){
        let {day} = this.props;
        let {def} = words[day - 1 ];
        console.log(this.props.leftRight);
        return(               
                <div className="def-container">
                    <TransitionGroup component={null}>
                        <CSSTransition
                            classNames={this.props.leftRight+"-defs"}
                            key={this.props.day}
                            timeout={{enter:300, exit:300}}
                            // onEnter={(node) => enter(node,this.props.nextOrPrev)}
                            // onEntering={(node) => entering(node,this.props.nextOrPrev)}
                            onExit={(node) => exit(node,this.props.nextOrPrev)}
                            onExiting={(node) => exiting(node,this.props.nextOrPrev)} 
                            
                        >
                            <ol className="defs">
                                {def.map((def,idx) => (<li key={idx} >{def}</li>))}
                            </ol>                          
                        </CSSTransition>
                    </TransitionGroup>
                </div>
        )
    }
}

export default TodaysDefinition;