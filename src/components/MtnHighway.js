import React, {Component} from "react";
import { TimelineMax} from "gsap";
import styled from 'styled-components';
import Stars from './Stars.js';


// console.log("stars: ", Stars)
const random = (min, max) =>{
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return min + (max - min) * Math.random();
}

/*
<div id="cloud" style="border: 1px solid coral; box-shadow: rgb(51, 171, 250) 52vw 31vh 36vmin 12vmin;"></div>
*/

const MtnHighwayDiv = styled.div`
.mtns {
  /* opacity: 0.2; */
}
.mtns-level-1{
  /* opacity: 0.3; */
}
  #cloud-filter , .cloud-filter-container {
    position: absolute;
    top: 0;
    left: 0;
  }
  .connect-moon {
    position: absolute;
    top: 8vh;
    left: 0;
  }
  .cloud-wrapper {
    transform-origin: 50% 50%;
    position: absolute;
    top: 0;
    width: 50vw;
    height: 50vh;
  }
  .cloud-wrapper-A {
    left: 10vw;
    transform: rotateZ(-15deg);
  }
  .cloud-wrapper-B {
    left: 35vw;
  }
  .cloud-wrapper-C {
    left: 75vw;
    top: 5vh;
  }

.cumulus {
  overflow: hidden;
  width: 200px;
  height: 25px;
  position: absolute;
  top: -30vh;
  left: -50vw;
  filter: url(#cloud-filter);
}

#cloud1 {
  box-shadow: 52vw 31vh 30vmin 12vmin rgba(255,255,255,0.9);;
}
#cloud2 {
  box-shadow: 52vw 31vh 10vmin 10vmin rgba(0,0,0,0.9);
}

#cloud3 {
  width: 50px;
  height: 1px;
  top: -25vh;
  
  box-shadow: 52vw 31vh 20vmin 12vmin rgba(255,255,255,0.9);;

}
#cloud4 {
  width: 50px;
  height: 1px;
  top: -25vh;
  box-shadow: 52vw 31vh 10vmin 8vmin rgba(0,0,0,0.7);
}
#cloud5 {
  width: 20px;
  height: 1px;
  top: -25vh;
  left: -50vw;
  box-shadow: 52vw 31vh 15vmin 5vmin rgba(255,255,255,0.9);
}

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
  z-index: 1;
   .car-element {
    filter: url(#car-blur);
    position: absolute;
    z-index: 100;
  }

`;

class MtnHighway extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state'
    };
    this.rightboundCarsDB = this.props.rightboundCarsDB;
    this.leftboundCarsDB = this.props.leftboundCarsDB;
    
    // console.log("t.p> MtnHighway ", this.props)
    this.myRightboundCars = [];
    this.myLeftboundCars = [];
  }

  createRightboundAnimation(tl, target) {
    const start = random(2);
    tl.set(target, { x: 0 })
      .to(target, random(80, 160), { x: '120vw', ease: Power0.easeNone }, start)
    
    if (tl.data.firstRun) {
      tl.data.firstRun = false;
      tl.progress(random(1));
    }
  }
  

  createLeftboundAnimation(tl, target) {
    const start = random(2);
    tl.set(target, { x: '120vw' })
      .to(target, random(80, 160), { x: '-20vw', ease: Power0.easeNone }, start)
    
    if (tl.data.firstRun) {
      tl.data.firstRun = false;
      tl.progress(random(1));
    }
  }
  
  componentDidMount() {
    TweenLite.set(this.myRightboundCars, {
      alpha: 1,
      yoyo: true
    });
    
    TweenLite.set(this.myLeftboundCars, {
      alpha: 1,
      yoyo: true
    });
    
    this.myRightboundCars.forEach(thing => {
      const tl = new TimelineMax({
        autoRemoveChildren: true,
        data: {
          firstRun: true
        },
        onComplete: () => {
          this.createRightboundAnimation(tl, thing);
        }
      });
    });    

    this.myLeftboundCars.forEach(thing => {
      const tl = new TimelineMax({
        autoRemoveChildren: true,
        data: {
          firstRun: true
        },
        onComplete: () => {
          this.createLeftboundAnimation(tl, thing);
        }
      });
    });    
  }

  render() {
const {rightboundCarsDB, leftboundCarsDB} = this;

    return (
      <MtnHighwayDiv className="mtn-highway">
  
      {/**
  */}
      <svg className="connect-moon" xmlns="http://www.w3.org/2000/svg" viewBox="00 -40 2040 1000" >
    <linearGradient id="z" x1="337.6553" x2="442.4339" y1="107.0879" y2="197.0022" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#f8733e"/>
    <stop offset=".6" stopColor="#9b6527"stopOpacity=".4"/>
    <stop offset=".7" stopColor="#9b6527"stopOpacity=".3"/>
    <stop offset=".75" stopColor="#9b6527" stopOpacity=".25"/>
    <stop offset=".85" stopColor="#9b6527" stopOpacity="0"/>
    </linearGradient>
    <filter id="moonBlur" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
  </filter>

    <circle cx="383" cy="146" r="102" fill="none" strokeWidth="24" stroke="#fde5c8" filter="url(#moonBlur)" />
    <circle cx="383" cy="146" r="69" fill="url(#z)" />
</svg>
  


        <svg width="0" className="cloud-filter-container">
          <filter id="cloud-filter">
            <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="15" />
            <feDisplacementMap in="SourceGraphic" scale="240" />
          </filter>
        </svg>
        <div className="cloud-wrapper cloud-wrapper-A">
          <div id="cloud1" className="cumulus"></div>
          <div id="cloud2" className="cumulus"></div>
        </div>
        <div className="cloud-wrapper cloud-wrapper-B">
          <div id="cloud3" className="cumulus"></div>
          <div id="cloud4" className="cumulus"></div>
        </div>
        <div className="cloud-wrapper cloud-wrapper-C">
          <div id="cloud5" className="cumulus"></div>
        </div>


        <svg width="1440px" height="900px"  xlinkHref="http://www.w3.org/2000/svg">
          <linearGradient id="bg-grad" x1="1440" x2="0" y1="900" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#333" />
            <stop offset="0.4" stopColor="#2a2a2a" />

            <stop offset="1" stopColor="#000" />/>
      </linearGradient>
      <path  className="bg" fill="url(#bg-grad)"  stroke="#b2b2b2" d="M-.5.5h1440v900H-.5z"/>
      <Stars/>    

          <g className="mtns">

            <g className="mtns-level-1">
              <linearGradient id="mtns-level-1a-grad" x1="870.9072" x2="1204.2031" y1="699.8042" y2="699.8042" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#222" />
                <stop offset="1" stopColor="#444" />
              </linearGradient>

              <linearGradient id="mtns-level-1b-grad" x1="1062.0234" x2="1534.3312" y1="610.3169" y2="667.5795" gradientTransform="matrix(1.138 -.138 -.138 1.138 -126.4939 126.4939)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#333" />
              <stop offset="1" stopColor="#444" />
            </linearGradient>

              <path fill="url(#mtns-level-1a-grad)" d="M1025.1 866.5L870.9 712.2l179.1-179 154.2 154.2z" />
              <path fill="url(#mtns-level-1b-grad)" d="M1251.1 941.8l-230.9-230.9L1324 407.2 1554.9 638z" />
            </g>

            <g className="mtns-level-2">
              <linearGradient id="mtns-level-2a-grad" x1="903.0312" x2="1108.7773" y1="733.4062" y2="733.4062" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#b3b3b3" />
                <stop offset=".5803" stopColor="#d6d6d6" />
                <stop offset="1" stopColor="#f2f2f2" />
              </linearGradient>
              <linearGradient id="mtns-level-2b-grad" x1="1030.043" x2="1297.9199" y1="733.7295" y2="733.7295" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#b3b3b3" />
                <stop offset=".5803" stopColor="#d6d6d6" />
                <stop offset="1" stopColor="#f2f2f2" />
              </linearGradient>
              <linearGradient id="mtns-level-2c-grad" x1="1175.1855" x2="1522.2031" y1="705.5674" y2="705.5674" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#b3b3b3" />
                <stop offset=".5803" stopColor="#d6d6d6" />
                <stop offset="1" stopColor="#f2f2f2" />
              </linearGradient>

              <path fill="url(#mtns-level-2a-grad)" d="M994.2 835.8L903 727.1l114.6-96.1 91.2 108.7z" />
              <path fill="url(#mtns-level-2b-grad)" d="M1145.4 866.5L1030 729l152.6-128 115.3 137.5z" />
              <path fill="url(#mtns-level-2c-grad)" d="M1316.8 876.1l-141.6-168.7L1380.6 535l141.6 168.8z" />

            </g>

            <g className="mtns-level-3">
              <linearGradient id="mtns-level-3a-grad" x1="868.4609" x2="1145.6924" y1="762.6816" y2="762.6816" gradientUnits="userSpaceOnUse">
                <stop offset="0.6" stopColor="#515151" />
                <stop offset="1" stopColor="#fff" />
              </linearGradient>
              <linearGradient id="mtns-level-3b-grad" x1="814.5996" x2="1024.4307" y1="760.8047" y2="760.8047" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#000" />
                <stop offset="0.5" stopColor="#444" />
                <stop offset="1" stopColor="#fff" />
              </linearGradient>
              <linearGradient id="mtns-level-3c-grad" x1="1067.2607" x2="1385.9473" y1="762.2119" y2="762.2119" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#000" />
              <stop offset=".5" stopColor="#515151" />
              <stop offset="1" stopColor="#fff" />
              </linearGradient>
              

              <linearGradient id="mtns-level-3d-grad" x1="1142.7832" x2="1426.6689" y1="738.6426" y2="738.6426" gradientUnits="userSpaceOnUse">
              <stop offset="0.5" stopColor="#666" />
                <stop offset="1" stopColor="#eee" />
              </linearGradient>
              <linearGradient id="mtns-level-3e-grad" x1="1179.4102" x2="1536.4629" y1="712.2715" y2="712.2715" gradientUnits="userSpaceOnUse">
                <stop offset="0.6" stopColor="#515151" />
                <stop offset="0.9" stopColor="#ddd" />
              </linearGradient>
              <path fill="url(#mtns-level-3a-grad)" d="M963.2 894.2L868.5 759 1051 631.2l94.7 135.2z" />
              <path fill="url(#mtns-level-3b-grad)" d="M903 866.5l-88.4-126.3 121.4-85 88.4 126.2z" />
              <path fill="url(#mtns-level-3c-grad)" d="M1203.2 923.3l-135.9-194.2L1250 601.2l135.9 194.1z" />
              <path fill="url(#mtns-level-3d-grad)" d="M1247.5 876.1l-104.7-149.5L1322 601.2l104.7 149.4z" />
              <path fill="url(#mtns-level-3e-grad)" d="M1275.9 872.4l-96.5-137.8L1440 552.2l96.5 137.7z" />
            </g>

            <g className="mtns-level-4">
              <linearGradient id="mtns-level-4a-grad" x1="724.6885" x2="939.3281" y1="773.2617" y2="773.2617" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3" stopColor="#1d1d1d" />
                <stop offset=".4" stopColor="#252525" />
                <stop offset="1" stopColor="#555" />
              </linearGradient>
              <linearGradient id="mtns-level-4b-grad" x1="839.9912" x2="923.0918" y1="723.6699" y2="723.6699" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3569" stopColor="#1d1d1d" />
                <stop offset=".5713" stopColor="#252525" />
                <stop offset=".7465" stopColor="#333" />
              </linearGradient>
              <linearGradient id="mtns-level-4c-grad" x1="870.5518" x2="1100.3867" y1="757.8652" y2="757.8652" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3797" stopColor="#1d1d1d" />
                <stop offset=".6078" stopColor="#252525" />
                <stop offset=".7942" stopColor="#333" />
              </linearGradient>

              <linearGradient id="mtns-level-4d-grad" x1="911.2939" x2="1090.0498" y1="737.96" y2="737.96" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3343" stopColor="#1d1d1d" />
                <stop offset=".5351" stopColor="#252525" />
                <stop offset=".6992" stopColor="#333" />
              </linearGradient>
              <linearGradient id="mtns-level-4e-grad" x1="953.1348" x2="1224.2246" y1="775.7334" y2="775.7334" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3982" stopColor="#1d1d1d" />
                <stop offset=".6373" stopColor="#252525" />
                <stop offset=".8329" stopColor="#333" />
              </linearGradient>
              <linearGradient id="mtns-level-4f-grad" x1="1119.2891" x2="1357.8828" y1="726.2656" y2="726.2656" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3343" stopColor="#1d1d1d" />
                <stop offset=".5351" stopColor="#252525" />
                <stop offset=".6992" stopColor="#333" />
              </linearGradient>
              <linearGradient id="mtns-level-4g-grad" x1="1180.9014" x2="1474.458" y1="745.7339" y2="745.7339" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3343" stopColor="#1d1d1d" />
                <stop offset=".5351" stopColor="#252525" />
                <stop offset=".6992" stopColor="#333" />
              </linearGradient>
              <linearGradient id="mtns-level-4h-grad" x1="1229.6572" x2="1469.4365" y1="725.1592" y2="725.1592" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#1a1a1a" />
                <stop offset=".3343" stopColor="#1d1d1d" />
                <stop offset=".5351" stopColor="#252525" />
                <stop offset=".6992" stopColor="#333" />
              </linearGradient>

              <path fill="url(#mtns-level-4a-grad)" d="M888.3 765.1L840 729.4l34.8-47.1 48.3 35.6z" />
              <path fill="url(#mtns-level-4b-grad)" d="M752.7 858.6l-28-130.7 186.6-40 28 130.7z" />
              <path fill="url(#mtns-level-4c-grad)" d="M944.9 807.8l-33.6-72.1 145.2-67.6 33.5 72.1z" />
              <path fill="url(#mtns-level-4d-grad)" d="M963.2 876.1l-92.6-154 137.2-82.5 92.6 154z" />
              <path fill="url(#mtns-level-4e-grad)" d="M1010.5 900l-57.4-180.7 213.7-67.9 57.4 180.8z" />
              <path fill="url(#mtns-level-4f-grad)" d="M1195.2 837.4l-75.9-113.5L1282 615.1l75.9 113.6z" />
              <path fill="url(#mtns-level-4g-grad)" d="M1299.3 889.8l-118.4-148.1 175.1-140 118.5 148.1z" />
              <path fill="url(#mtns-level-4h-grad)" d="M1469.4 620.7l-20.5-35.3-219.3 127.2L1318 865l141.7-82.2c3.2-54.1 6.4-108.1 9.7-162.1z" />
            </g>
          </g>


          <g className="evergreen-back">
            <path d="M1071.8 717l-4.8-35.3-4.7 35.3zM990.4 713l-4.6-32.9-4.5 32.9zM933.1 720l2.7-32.9 2.7 32.9zM1256.9 715l-7.2-46-7.1 46zM1165.2 718l-4.6-32.9-4.5 32.9zM1433 707l-6.3-41.1-6.4 41.1zM1228.3 709l-4-29.4-4.1 29.4zM1337.4 714l-4-29.4-4.1 29.4z" />
          </g>

          <path className="lit-highway" fill="none" stroke="#ddd" strokeWidth="0.5" d="M720 715.5h728"/>


          <g className="cars-collection">

            <g className="right-bound-cars">
            <linearGradient id="car-grad-right" x1="-70" x2="-4" y1="714.5" y2="714.5" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ed1c24" stopOpacity="0" />
            <stop offset=".1" stopColor="#ed1c24" stopOpacity=".1292" />
            <stop offset=".3" stopColor="#fff" />
            <stop offset="1" stopColor="#ffecce" stopOpacity=".1" />
          </linearGradient>
          <linearGradient id="car-grad-left" x1="-70" x2="-4" y1="714.5" y2="714.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffecce" stopOpacity=".1" />
          <stop offset=".7" stopColor="#fff" />
          <stop offset=".9" stopColor="#ed1c24" stopOpacity=".1292" />
          <stop offset="1" stopColor="#ed1c24" stopOpacity="0" />
        </linearGradient>

              {rightboundCarsDB.map((item, idx) => (
                <rect key={item.id}
                  className="car-element"
                  id={`thing-${item.id}`}
                  ref={el => {
                    this.myRightboundCars[idx] = el
                  }}
                  // width={`${item.width}`}
                  // height={`${item.height}`}
                  width="65px"
                  height="0.5px"

                  x="-70px"
                  y="714px"
                  // x={`${item.x}`}
                  // y={`${item.y}`}

                  fill="url(#car-grad-right)"
                />
              ))}
            </g>

            <g className="left-bound-cars">
              {leftboundCarsDB.map((item, idx) => (

                <rect key={item.id}
                  className="car-element"
                  id={`thing-${item.id}`}
                  ref={el => {
                    this.myLeftboundCars[idx] = el
                  }}
                  width={`${item.width}`}
                  height={`${item.height}`}
                  x={`${item.x}`}
                  y={`${item.y}`}

                  fill="url(#car-grad-left)"
                />

              ))}
            </g>

          </g>


          <g id="evergreen-front ">
            <path d="M1385.2 718l-4.9-32.9-4.8 32.9zM829.4 718l4.4-26.2 4.3 26.2zM927.5 723l4.3-26.2 4.3 26.2zM1270.1 716l-4.3-29.4-4.3 29.4zM800.5 722l4.3-26.2 4.3 26.2zM1100.5 722l4.3-26.2 4.3 26.2z" />
          </g>

          <g className="bridge-spire ">
            <linearGradient id="x" x1="592.501" x2="592.501" y1="718.5" y2="664.3552" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#1a1a1a" stopOpacity="0" />
              <stop offset=".2" stopColor="#222" stopOpacity=".5" />
              <stop offset="1" stopColor="#333" stopOpacity=".5" />
            </linearGradient>
            <filter id="lightBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
          </filter>
            <path id="bridge-spire" fill="url(#x)" d="M647.2 718.5l-54.7 54.7-54.7-54.7 54.7-54.7z" />
            <path stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.75" d="M593.2 664.6l8.8 72.6" />
            <path stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.75" d="M592.9 664.3l-10.2 72.6" />
            <path id="bridge-spire-light" fill="rgba(255,255,255,0.9);" stroke="red"  strokeLinecap="round" strokeLinejoin="round"  d="M591.5 662.5h2v2h-2z" filter="url(#lightBlur)"/>
          </g>



          <g id="bridge" >
            <path id="bridge-structure" stroke="#000" d="M567.1 715.8c-13.5 0-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.8-24.7-6.8s-24.4 3-24.7 6.7l.5-6.9h786.8l-.4 6.9c-.3-3.7-11.2-6.6-24.7-6.6s-24.4 2.8-24.7 6.8h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7" />
            <g id="bridge-lights" fill="#E7EC00" stroke="#48FF21" strokeWidth="1.4314">
              <path d="M591.6 715v2zM50.7 715v2zM2.5 715v2zM99.9 715v2zM149 715v2zM198.2 715v2zM247.4 715v2zM296.6 715v2zM345.7 715v2zM394.9 715v2zM640.8 715v2zM690 715v2zM739.1 715v2zM788.3 715v2zM444.1 715v2zM493.3 715v2zM542.4 715v2z" />
            </g>
          </g>


          <path  id="water" fill="#707070" d="M0 720h1440v180H0z" />

          <g >
            <path stroke="#000" d="M298 1124.5h786.8l-.4 6.9c-.3-3.7-11.2-6.6-24.7-6.6s-24.4 2.8-24.7 6.8h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.7-24.7-6.7s-24.4 2.7-24.7 6.7h.1c-.3-4-11.2-6.8-24.7-6.8s-24.4 3-24.7 6.7l2.5-7z" />
            <g fill="red" stroke="#ED1C24" strokeWidth="1.4314">
              <path d="M887.6 1124v2zM346.7 1124v2zM298.5 1124v2zM395.9 1124v2zM445 1124v2zM494.2 1124v2zM543.4 1124v2zM592.6 1124v2zM641.7 1124v2zM690.9 1124v2zM936.8 1124v2zM986 1124v2zM1035.1 1124v2zM1084.3 1124v2zM740.1 1124v2zM789.3 1124v2zM838.4 1124v2z" />
            </g>
          </g>
        </svg>
      </MtnHighwayDiv>
    );
  }
}

export default MtnHighway;
