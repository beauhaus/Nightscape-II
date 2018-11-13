import React, {Component} from "react";
import styled from 'styled-components';
import MtnHighway from './MtnHighway';



const ConnectPageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* width: 100%;
  height: 100%; */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
  z-index: 1;
`;

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      // profile: props.pageStyles
    };
    console.log("P> connect: ", props)
  }

  render() {

    return (
      <ConnectPageCompDiv className="page connect-container" >
        <MtnHighway {...this.props}/>
      </ConnectPageCompDiv>
    );
  }
}

export default Connect;
