import React from "react";
import styled from 'styled-components';
import FogTrack from './FogTrack';


const FogStrip = (props) => {
  const StyledFogStrip = styled.div`
    // border: 1px solid red;
    width: 100vw;
    height: 10vw;
    position: relative;
`;

  return (
    <StyledFogStrip className="fog-strip-comp">
      <FogTrack fogDB={props.fogdb}/>
    </StyledFogStrip>
    )
}
export default FogStrip;
/*


      {props.fogdb.map((item, idx) => (
        <FogCollection key={idx} offset={idx * 1} item={item} />
      ))}
    </StyledFogStrip>

    */