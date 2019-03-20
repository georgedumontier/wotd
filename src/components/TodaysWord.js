import React from "react";
import words from  '../words.json';


const TodaysWord = (props) => {
    let day = props.day;
    let {word}=words[day];
    word = word.split(' ');
    return <h2 className="todaysWord">{word[0]} <em>({word[1]})</em></h2>
}

export default TodaysWord;