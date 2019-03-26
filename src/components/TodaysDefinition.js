import React from "react";
import words from  '../words.json';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import moment from 'moment';

class TodaysDefinition extends React.Component{
    exit = function(node){
        if(this.props.nextOrPrev > 0){
            node.classList.remove("prev-defs-exit");
            node.classList.add("next-defs-exit");
        }
        else{
            node.classList.remove("next-defs-exit");
            node.classList.add("prev-defs-exit");
        }
    }
    exiting = function(node){
        if(this.props.nextOrPrev > 0){
            node.classList.remove("prev-defs-exit-active");
            node.classList.add("next-defs-exit-active");
        }
        else{
            node.classList.remove("next-defs-exit-active");
            node.classList.add("prev-defs-exit-active");
        }
    }
    enter = function(node){
        if(this.props.nextOrPrev > 0){
            node.classList.remove("prev-defs-enter");
            node.classList.add("next-defs-enter");
        }
        else{
            node.classList.remove("next-defs-enter");
            node.classList.add("prev-defs-enter");
        }
    }
    entering = function(node){
        if(this.props.nextOrPrev > 0){
            node.classList.remove("prev-defs-enter-active");
            node.classList.add("next-defs-enter-active");
        }
        else{
            node.classList.remove("prev-defs-enter");
            node.classList.add("next-defs-enter");
        }
    }

    render(){
        let {day} = this.props;
        let {def} = words[day - 1 ];
        let {word} = words[day - 1];
        word = word.split(' ');

        return(
            <>
                {/* <TransitionGroup component={null}>
                <CSSTransition 
                    timeout={{enter:300, exit:300}}
                    key={this.props.day}
                    onEnter={(node) => this.enter(node)}
                    onEntering={(node) => this.entering(node)}
                    onExit={(node) => this.exit(node)}
                    onExiting={(node) => this.exiting(node)}
                >
                    <>
                        <h3>{moment(`${day}`,"DDD").format("MMMM Do, YYYY")}</h3>
                        <h2 className="todaysWord">{word[0]} <em>({word[1]})</em></h2>
                    </>
                </CSSTransition>
                </TransitionGroup> */}
                <div className="def-container">
                    <TransitionGroup component={null}>                
                        <CSSTransition
                        classNames="next-defs"
                        key={this.props.day}
                        timeout={{enter:300, exit:300}}
                        onEnter={(node) => this.enter(node)}
                        onEntering={(node) => this.entering(node)}
                        onExit={(node) => this.exit(node)}
                        onExiting={(node) => this.exiting(node)} >
                        <>
                            
                            
                                <ol className="defs">
                                    {def.map((def,idx) => (<li key={idx} >{def}</li>))}
                                </ol>
                            
                        </>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </>
        )
    }
}

export default TodaysDefinition;