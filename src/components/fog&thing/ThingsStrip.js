import React from "react";
import styled from 'styled-components';
import ThingTrack from './ThingTrack';

const ThingsStrip = (props) => {
  const StyledThingsStrip = styled.div`
 `;
  return (
    <StyledThingsStrip className="things-strip-comp">
      <ThingTrack {...props} />
    </StyledThingsStrip>
    )
}
export default ThingsStrip;

/*


*/