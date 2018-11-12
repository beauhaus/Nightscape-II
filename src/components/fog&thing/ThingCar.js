import React from "react";
import styled from 'styled-components';


const ThingCar =(props) => {
  // const {x, y, blur, spread, color, filterId} = props.shad;
  const {path} = props;
    console.log("props.path: ", props.path) 

    const StyledThingCar = styled.path`
      position: absolute;
      filter: url(#fog-blur);
      // fill: #fff;
      opacity: 0.4;
    `;
     return (<StyledThingCar className="thing-car" id={path.id}  filter="url(#fog-blur)" fill="url(#my-grad)" className="thing-car" id={path.id}  filter="url(#fog-blur)" d="M65 64h1319v5H65z"/>)
  
}

export default ThingCar;




/*
// <linearGradient id="a" x1="65" x2="1384" y1="66.5" y2="66.5" gradientUnits="userSpaceOnUse">
//     <stop offset="0" stop-color="#ed1c24" stop-opacity="0"/>
//     <stop offset=".03026382" stop-color="#ed1c24" stop-opacity=".1292"/>
//     <stop offset=".2342" stop-color="#ed1c24"/>
//     <stop offset=".565" stop-color="#faa93a"/>
//     <stop offset=".7595" stop-color="#fbb03b"/>
//     <stop offset=".9657" stop-color="#fbb03b" stop-opacity=".1427"/>
//     <stop offset="1" stop-color="#fbb03b" stop-opacity="0"/>
//   </linearGradient>
  <path fill="url(#my-grad)" className="thing-car" id={path.id}  filter="url(#fog-blur)" d="M65 64h1319v5H65z"/>
*/