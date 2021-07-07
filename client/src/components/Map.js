import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <div>
      <MapContainer
        center={[19.7515, 75.7139]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[21.0513, 75.0531]}>
          <Popup><a href="http://www.pca.ac.in/">Pratap College, Amalner </a> </Popup>
        </Marker>
        <Marker position={[21.0033, 75.4941]}>
          <Popup><a href="http://nmu.ac.in/">North Maharashtra University</a></Popup>
        </Marker>
        <Marker position={[20.1727, 79.9726]}>
          <Popup><a href="#">Gondawana University</a></Popup>
        </Marker>
        <Marker position={[17.7232, 75.8411]}>
          <Popup> <a href="http://su.digitaluniversity.ac/">Solapur University</a></Popup>
        </Marker>
        <Marker position={[18.5035, 73.7067]}>
          <Popup><a href="http://pvpittssm.edu.in/">PVPIT College, Sangli</a></Popup>
        </Marker>
        <Marker position={[16.678, 74.2555]}>
          <Popup><a href="http://www.unishivaji.ac.in/">Shivaji University Kolhapur</a></Popup>
        </Marker>
        <Marker position={[19.076, 72.8277]}>
          <Popup><a href="http://www.siesascs.edu.in/">SIES College</a></Popup>
        </Marker>
        <Marker position={[19.0257, 72.8563]}>
          <Popup><a href="http://www.gnkhalsa.edu.in/">GN Khalsa College (Autonomous)</a></Popup>
        </Marker>
        <Marker position={[19.0285, 72.8598]}>
          <Popup><a  href="https://www.bmncollege.com/">BMN college</a></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;