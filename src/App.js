import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { Container } from "semantic-ui-react";

const insideStyles = {
  background: "rgb(128,128,128,0.3)",
  padding: 20,
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
export default class App extends Component {
  render() {
    console.log(this.props.image);
    return (
      <div id={"background"}>
        <Parallax
          bgImage={require("./photos/daylight-environment-forest-459225.jpg")}
          strength={750}
        >
          <Container style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Welcome to PCC"}</h1>
            </div>
          </Container>
        </Parallax>
        <Parallax strength={500}>
          <Container style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Welcome to PCC"}</h1>
            </div>
          </Container>
        </Parallax>
        <Parallax
          bgImage={require("./photos/daylight-environment-forest-459225.jpg")}
          strength={1500}
        >
          <Container style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Welcome to PCC"}</h1>
            </div>
          </Container>
        </Parallax>
      </div>
    );
  }
}
