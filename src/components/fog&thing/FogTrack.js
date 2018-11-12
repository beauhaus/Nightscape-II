import React, {Component} from "react";
import styled from 'styled-components';
import {TweenMax, Power2, TimelineMax} from "gsap";
import FogCar from './FogCar';

const StyledFogTrack = styled.section`
    height: 10vw;
    width: 100vw;
    border: 1px solid grey;
    position: relative;
`;

class FogTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            init: ''
        }
        this.items = [];
        this.tlSlider = new TimelineMax({ 
            repeat: -1, 
            repeatDelay: 1 
        });
    }

    componentDidMount() {
        const { tlSlider,  items } = this;
        const loggit = (input) => console.log(`${input}`)
        /*********** Sliding Animation *********/
        tlSlider
        .to(items, 40, { x: "90vw", ease: Linear.easeNone }, '-=5')
        .call(loggit, [items])
    }
 
    render() {
            return (
            <StyledFogTrack className="fog-cat-wrapper">

            {this.props.fogDB.map((item, idx) => (
                <FogCar
                  key={item.id}
                  ref={fogElem => this.items[idx] = fogElem}
                />
            ))}
            
            </StyledFogTrack>
        )
    }
}

export default FogTrack;