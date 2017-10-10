/*global google*/
import React, { Component } from "react";

export default class extends Component {

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
/*       window.initMap = this.initMap; */
    console.log(`We've just mounted MyMap`)
        this.map = new google.maps.Map(this.refs.map, 
          {
            center: { lat: this.props.lat, lng: this.props.lng },
            zoom: 14
        } 
    );
  }

  render() {
    return <div id="map" ref="map"></div>;
  }
}

