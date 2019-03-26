import React from "react";
import words from  '../words.json';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class TodaysDefinition extends React.Component{
    // exitRight = function(node){
    //     node.classList.remove("prev-defs-transition-exit","prev-defs-transition-exit-active");
    //     node.classList.add("next-defs-transition-exit","next-defs-transition-exit-active");
    //     console.log(node.classList);
    // }

    render(){
        let {day,nextOrPrev} = this.props;
        let {def} = words[day - 1 ];
        let transitionClass = "defs";
        if(nextOrPrev === -1){
            transitionClass = "prev-defs";
        }
        else{transitionClass = "next-defs";}
        return(
            <div className="def-container">
                <TransitionGroup component={null}>
                    <CSSTransition
                    classNames={transitionClass}
                    key={this.props.day}
                    timeout={{enter:300, exit:300}} >
                        <ol className="defs">
                            {def.map((def,idx) => (<li key={idx} >{def}</li>))}
                        </ol>
                    </CSSTransition>
                </TransitionGroup>
            </div>
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