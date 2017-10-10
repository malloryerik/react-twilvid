/*global google*/
import React, { Component } from "react";
import { Player } from "video-react";
/* import {
  Card,
  // CardBlock,
  CardText,
  CardTitle,
  CardImg,
  CardSubtitle,
  Container
  // Button
} from "reactstrap"; */
import GoogleMap from "../Maps/google_map.js";

import MyMap from "../Maps/google_map.js"


class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
          <div id="map" style={{ height: "100%" }}>
            <MyMap lat={37.6482} lng={127.0344} />
          </div>
/* 


          <Player
            playsInline
            poster="Gaugin-women.jpg"
            src="AthenianDemocracy.mp4"
          />

          <br />

          <hr />

          <Card className="card cardy">
            <CardImg
              top
              width="100%"
              src="Gauguin-women.jpg"
              alt="Card image cap"
            />

            <CardTitle>Today's goals</CardTitle>
            <CardSubtitle>Grammar points</CardSubtitle>
            <CardText>interesting</CardText>
            <ul>
              <li>Prepositional phrases</li>
              <li>Present perfect</li>
            </ul>
          </Card> */

    );
  }
}

export default Playground;
