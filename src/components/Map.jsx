import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.75876235961914,
    lng: -73.97034454345703,
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_MY_GOOGLE_API_KEY}
      libraries={["maps", "marker"]}
    >
      <GoogleMap
        id="DEMO_MAP_ID"
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={14}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
