import React, { Component } from 'react';
import moment from 'moment';
import TodaysWord from './components/TodaysWord';
import TodaysDefinition from './components/TodaysDefinition';
import Footer from './components/Footer';
import Header from './components/Header';
import Buttons from './components/Buttons';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {exit, exiting} from './transitions.js';
import Swipe from 'react-easy-swipe';
import initReactFastclick from 'react-fastclick';

initReactFastclick();
let todaysDay = parseFloat(moment().format("DDD"));

class App extends Component {
  state = {
    actualDay: todaysDay,
    day: todaysDay,
    nextOrPrev: null,
    leftRight: "prev",
  };

  changeDay = nextOrPrev => {
    let {day, leftRight, actualDay} = this.state;
      if(day >= 1){
        day = day + nextOrPrev;
        if(day===0){day = 1;}
        if (day>actualDay){day = actualDay}
        if(nextOrPrev > 0){leftRight = "next";}else{leftRight = "prev"}
        this.setState({
          day,
          nextOrPrev,
          leftRight
        });
      }
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

    onSwipeLeft = () => {
      this.changeDay(1);
    }
    onSwipeRight = () => {
      this.changeDay(-1);
    }

  render() {
    return (
      <Swipe
        tolerance={100}
        onSwipeLeft={this.onSwipeLeft}
        onSwipeRight={this.onSwipeRight}
        allowMouseEvents={true}
      >
        <div className="main">
          <Header></Header>
          <Buttons changeDay={this.changeDay} day={this.state.day} actualDay={this.state.actualDay} ></Buttons>
          <div className="word-container">
            <TransitionGroup component={null}>
              <CSSTransition 
                key={this.state.day}
                timeout={{enter:300,exit:300}}
                classNames={this.state.leftRight+"-defs"}
                onExit={(node)=>exit(node,this.state.nextOrPrev)}
                onExiting={(node)=>exiting(node,this.state.nextOrPrev)}
              >
                <div>
                  <TodaysWord day={this.state.day}></TodaysWord>
                  <TodaysDefinition day={this.state.day} nextOrPrev={this.state.nextOrPrev} leftRight={this.state.leftRight}></TodaysDefinition>
                  <Footer></Footer> 
                </div>  
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </Swipe>
    );
  }
}

export default App;
