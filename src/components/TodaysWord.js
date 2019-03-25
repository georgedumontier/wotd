import React from "react";
import words from  '../words.json';
import moment from "moment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TodaysWord = (props) => {
    let day = props.day;
    let {word} = words[day - 1];
    word = word.split(' ');
    return (
        <div className="word-container">
            <TransitionGroup component={null}>
                <CSSTransition in={true} classNames="dialog" timeout={300}>
                    <>
                        <h3>{moment(`${day}`,"DDD").format("MMMM Do, YYYY")}</h3>
                        <h2 className="todaysWord">{word[0]} <em>({word[1]})</em></h2>
                    </>
                </CSSTransition>         
            </TransitionGroup>
        </div>
    )
}

export default TodaysWord;