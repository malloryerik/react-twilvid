import React, { Component } from "react";

// import { Button } from "reactstrap";
/* import Video from "twilio-video"; */
import Rtc1 from "../components/rtc1.js"
// import ReactDOM from "react-dom";


class InstructorRTC extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  } // !constructor ----------<<

  render() {
    return (
      <div>
       <Rtc1></Rtc1>
      </div>
    );
  }
}

export default InstructorRTC;
