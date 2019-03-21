import React from "react";
import words from  '../words.json';
import moment from "moment";


const TodaysWord = (props) => {
    let day = props.day;
    let {word}=words[day];
    word = word.split(' ');
    return (
    <>
    <h3>{moment(`${day}`,"DDD").format("MMMM Do, YYYY")}</h3>
    <h2 className="todaysWord">{word[0]} <em>({word[1]})</em></h2>
    </>
    )
}

export default TodaysWord;