import React, { Component } from "react";
import Connect from './Connect';

const rightboundCars = [
  {
    id: "101right",
    name: "car101right",
    width: "65px",
    height: "0.5px",
    x: "-70",
    y: "714"
  },
  {
    id: "102right",
    name: "car102right",
    width: "65",
    height: "0.5",
    x: "-70",
    y: "714"
  },
  {
    id: "103right",
    name: "car103right",
    width: "65",
    height: "0.5",
    x: "-70",
    y: "714"
  },
  {
    id: "104right",
    name: "car104right",
    width: "65",
    height: "0.5",
    x: "-70",
    y: "714"
  }, {
    id: "105right",
    name: "car105right",
    width: "65",
    height: "0.5",
    x: "-70",
    y: "714"
  }
]

const leftboundCars = [
    {
      id: "101left",
      name: "car101left",
      width: "65",
      height: "0.5",
      x: "-70",
      y: "714"
    },
    {
      id: "102left",
      name: "car102left",
      width: "65",
      height: "0.5",
      x: "-70",
      y: "714"
    },
    {
      id: "103left",
      name: "car103left",
      width: "65",
      height: "0.5",
      x: "-70",
      y: "714"
    },
    {
      id: "104left",
      name: "car104left",
      width: "65",
      height: "0.5",
      x: "-70",
      y: "714"
    }, {
      id: "105left",
      name: "car105left",
      width: "65",
      height: "0.5",
      x: "-70",
      y: "714"
    }
  ]
  
  
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // things
      rightboundCars,
      leftboundCars
    }
  }
  render() {
    return (
      <div className="app-wrapper">
        <Connect 
        rightboundCarsDB={this.state.rightboundCars} 
        leftboundCarsDB={this.state.leftboundCars}
        />
      </div>
    );
  }
}