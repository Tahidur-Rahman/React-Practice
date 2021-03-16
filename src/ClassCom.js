import React, { Component } from 'react'

// console.log(React.Component)
export class ClassCom extends Component {
    render() {
        return (
            <div>
                <Clock />
            </div>
        )
    }
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()}
    }
    componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
    render(){
        return(
            <div>
                <h2>
                    Hi!
                </h2>
                <h3>It's {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}



export default ClassCom
