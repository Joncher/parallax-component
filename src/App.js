import React, { Component } from "react";
import { Parallax } from "react-parallax";

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
        {/*Image 1*/}
        <Parallax
          blur={1}
          bgImage={require("./photos/bloom-blooming-blossom-462118.jpg")}
          strength={50}
        >
          <div style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Image 1"}</h1>
            </div>
          </div>
        </Parallax>

        {/*Image 2*/}
        <Parallax
          bgImage={require("./photos/daylight-environment-forest-459225.jpg")}
          strength={750}
        >
          <div style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Image 2"}</h1>
            </div>
          </div>
        </Parallax>

        {/*Image 3*/}
        <Parallax
          blur={8}
          bgImage={require("./photos/beautiful-beautiful-flowers-bloom-757889.jpg")}
          strength={1500}
        >
          <div style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Image 3"}</h1>
            </div>
          </div>
        </Parallax>

        {/*Image 4*/}
        <Parallax
          bgImage={require("./photos/asphalt-dark-dawn-531321.jpg")}
          strength={3000}
        >
          <div style={{ height: window.innerHeight }}>
            <div id={"header"} style={insideStyles}>
              <h1 id={"header"}>{"Image 4"}</h1>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
