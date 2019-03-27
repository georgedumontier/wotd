import React, { Component } from 'react';
import moment from 'moment';
import TodaysWord from './components/TodaysWord';
import TodaysDefinition from './components/TodaysDefinition';
import Footer from './components/Footer';
import Header from './components/Header';
import Buttons from './components/Buttons';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {exit, exiting} from './transitions.js';

let todaysDay = parseFloat(moment().format("DDD"));

class App extends Component {
  state = {
    actualDay: todaysDay,
    day: todaysDay,
    nextOrPrev: null,
    appearHome: true,
    leftRight: "prev",
  };

  changeDay = nextOrPrev => {
    //update state here
    let day = this.state.day;
    let leftRight = this.state.leftRight;
      if(day >= 1){
        day = day + nextOrPrev;
        if(day===0){day = 1;}
        if(nextOrPrev > 0){leftRight = "next";}else{leftRight = "prev"}
        this.setState({
          day,
          nextOrPrev,
          leftRight
        });
      }
      // console.log(this.state.leftRight);
    }

    componentDidMount = () => {
      this.arrowKeys();
    }

    arrowKeys = (e) => {
      document.addEventListener("keydown", e => {

        if(e.keyCode === 37){this.changeDay(-1);}
        if(this.state.day < this.state.actualDay){
          if(e.keyCode === 39){this.changeDay(1);}
        }
      });
    }


  render() {
    console.log(this.state.leftRight);
    // let nextOrPrev = this.state.nextOrPrev;
    return (
      <div className="main">
      <Header></Header>
      <div className="word-container">
      <TransitionGroup component={null}>
        <CSSTransition 
          key={this.state.day}
          timeout={{enter:300,exit:300}}
          classNames={this.state.leftRight+"-defs"}
          onExit={(node)=>exit(node,this.state.nextOrPrev)}
          onExiting={(node)=>exiting(node,this.state.nextOrPrev)}
          // onEnter={(node)=>enter(node,this.state.nextOrPrev)}
          // onEntering={(node)=>entering(node,this.state.nextOrPrev)}

        >
          <TodaysWord day={this.state.day}></TodaysWord>
        </CSSTransition>
      </TransitionGroup>
      </div>
      <TodaysDefinition day={this.state.day} nextOrPrev={this.state.nextOrPrev} leftRight={this.state.leftRight}></TodaysDefinition>
      <Buttons changeDay={this.changeDay} day={this.state.day} actualDay={this.state.actualDay} ></Buttons>
      <Footer></Footer>
      {/* <div className="footer">stuff</div> */}
      </div>
    );
  }
}

export default App;
