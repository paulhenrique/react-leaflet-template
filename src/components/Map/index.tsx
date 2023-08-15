import { MapContainer, TileLayer } from "react-leaflet";

const position: [number, number] = [51.505, -0.09];

export const Map = () => {
  return (
    <div id="map">
      <MapContainer
        center={position}
        style={{
          height: "100%",
        }}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default Map;
