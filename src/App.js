import React, { Component } from 'react';
import moment from 'moment';
import TodaysWord from './components/TodaysWord';
import TodaysDefinition from './components/TodaysDefinition';
import Footer from './components/Footer';
import Header from './components/Header';
import Buttons from './components/Buttons';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {exit, exiting, enter, entering} from './transitions.js';

let todaysDay = parseFloat(moment().format("DDD"));

class App extends Component {
  state = {
    actualDay: todaysDay,
    day: todaysDay,
    nextOrPrev: null,
    appearHome: true
  };

  changeDay = nextOrPrev => {
    //update state here
    let day = this.state.day;
      if(day >= 1){
        day = day + nextOrPrev;
        if(day===0){day = 1;}
        this.setState({
          day,
          nextOrPrev
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


  render() {
    // let nextOrPrev = this.state.nextOrPrev;
    return (
      <div className="main">
      <Header></Header>
      <div className="word-container">
      <TransitionGroup component={null}>
        <CSSTransition 
          key={this.state.day}
          timeout={{enter:300,exit:300}}
          classNames="next-defs"
          onExit={(node)=>exit(node,this.state.nextOrPrev)}
          onExiting={(node)=>exiting(node,this.state.nextOrPrev)}
          onEnter={(node)=>enter(node,this.state.nextOrPrev)}
          onEntering={(node)=>entering(node,this.state.nextOrPrev)}

        >
          <TodaysWord day={this.state.day}></TodaysWord>
        </CSSTransition>
      </TransitionGroup>
      </div>
      <TodaysDefinition day={this.state.day} nextOrPrev={this.state.nextOrPrev}></TodaysDefinition>
      <Buttons changeDay={this.changeDay} day={this.state.day} actualDay={this.state.actualDay} ></Buttons>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
