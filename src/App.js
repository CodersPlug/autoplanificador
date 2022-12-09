import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

function App() {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAszKz1twEqqLHxPKh5g_qFJ7RSRyo_Ag8" }}
        defaultCenter={{
          lat: -34.55884338552234,
          lng: -58.41211645073693
        }}
        defaultZoom={17}
        options={{
          disableDefaultUI: true,
          zoomControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          mapTypeId: "satellite"
        }}
      >
        <Marker lat="-34.55884338552234" lng="-58.41211645073693"></Marker>
      </GoogleMapReact>
    </div>
  );
}

export default App;
