import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { Container } from "semantic-ui-react";

//This allows you to style the inner header div
const insideStyles = {
  //header color
  background: "rgb(255,255,255)",
  padding: 20,
  position: "absolute",
  //spacing on the screen
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
export default class App extends Component {
  render() {
    return (
      <div>
        {/*Spacer*/}
        <Container style={{ height: window.innerHeight }}>
          <div id={"header"} style={insideStyles}>
            <h1 id={"header"}>{"Blank Space"}</h1>
          </div>
        </Container>
        {/*Image 1*/}
        <Parallax
          bgImage={require("./photos/daylight-environment-forest-459225.jpg")}
          strength={750}
        >
          <Container style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Image 1"}</h1>
            </div>
          </Container>
        </Parallax>
        {/*Spacer*/}
        <Container style={{ height: window.innerHeight }}>
          <div id={"header"} style={insideStyles}>
            <h1 id={"header"}>{"Blank Space"}</h1>
          </div>
        </Container>
        {/*Image 2*/}
        <Parallax
          bgImage={require("./photos/asphalt-dark-dawn-531321.jpg")}
          strength={1500}
        >
          <Container style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Image 2"}</h1>
            </div>
          </Container>
        </Parallax>
      </div>
    );
  }
}
