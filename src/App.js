/*
  Agregad códigos de OPERADOR
  2756
  4149
  3730
*/

import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

function App() {
  const abastecedoras = [
    {
      unidad: "A-02",
      lat: "-34.55884338552234",
      lng: "-58.41211645073693",
      operadorID: "3982",
      operadorNombre: "Guido Gil",
      estado: "Despachando",
      litros: "19,2 lts"
    },
    {
      unidad: "A-03",
      lat: "-34.55784338552234",
      lng: "-58.41111645073693",
      operadorID: "2756",
      operadorNombre: "Marcelo Menendez",
      estado: "Disponible",
      litros: "6,2 lts"
    },
    {
      unidad: "A-04",
      lat: "-34.55984338552234",
      lng: "-58.41511645073693",
      operadorID: "4149",
      operadorNombre: "Fabian Fudo",
      estado: "Disponible",
      litros: "1,2 lts"
    },
    {
      unidad: "A-05",
      lat: "-34.55784338552234",
      lng: "-58.41411645073693",
      operadorID: "3730",
      operadorNombre: "Juan Juarez",
      estado: "Disponible",
      litros: "19,8 lts"
    },
    {
      unidad: "A-06",
      lat: "-34.55884338552234",
      lng: "-58.41311645073693",
      operadorID: "3735",
      operadorNombre: "Carlos Coronel",
      estado: "Disponible",
      litros: "9,1 lts"
    },
    {
      unidad: "A-07",
      lat: "-34.56084338552234",
      lng: "-58.41011645073693",
      operadorID: "3731",
      operadorNombre: "Juan Jaime",
      estado: "Despachando",
      litros: "7,2 lts"
    },
    {
      unidad: "A-08",
      lat: "-34.55884338552234",
      lng: "-58.41801645073693",
      operadorID: "3729",
      operadorNombre: "Gabriel Gomez",
      estado: "Disponible",
      litros: "1,9 lts"
    },
    {
      unidad: "A-09",
      lat: "-34.55684338552234",
      lng: "-58.41511645073693",
      operadorID: "3725",
      operadorNombre: "Antonio Alonso",
      estado: "Despachando",
      litros: "17,3 lts"
    }
  ];

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
          draggable: true
        }}
      >
        {abastecedoras.map((abastecedora) => (
          <Marker
            lat={abastecedora.lat}
            lng={abastecedora.lng}
            unidad={abastecedora.unidad}
            operadorID={abastecedora.operadorID}
            operadorNombre={abastecedora.operadorNombre}
            estado={abastecedora.estado}
            litros={abastecedora.litros}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default App;
