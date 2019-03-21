import React from "react";
import words from  '../words.json';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class TodaysDefinition extends React.Component{
    render(){
        let day = this.props.day;
        let {def} = words[day];
        return(
        <TransitionGroup component={null}>
                <ol className="defs">
            <CSSTransition classNames="defs-transition" in={true} timeout={{enter:5000, exit:5000}} onExit={() => console.log('anything')}>
                    {def.map((def,idx) => (<li key={idx} >{def}</li>))}
            </CSSTransition>
                </ol>
         </TransitionGroup>
        )
    }
}

// const TodaysDefinition = (props) => {
//     let day = props.day;
//     let {def} = words[day];
//     return (
//         <CSSTransition classNames="defs-transition" in={true} timeout={{enter:5000, exit:5000}} onExit={() => console.log('anything')}>
//             <ol className="defs">
//                 {def.map((def,idx) => (<li key={idx} >{def}</li>))}
//             </ol>
//         </CSSTransition>
//     )
// }


export default TodaysDefinition;