import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAszKz1twEqqLHxPKh5g_qFJ7RSRyo_Ag8" }}
          defaultCenter={{
            lat: -34.55884338552234,
            lng: -58.41211645073693
          }}
          defaultZoom={17}
          options={{
            disableDefaultUI: true,
            draggable: false,
            keyboardShortcuts: false,
            mapTypeId: "satellite"
          }}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default App;
