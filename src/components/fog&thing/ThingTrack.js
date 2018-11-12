import React, {Component} from "react";
import styled from 'styled-components';
import {TweenMax, Power2, TimelineMax} from "gsap";
import ThingCar from './ThingCar';

const StyledThingTrack = styled.section`
    // position: absolute;
`;

const random = (min, max) =>{
    if (max == null) { max = min; min = 0; }
    if (min > max) { var tmp = min; min = max; max = tmp; }
    return min + (max - min) * Math.random();
  }

class ThingTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            init: ''
        }
        this.thingsDB = this.props.thingsDB;
        this.myThings = [];
    }

    createAnimation(tl, target) {
        const start = random(2);
        tl.set(target, { x: 0 })
          .to(target, random(60, 170), {alpha: random(0,1), x: '120vw', ease: Power0.easeNone }, start)
        
        if (tl.data.firstRun) {
          tl.data.firstRun = false;
          tl.progress(random(1));
        }
      }

    componentDidMount() {
        TweenLite.set(this.myThings, {
          alpha: 1
        });
        
        this.myThings.forEach(thing => {
          const tl = new TimelineMax({
            autoRemoveChildren: true,
            data: {
              firstRun: true
            },
            onComplete: () => {
              this.createAnimation(tl, thing);
            }
          });
        });    
      }
      
 
    render() {
        const { thingsDB } = this.props;

            return (
            <StyledThingTrack className="thing-track-wrapper">

                    {thingsDB.map((item, idx) => (
                        
                        <div key={item.id}
                            className="thing-container"
                            id={`thing-${item.id}`}
                            ref={el => {
                                this.myThings[idx] = el
                            }}
                        >
                            <svg width="100%" viewBox="0 0 1424 245" preserveAspectRatio="none">
                            <defs>
                                <filter id="fog-blur" x="-50%" y="-50%" width="250%" height="200%">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                                </filter>
                                <linearGradient id="my-grad" x1="65" x2="1384" y1="66.5" y2="66.5" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#ed1c24" stopOpacity="0" />
                                    <stop offset=".03026382" stopColor="#ed1c24" stopOpacity=".1292" />
                                    <stop offset=".2342" stopColor="#ed1c24" />
                                    <stop offset=".565" stopColor="#faa93a" />
                                    <stop offset=".7595" stopColor="#fbb03b" />
                                    <stop offset=".9657" stopColor="#fbb03b" stopOpacity=".1427" />
                                    <stop offset="1" stopColor="#fbb03b" stopOpacity="0" />
                                </linearGradient>
                                </defs>
                                <ThingCar path={item.path} />
                            </svg>
                        </div>
                            
            ))}
            
            </StyledThingTrack>
        )
    }
}

export default ThingTrack;