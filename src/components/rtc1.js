import React, { Component } from "react";
import ReactDOM from "react-dom";
import Video from "twilio-video";

var activeRoom;
var previewTracks;
var identity;
var roomName;

const tokenTemp = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzdlOWQ5Nzk5YmMyMzFjZmU5YTM4YWU5MGY3NWQ1ZDRiLTE1MDc2MzcxMDUiLCJpc3MiOiJTSzdlOWQ5Nzk5YmMyMzFjZmU5YTM4YWU5MGY3NWQ1ZDRiIiwic3ViIjoiQUNhMTFjZmJhNTZhMmViNTY1N2NmNDZiZWFlZjc2NTViMyIsImV4cCI6MTUwNzY0MDcwNSwiZ3JhbnRzIjp7ImlkZW50aXR5IjoiYXJnaXZlczEiLCJ2aWRlbyI6eyJyb29tIjoic3RpeCJ9fX0.E-j6hIUtqhJqqDVVTrkh9Bi0E8J_uTLVOOkEP8jDYQc"

let localTracks;

class Rtc1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        videoEl: null
    };
  }
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount = () => {
    Video.connect(tokenTemp, { name: "my-first-room" }).then(
      function(room) {
        console.log("Successfully joined a Room: ", room);
        room.on("participantConnected", function(participant) {
          console.log("A remote Participant connected: ", participant);
        });
      },
      function(error) {
        console.error("Unable to connect to Room: " + error.message);
      }
    );


    Video.createLocalTracks().then(videoTrack => {
      console.log("component did mount, video track is: ", videoTrack);
      const videoEl = videoTrack.attach();
      this.setState({
          video: videoEl
      });
      
    });

    // Attach the Tracks to the DOM.
    function attachTracks(tracks) {
      tracks.forEach(function(track) {
        console.log(`this is a track ${track}`)
        track.attach(this.refs.stix);
      });
    }

    /*     participant.tracks.forEach(track => {
        document.getElementById('remote-media-div').appendChild(track.attach());
      }); */

    var localTracksPromise = previewTracks
      ? Promise.resolve(previewTracks)
      : Video.createLocalTracks();

    localTracksPromise.then(function(tracks) {
      window.previewTracks = previewTracks = tracks;
      var previewContainer = document.getElementById("local-media");

      attachTracks(tracks, previewContainer);
    });
  }

  render() {
    return (
      <div>
        <div>Hi there, local should be under this.</div>
        <div  id="local-media-div" ref="stix" />
      </div>
    );
  }
}



export default Rtc1;
