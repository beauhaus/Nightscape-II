import React, {Component} from "react";
import styled from 'styled-components';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

// 'fog-box' = "fog-container"

// Fog-track=>fogCar=>fog-container=>fog-elem

const StyledFogCar = styled.section`
        height: 10vw;
        width: 100px;
        position: absolute;
        border: 1px solid burlywood;
    `;

class FogCar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: ""
        }
    }
    
    componentDidMount() {
        console.log("fogCar Mounted", this.props)
    }

    render() {
        return (<StyledFogCar className="fog-car"></StyledFogCar>)
    }
}





export default FogCar;

/*

from the docs


function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}










componentDidMount() {
    const { tlSlider,  refs, masterTl } = this;
  
    const randInt = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }
    
    const slider = arr => {
      arr.map(item => {
        tlSlider
          .to(refs[item.id], randInt(5,45), { x: "90vw", ease: Linear.easeNone }, '-=5')
      });
      return tlSlider;
    };
    
    masterTl
      .add(slider(fogList)).timeScale(10)
  }


  */