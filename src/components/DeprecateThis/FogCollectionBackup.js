import React from "react";
import styled from 'styled-components';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

// const FogCollection = (props) => {
    class FogCollection extends React.Component {
        constructor(props) {
            super(props)

            this.renderFog = this.renderFog.bind(this);
            this.tlSlider = new TimelineMax({ repeat: -1, repeatDelay: 1 });
            this.masterTl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
            console.log("p>FI: ", props.spread);
        }

    

    componentDidMount() {

    }

    render() {
    const {id,blur, shadSpread, color, numOctaves, dispScale} = props.data;
        const FogCatWrapper = styled.div`
        .fog-cat-wrapper {
            border: 1px dashed white;
            height: 100px;
            width: 100px;
        }
        `;
        return (
            <FogCatWrapper className="fog-cat-wrapper">
            {/*
            <section id={`fog-track-${id}`}>
                <div id={`fog-box-${id}`} className="fog-element-wrapper">
                 <div className={`fog-elem-${id}`}>test</div>
                </div>
                 <svg width="0">
                    <filter id={`filter-${id}`}>
                    <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves={numOctaves} />
                    <feDisplacementMap in="SourceGraphic" scale={dispScale} />
                    </filter>
                </svg>
            </section>
            */}
            
           
            
            </FogCatWrapper>
            
            )
        }
}

// export default FogCollection;




/*
   <section id={trackId}>
    <div id={item.fogboxId} className="fog-wrapper">
        <div className={`rotated ${item.fogElem}`}></div>
    </div>
</section>
<svg width="0">
    <filter id={item.filterName}>
        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves={item.numOctaves} />
        <feDisplacementMap in="SourceGraphic" scale={item.scale} />
    </filter>
</svg>

    #fog-track-1 {
        animation: fwd 220s 2s linear infinite;
        border: 1px solid lightgreen;
    }
    #fog-box-1 {
        animation: spread 140s linear infinite alternate;
        top: -0.5vh;
        // transform: scaleX(-1);
        // filter: FlipH;
    }

    #fog-box-2 {
        // border: 1px solid red;
        animation: spread 50s linear infinite alternate;
    } 
    #fog-box-3 {
        // border: 1px solid red;
        animation: spread 220s linear infinite alternate-reverse;
    } 
    
    #fog-track-2 {
        animation: fwd 250s 0.5s linear infinite;
        top: 1.5vh;
    }
    #fog-track-3 {
        animation: fwd 320s 1s linear infinite;
        top: 1.5vh;
    }
    // #fog-track-4 {
    //     animation: fwd 200s 1.5s linear infinite;
    //     top: 1.5vh;
    // }


*/




/**********STYLED COMPONENTS********* */
/*
    const FogCatWrapper = styled.div`
    .fog-element-wrapper {
        width: 250px;
        height: 100%;
        /*height doesn't effect visibility of elment */
        border: 1px solid coral;
        position: relative;
      }
    section  {
        height: 4vw;
        width: 250px;
        top: 0;
        left: 0;
        position: absolute;
      }
      #fog-track-${id}  { /* <section>*/
        left: ${props.offset}vw;
        height: 100%;
        border: 1px dashed yellow;
        animation: fwd 180s 0s linear infinite;
      }
      
      #fog-box-${id} {
        transform: translate3d(-20vw, -4vh, 0) scale3d(4, 1, 1);
        // animation: spread 120s linear infinite;
        }

    .fog-elem-${id} {
        border: 1px solid lightgreen;
        height: 1px;
        width: 110px;
        filter: url(#filter-${id});
        border-radius: 20%;
        box-shadow: 125px 100px ${blur}px ${shadSpread}px ${color};
    }

    #fog-box-4 {
        // animation: spread 140s linear infinite alternate;
    }
    `;
    */
import React from "react";
import styled from 'styled-components';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

// const FogCollection = (props) => {
    class FogCollection extends React.Component {
        constructor(props) {
            super(props)

            this.renderFog = this.renderFog.bind(this);
            this.tlSlider = new TimelineMax({ repeat: -1, repeatDelay: 1 });
            this.masterTl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
            console.log("p>FI: ", props.spread);
        }
    // const {id,blur, shadSpread, color, numOctaves, dispScale} = props.data;
    
/*
    const FogCatWrapper = styled.div`
    .fog-element-wrapper {
        width: 250px;
        height: 100%;
        /*height doesn't effect visibility of elment */
        border: 1px solid coral;
        position: relative;
      }
    section  {
        height: 4vw;
        width: 250px;
        top: 0;
        left: 0;
        position: absolute;
      }
      #fog-track-${id}  { /* <section>*/
        left: ${props.offset}vw;
        height: 100%;
        border: 1px dashed yellow;
        animation: fwd 180s 0s linear infinite;
      }
      
      #fog-box-${id} {
        transform: translate3d(-20vw, -4vh, 0) scale3d(4, 1, 1);
        // animation: spread 120s linear infinite;
        }

    .fog-elem-${id} {
        border: 1px solid lightgreen;
        height: 1px;
        width: 110px;
        filter: url(#filter-${id});
        border-radius: 20%;
        box-shadow: 125px 100px ${blur}px ${shadSpread}px ${color};
    }

    #fog-box-4 {
        // animation: spread 140s linear infinite alternate;
    }
    `;
    */
import React from "react";
import styled from 'styled-components';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

// const FogCollection = (props) => {
    class FogCollection extends React.Component {
        constructor(props) {
            super(props)

            this.renderFog = this.renderFog.bind(this);
            this.tlSlider = new TimelineMax({ repeat: -1, repeatDelay: 1 });
            this.masterTl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
            console.log("p>FI: ", props.spread);
        }
    // const {id,blur, shadSpread, color, numOctaves, dispScale} = props.data;
    
/*
    const FogCatWrapper = styled.div`
    .fog-element-wrapper {
        width: 250px;
        height: 100%;
        border: 1px solid coral;
        position: relative;
      }
    section  {
        height: 4vw;
        width: 250px;
        top: 0;
        left: 0;
        position: absolute;
      }
      #fog-track-${id}  {
        left: ${props.offset}vw;
        height: 100%;
        border: 1px dashed yellow;
        animation: fwd 180s 0s linear infinite;
      }
      
      #fog-box-${id} {
        transform: translate3d(-20vw, -4vh, 0) scale3d(4, 1, 1);
        animation: spread 120s linear infinite;
        }

    .fog-elem-${id} {
        border: 1px solid lightgreen;
        height: 1px;
        width: 110px;
        filter: url(#filter-${id});
        border-radius: 20%;
        box-shadow: 125px 100px ${blur}px ${shadSpread}px ${color};
    }

    #fog-box-4 {
        // animation: spread 140s linear infinite alternate;
    }
    `;
    */