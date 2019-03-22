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
    //update state here
    let day = this.state.day;
      console.log(day);
      if(day >= 1){
        day = day + nextOrPrev;
        if(day===0){day = 1;}
        this.setState({
          day
        });
      }
    }

    componentDidMount = () => {
      console.log('just once?');
      this.arrowKeys();
    }

    arrowKeys = (e) => {
      document.addEventListener("keydown", e => {

        if(e.keyCode === 37){this.changeDay(-1);}
        if(this.state.day < this.state.actualDay){
          if(e.keyCode === 39){this.changeDay(1);}
        }
      });
      //left 37
      //right 39
    }


  render() {

    return (
      <div className="main">
      <Header></Header>
      {/* <h3>{moment().format("MMMM Do, YYYY")}</h3> */}
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
