import React, { Component } from 'react';
import moment from 'moment';
import TodaysWord from './components/TodaysWord';
import TodaysDefinition from './components/TodaysDefinition';
import Footer from './components/Footer';
import Header from './components/Header';
import Buttons from './components/Buttons';

// let formatObject = function(){
//   let schema = [];
//   for (let i=1; i<367; i++){
//     schema.push({"word":"test"+i,"def":[]});
//   }
//   return JSON.stringify(schema);
// }
let todaysDay = parseFloat(moment().format("DDD"));

class App extends Component {
  state = {
    actualDay: todaysDay,
    day: todaysDay,
  };

  changeDay = nextOrPrev => {
    console.log('changing the day'+nextOrPrev);
    //update state here
    let day = this.state.day;
    day = day + nextOrPrev;
    this.setState({
      day
    });
  }


  render() {
    return (
      <div className="main">
      <Header></Header>
      <h3>{moment().format("MMMM Do, YYYY")}</h3>
      {/* { <pre>{formatObject()}</pre> } */}
      <TodaysWord day={this.state.day}></TodaysWord>
      <TodaysDefinition day={this.state.day}></TodaysDefinition>
      <Buttons changeDay={this.changeDay} day={this.state.day} actualDay={this.state.actualDay}></Buttons>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
